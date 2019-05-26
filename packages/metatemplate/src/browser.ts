import os from "os";
import fs from "fs";
import path from "path";
import rmfr from "rmfr";
import { TemplateInput } from "./index";
import { fileToUri, sleep } from "./common";
import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";

export type BrowserInstanceArgs = {
  template: TemplateInput;
};

type BrowserInstanceResponse = {
  bodyNodes: Node[];
  dispose: Function;
  disposeAll: Function;
};

type BrowserInstanceOptions = {
  type?: "jsdom" | "puppeteer" | undefined;
};

const defaultBrowserOptions: BrowserInstanceOptions = {
  type: "jsdom"
};

export const getBrowser = async (
  args: BrowserInstanceArgs,
  options?: BrowserInstanceOptions | undefined
) => {
  let browser;
  const { template } = args;
  const newOptions = { ...defaultBrowserOptions, ...options };
  switch (newOptions.type) {
    case "jsdom": {
      browser = await getJSDOM({ template });
      break;
    }
    case "puppeteer": {
      browser = await getPuppeteer({ template });
      break;
    }
  }
  return browser;
};

export const getJSDOM = async ({
  template
}: BrowserInstanceArgs): Promise<BrowserInstanceResponse> => {
  const dom = new JSDOM(wrapBodyHtml(template));
  convertAliases(dom);

  // Although this is JSDOM we need to be interopable with Puppeteer
  // and Puppeteer uses async message passing to interact with Chromium,
  // so we need async APIs too so that we can be compatible.
  (dom.window.Element.prototype as any).getOriginalAttribute = function(name) {
    // See Puppeteer's getOriginalAttribute docs for the reason for this.
    const cache = this._originalAttributes || {};
    if (!cache[name]) {
      // It's possible that setAttribute was called before this getAttribute
      // so the value we're caching might be too late, so..
      // TODO: Ensure this cache is caching the initial value, not at runtime
      // depending on calling order.
      cache[name] = this.getAttribute(name);
      this._originalAttributes = cache;
    }
    return cache[name];
  };
  (dom.window.Element.prototype as any).getOuterHTML = async function() {
    return this.outerHTML;
  };

  const bodyNodes: Node[] = Array.from(dom.window.document.body.childNodes);

  return {
    bodyNodes,
    dispose: async () => {
      // I know this is weird code but...
      // https://github.com/jsdom/jsdom/issues/1682#issuecomment-270310752
      dom.window.close();
      await new Promise(resolve => setTimeout(resolve, 1));
      gc();
    },
    disposeAll: async () => {
      // pass
    }
  };
};

let count = 0;
let sharedBrowserInstance;
const CLOSE_PAGE_AFTER_ms = 5000;
const CLOSE_BROWSER_AFTER_ms = CLOSE_PAGE_AFTER_ms + 100; // must be larger than CLOSE_PAGE_AFTER_ms to ensure all pages are closed before the browser is closed

export const getPuppeteer = async ({
  template
}: BrowserInstanceArgs): Promise<BrowserInstanceResponse> => {
  count++;
  const htmlDocument = wrapBodyHtml(template);
  let browser;

  if (sharedBrowserInstance === undefined) {
    sharedBrowserInstance = "poll";
    browser = await puppeteer.launch({
      args: ["--disable-dev-shm-usage", "--no-sandbox"]
    });
    sharedBrowserInstance = browser;
  } else {
    while (sharedBrowserInstance === "poll") {
      await sleep(100); // wait for browser to start
    }
    browser = sharedBrowserInstance;
  }

  const page = await browser.newPage();
  const tmpDir = await fs.promises.mkdtemp(
    path.join(os.tmpdir(), "metatemplate-")
  );
  const tmpPath = path.join(tmpDir, "index.html");
  const fileUri = fileToUri(tmpPath);
  await fs.promises.writeFile(tmpPath, htmlDocument, { encoding: "utf-8" });

  await page.goto(fileUri, {
    waitUntil: "domcontentloaded"
  });

  const bodyHandle = await page.$("body");
  await page.exposeFunction("hostLog", (...args) => {
    console.log(...args);
  });

  const bodyNodesObj = await page.evaluate(body => {
    const ATTR_ID = "data-metatemplate-id";
    const pWalk = (node, index, parentPath?) => {
      const id = `${parentPath ? `${parentPath}_` : ""}${index}`;
      const attrId = `id-${id}`;
      if (node.nodeType === 1) {
        node.setAttribute(ATTR_ID, attrId);
      }

      const normalise = (css: string): string => {
        // Chrome turns hexadecimal colours into rgb(r, g, b) so
        // we need to convert them back for our SCSS/CSS Variables
        // replacer to work consistently.

        return css.replace(/rgb\((.*?)\)/gi, (match, decimalColour) => {
          const hexColour =
            "#" +
            decimalColour
              .split(",")
              .map(val => {
                const colourBase10String = val.trim();
                const colourNumber = parseInt(colourBase10String, 10);
                const colourHexadecimal = colourNumber.toString(16);
                return colourHexadecimal.length === 2
                  ? colourHexadecimal
                  : `0${colourHexadecimal}`;
              })
              .join("");
          return hexColour;
        });
      };

      const renderRule = rule => {
        return {
          type: rule.type && rule.type.toString(),
          selectorText: rule.selectorText && rule.selectorText.toString(),
          conditionText: rule.conditionText && rule.conditionText.toString(),
          media: rule.media && Array.from(rule.media).map(renderRule),
          cssRules: rule.cssRules && Array.from(rule.cssRules).map(renderRule),
          cssText: rule.cssText && normalise(rule.cssText.toString())
        };
      };

      const styleSheets = Array.from(window.document.styleSheets).map(
        renderRule
      );

      const nodeObj: any = {
        isPuppeteer: true,
        nodeType: node.nodeType,
        ownerDocument: { styleSheets },
        tagName: node.tagName && node.tagName.toLowerCase(),
        nodeValue: node.nodeValue,
        outerHTML: node.outerHTML,
        index,
        id: attrId,
        attributes:
          node.attributes &&
          Array.from(node.attributes).reduce((acc, attr) => {
            // (window as any).hostLog(JSON.stringify(Object.keys(attr)));
            // (window as any).hostLog(JSON.stringify(attr));
            if ((attr as any).name !== ATTR_ID) {
              acc[(attr as any).name] = (attr as any).value;
            }
            return acc;
          }, {})
      };
      if (node.childNodes) {
        nodeObj.childNodes = Array.from(node.childNodes).map(
          (childNode, index, arr) => pWalk(childNode, index, id)
        );
      }
      return nodeObj;
    };
    return Array.from(body.childNodes).map((childNode, index) => {
      return pWalk(childNode, index);
    });
  }, bodyHandle);

  await bodyHandle.dispose();
  await rmfr(tmpDir);

  function FakeNode(obj) {
    this.type = obj.type;
    this.isPuppeteer = obj.isPuppeteer;
    this.nodeType = obj.nodeType;
    this.ownerDocument = obj.ownerDocument;
    this.tagName = obj.tagName;
    this.outerHTML = obj.outerHTML;
    this.nodeValue = obj.nodeValue;
    this.childNodes = obj.childNodes.map(childNode => {
      return new FakeNode(childNode);
    });
    this._matches = {};
    this.id = obj.id;
    this._attributes = { ...obj.attributes };
    this._originalAttributes = { ...obj.attributes };
    this.metaTemplateAttributes = [];
  }

  FakeNode.prototype.getOriginalAttribute = function(name) {
    // For the real browser's `.matches()` to work we have to
    // make changes to class="" and other real attributes that CSS
    // selectors might match.
    //
    // But in attributes.ts we also parse attribute values
    // and register dynamicKeys against each templateFormat, so if
    // we discarded the original attribute value then that parsing
    // would fail (eg) the original value might be
    //
    //   class="base {{ width: fixed | fluid }}"
    //
    // So to make the real browser `.matches()` work we need to
    // make that,
    //
    //   class="base fixed fluid"
    //
    // (NOTE: we don't support CSS `not()` selectors etc., so adding
    // multiple potentially conflicting classes is ok from a
    // `.matches()` perspective)
    //
    // So we use `_originalAttributes` as a cache for the initial
    // value.
    return this._originalAttributes[name];
  };
  FakeNode.prototype.getAttribute = function(name) {
    if (typeof name !== "string") {
      if (console.trace) {
        console.trace();
      }
      throw new Error(
        `MetaTemplate: Internal error. Expected string in Puppeteer wrapper for getAttribute but got "${typeof name}" from ${arguments}. Value was ${JSON.stringify(
          name,
          null,
          2
        ).substring(0, 500)}...`
      );
    }
    return this._attributes[name];
  };
  FakeNode.prototype.getHandle = async function() {
    return await page.$(`[data-metatemplate-id="${this.id}"]`);
  };
  FakeNode.prototype.getAttributeNames = function() {
    return Object.keys(this._attributes);
  };
  FakeNode.prototype.matches = async function(selector) {
    const handle = await this.getHandle();
    const isMatch = await page.evaluate(
      (tag, selector) => {
        return tag.matches(selector);
      },
      handle,
      selector
    );
    return isMatch;
  };
  FakeNode.prototype.setAttribute = async function(
    name: string,
    value?: string | undefined
  ) {
    const newValue = value !== undefined ? value : "";

    this._attributes[name] = newValue;
    const handle = await this.getHandle();
    this.outerHTML = await page.evaluate(
      (tag, name, value) => {
        tag.setAttribute(name, value);
        return tag.outerHTML;
      },
      handle,
      name,
      newValue
    );
  };

  FakeNode.prototype.getOuterHTML = async function() {
    const handle = await this.getHandle();
    let html = await page.evaluate(tag => {
      return tag ? tag.outerHTML : "";
    }, handle);
    html = html.replace(/ ?data-metatemplate-id=["'].*?["'] ?/g, ""); // Remove markers we use for DOM lookup
    return html;
  };

  FakeNode.prototype.removeAttribute = async function(name) {
    delete this._attributes[name];
    const handle = await this.getHandle();
    await page.evaluate(
      (tag, name) => {
        tag.removeAttribute(name);
      },
      handle,
      name
    );
  };

  FakeNode.prototype.classList_add = async function(className) {
    const oldClassName = this.getAttribute("class");
    const newClassName = oldClassName + " " + className;
    await this.setAttribute("class", newClassName);
  };

  FakeNode.prototype.classList_remove = async function(className) {
    const oldClassName = this.getAttribute("class");
    const newClassName = ` ${oldClassName} `.replace(
      new RegExp(className, "g"),
      ""
    );
    await this.setAttribute("class", newClassName);
  };

  // Recursively set up FakeNode objects
  const bodyNodes = bodyNodesObj.map(
    (node: Object): any => {
      return new FakeNode(node);
    }
  );

  return {
    bodyNodes,
    dispose: async (silent?: boolean | undefined) => {
      count--;
      // FIXME:
      //
      // Not closing the page is a leak and it doesn't let Node cleanly
      // exit, but closing it immediately causes console errors about
      // disconnecting, so... I guess something still has a reference to
      // the page or a node in the page?
      //
      // And whatever that THING is, it eventually gives up after a few
      // seconds. Huh.
      //
      // (I suspect some async function is being called sync'ly.)
      //
      // In the meantime, we sleep() (and "they live" - Ed.), and then we
      // close the page a few seconds later.

      // NOTE: As this is an async function be careful refactoring
      // the placement of sleep() vvvvvv and "count--" ^^^^^ because
      // 'count' is global state, and changing order in async functions
      // may have data race conditions, which are hard to debug.
      await sleep(CLOSE_PAGE_AFTER_ms);
      try {
        await page.close();
      } catch (e) {
        console.error(e);
      }
      gc();
    },
    disposeAll: async (silent?: boolean | undefined) => {
      if (count > 0) {
        if (!silent) {
          console.info(
            `Ignoring MetaTemplate disposeAll because ${count} jobs remain.`
          );
        }
        return;
      }
      if (!sharedBrowserInstance) {
        if (!silent) {
          console.info(
            `Ignoring MetaTemplate disposeAll because disposal already complete.`
          );
        }
        return;
      }

      const ref = sharedBrowserInstance;
      sharedBrowserInstance = undefined;
      if (!silent) {
        console.info(`MetaTemplate: Closing shared browser instance...`);
      }
      await sleep(CLOSE_BROWSER_AFTER_ms);

      try {
        await ref.close();
        if (!silent) {
          console.info(`MetaTemplate: Closed shared browser instance.`);
        }
      } catch (e) {
        if (!silent) {
          console.error(
            `MetaTemplate: Problem closing shared browser instance.`,
            e
          );
        }
      }
      await sleep(100);
      gc();
    }
  };
};

function wrapBodyHtml(template: TemplateInput): string {
  return `<!DOCTYPE html><html><head><title>${template.id}</title><style>${
    template.css
  }</style></head><body>${
    template.html ? aliasParseStateTags(template.html) : ""
  }</body></html>`;
}

function gc() {
  if (global && global.gc) {
    global.gc();
  }
}

// Some tags like <select> and <tbody> etc., invoke HTML5 parsing modes
// that only allow certain tags within them, or they rearrange the tree
// based on those tags, so we need to alias them. See
// https://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#the-insertion-mode
// So that would mean we couldn't have tags like,
//
// <select>
//   <mt-variable key="children">placeholder</mt-variable>
// </select>
//
// So instead we'll turn that into,
//
// <mt-alias-select>
//   <mt-variable key="children">placeholder</mt-variable>
// </mt-alias-select>
const parsingModeTags = [
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "caption",
  "select",
  "option"
];

const MT_ALIAS_TAG = "mt-alias";
const MT_ALIAS_ATTR = "data-tagName";

const aliasParseStateTags = (html: string): string => {
  return html.replace(/<([\/]?)([^ >]+)/gi, (match, closingTag, tagName) => {
    const isClosingTag = !!closingTag;
    let response = `<${isClosingTag ? "/" : ""}`;
    if (parsingModeTags.includes(tagName)) {
      response += MT_ALIAS_TAG;
      if (!isClosingTag) {
        response += ` ${MT_ALIAS_ATTR}="${tagName}" `;
      }
    } else {
      response += tagName;
    }
    return response;
  });
};

const convertAliases = (dom: any) => {
  const doc = dom.window.document;
  const aliases: Element[] = Array.from(doc.querySelectorAll(MT_ALIAS_TAG));
  aliases.forEach(alias => {
    const tagName = alias.getAttribute(MT_ALIAS_ATTR);
    if (!tagName)
      throw Error(
        `MetaTemplate: ${MT_ALIAS_TAG} missing ${MT_ALIAS_ATTR} attribute.`
      );
    const childNodes = Array.from(alias.childNodes);
    const unaliased = doc.createElement(tagName);
    alias.parentNode.insertBefore(unaliased, alias);
    childNodes.forEach(childNode => {
      unaliased.appendChild(childNode);
    });
    const attrs = alias.getAttributeNames().filter(
      name => name.toLowerCase() !== MT_ALIAS_ATTR.toLowerCase() // because DOMs can lowercase attributes so we need a case-insensitive string comparison
    );
    attrs.forEach(attr => {
      unaliased.setAttribute(attr, alias.getAttribute(attr));
    });
    alias.parentNode.removeChild(alias);
  });
};
