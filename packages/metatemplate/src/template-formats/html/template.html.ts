import prettier from "prettier";
import stringReplaceAsync from "string-replace-async";
import { JSDOM } from "jsdom";

import {
  TemplateInput,
  emptyTemplate,
  TemplateUsage,
  TemplateUsages,
  TemplatesById,
  TemplateUsageElement,
  PRETTIER_LINE_WIDTH,
  FormatUsageResponse
} from "../../index";
import {
  TemplateAttribute,
  DynamicKey,
  simpleUniqueKey,
  parseDynamicKey,
  EnumOption,
  isString,
  serializeTemplateAttribute,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize
} from "../../common";
import {
  getTemplateAttributes,
  TemplateAttributesArgs
} from "../../attributes";
import { BrowserInstanceArgs, getBrowser } from "../../browser";
import { ID_SYNONYMS } from "../../attributes";
import { uniq } from "lodash";

export default class HTML {
  static id = "html";
  static isDefaultOption = true;

  public dirname = "html";

  data: string = "";
  template: TemplateInput;
  assignedDynamicKeys: string[];

  constructor(template: TemplateInput = emptyTemplate) {
    this.template = template;
    this.assignedDynamicKeys = [];
    this.data = "";
  }

  onElement = async ({
    tagName,
    attributes,
    isSelfClosing
  }: OnElement): Promise<string> => {
    this.data +=
      `<${tagName}` + // TODO: escape elementName?
      (attributes && attributes.length > 0
        ? " " +
          attributes
            .map(
              // TODO: escape attributes?
              (attribute: TemplateAttribute) => this.renderAttribute(attribute)
            )
            .join(" ")
        : "") +
      // The reason for the SELF_CLOSING_HTML_ELEMENTS check is to distinguish
      // between
      //   1) when a <div> doesn't have children we don't render <div />
      //      because HTML5 parsers wouldn't like that.
      //   2) when a <img> doesn't have children (which of course it shouldn't)
      //      we don't want to render <img></img> we just want <img/>.
      //
      // So when isSelfClosing===true we need to optionally render either:
      //   <tag />
      // or
      //   <tag></tag>
      // based on whether that tag is On The List[tm]
      //
      // HTML5 parsers allow (AKA ignore) the "/" so we render it to be valid
      // XHTML too.

      (isSelfClosing && SELF_CLOSING_HTML_ELEMENTS.includes(tagName)
        ? "/"
        : "") +
      ">" +
      (isSelfClosing && !SELF_CLOSING_HTML_ELEMENTS.includes(tagName)
        ? `</${tagName}>`
        : "");
    return tagName;
  };

  renderAttribute(attribute: TemplateAttribute): string {
    if (
      attribute.dynamicKeys &&
      !attribute.value &&
      attribute.dynamicKeys.every(dynamicKey => dynamicKey.optional)
    ) {
      // every dynamic key is optional, so don't render anything
      return "";
    }
    let attr = `${attribute.key}="`;
    let attrs: string[] = [];
    if (attribute.value) {
      attrs.push(attribute.value);
    }
    if (attribute.dynamicKeys) {
      attribute.dynamicKeys.forEach(
        (dynamicKey: DynamicKey): string => {
          // For HTML previews it's not supposed to be showing variations
          // because HTML doesn't have a way of doing that, so we'll choose
          // ...well, we'll choose something.

          // Prefer a default value
          if (dynamicKey.defaultValue) {
            attrs.push(dynamicKey.defaultValue);
            return;
          }

          // when there's a multichoice just choose the first one
          if (Array.isArray(dynamicKey.type)) {
            attrs.push(dynamicKey.type[0].value);
            return;
          }

          if (dynamicKey.ifTrueValue) {
            // attrs.push(dynamicKey.ifTrueValue);
            return;
          }

          // There can be dynamicKeys that don't match above conditions
          // such as {"key":"id","type":"string","optional":false}
          // and in such cases we'll just use the string "example"
          attrs.push("example");
        }
      );
    }
    attr += attrs.join(" ");
    attr += '"';
    return attr;
  }

  onCloseElement = async ({ tagName }: OnCloseElement): Promise<void> => {
    this.data += `</${tagName}>`;
  };

  onText = async ({ text }: OnText): Promise<void> => {
    this.data += text;
  };

  onVariable = async ({ defaultValue }: OnVariable): Promise<void> => {
    this.data += defaultValue;
  };

  serialize = async ({  }: OnSerialize): Promise<Object> => {
    const html = prettier.format(this.data, {
      parser: "html",
      printWidth: PRETTIER_LINE_WIDTH
    });

    return {
      [`${this.dirname}/${this.template.id}.html`]: html
    };
  };

  registerDynamicKey = (key: string): string => {
    return simpleUniqueKey(key, this.assignedDynamicKeys);
  };

  getAssignedDynamicKeys = (): string[] => {
    return this.assignedDynamicKeys;
  };

  generateIndex = (filesArr: string[]): Object => {
    return {};
  };

  makeUsage = async (
    code: TemplateUsages,
    templatesById: TemplatesById
  ): Promise<FormatUsageResponse> => {
    let templateCount = 1; // start at 1 because we only increment after usage
    // and we want conventional counting, not starting at 0

    let cssImports: string[] = [];

    const render = async (
      aCode: TemplateUsage,
      depth: number
    ): Promise<string> => {
      if (isString(aCode)) {
        return (aCode as string).toString();
      }
      if (!aCode["templateId"]) {
        return "";
      }

      const tagName = (aCode as TemplateUsageElement).templateId;

      let template: TemplateInput | undefined;

      if (!tagName.match(/[A-Z]/)) {
        // If it has uppercase letters it's a Component, but if it
        // only has lowercase then it's HTML.

        const variables = (aCode as TemplateUsageElement).variables;
        // otherwise it's HTML

        templatesById[tagName] = {
          id: tagName,
          css: "",
          html: `<${tagName} ${Object.keys(variables)
            .filter(key => key !== "children")
            .map(varName => ` ${varName}="${variables[varName]}"`)
            .join("")}><mt-variable key="children"/></${tagName}>`
        };
      } else {
        cssImports.push(tagName);
      }

      template = templatesById[tagName];

      if (!template) {
        throw new Error(
          `makeUsage "templatesById" is lacking required key = "${
            (aCode as TemplateUsageElement).templateId
          }" in ${Object.keys(
            templatesById
          ).sort()}. Required from ${JSON.stringify(aCode)}.`
        );
      }

      const inputTemplate: TemplateInput =
        templatesById[(aCode as TemplateUsageElement).templateId];

      let html: string = template.html;

      html = await insertDefaults(inputTemplate);

      // const response: InsertIdsResponse = insertIds(html, templateCount, depth);
      // if (response.hasIdSynonym) {
      //   templateCount++;
      // }
      // html = response.html;

      const draw = async (
        dynamicKey: DynamicKey | string | boolean,
        isAttribute: boolean,
        enumerations?: EnumOption[] | undefined
      ): Promise<string> => {
        const value = (aCode as TemplateUsageElement).variables[
          (dynamicKey as DynamicKey).key
        ];

        if (value === undefined) {
          if ((dynamicKey as DynamicKey).optional) {
            return "";
          }
          return "";
          throw new Error(
            `From dynamicKey="${JSON.stringify(
              dynamicKey
            )}" we were unable to find key "${
              (dynamicKey as DynamicKey).key
            }" in [${Object.keys(
              (aCode as TemplateUsageElement).variables
            )}]. Raw: ${JSON.stringify(dynamicKey)}`
          );
        }

        if (
          typeof value === "boolean" ||
          (dynamicKey as DynamicKey).type === "boolean"
        ) {
          // FIXME: figure out how to nicely serialize boolean attribute values
          // because `multiple="false"` may be treated as true, and what we
          // really want is to remove 'multiple' itself.
          //
          // Our current approach replaces `{{thing}}` we don't have our regex
          // covering the attribute name too, so it makes it hard to remove
          // the attribute if the value is false.
          //
          // If value comes from jsxToUsageCode then it parses
          // attr={false} as attr="false", so we use the HTML dynamicKey
          // to decide if it's .type==="boolean" and then compare the string
          // to work around this.
          // TODO: Decide whether to reenable these
          // const blockList = ["disabled", "checked", "readonly", "autofocus"];
          // if (blockList.includes((dynamicKey as DynamicKey).key)) {
          //   return "";
          // }

          return value === true
            ? (dynamicKey as DynamicKey).ifTrueValue || ""
            : "";
        } else if (isString(value)) {
          if (isString(enumerations) || enumerations === undefined) {
            return value as string;
          }

          const enumOption:
            | EnumOption
            | undefined = (enumerations as EnumOption[]).find(
            (enumOption: EnumOption) => enumOption.name === value
          );
          if (enumOption) {
            return enumOption.value; // so that friendly names are converted to their values for HTML
          }
        } else {
          // const results = await Promise.all(
          //   (value as TemplateUsage[]).map(value => render(value, depth + 1))
          // );
          return;
          // results.join("");
        }
      };

      const validateDynamicKey = (dynamicKey: DynamicKey): void => {
        return; // TODO: reenable this
        if (isString(aCode)) {
          throw new Error(`aCode was a string "${aCode}".`);
        }
        if (
          (aCode as TemplateUsageElement).variables &&
          !(aCode as TemplateUsageElement).variables.hasOwnProperty(
            dynamicKey.key
          )
        ) {
          if (dynamicKey.optional) {
            return;
          }
          throw new Error(
            `Couldn't find required key of "${
              dynamicKey.key
            }" in [${Object.keys(
              (aCode as TemplateUsageElement).variables
            )}]. Entire templateUsage=${JSON.stringify(aCode)}`
          );
        }
      };

      const renderByVariableElementKey = async (
        key: string,
        defaultValue?: string | undefined
      ): Promise<string> => {
        const templateUsages:
          | undefined
          | TemplateUsage[]
          | string
          | boolean = (aCode as TemplateUsageElement).variables[
          key
        ] as TemplateUsage[];
        if (templateUsages === undefined) {
          if (defaultValue) return defaultValue;
          console.warn(
            `MetaTemplate warning: aCode.variables[${key}] was undefined from aCode = ${JSON.stringify(
              aCode
            )}.`
          );
          return "";
        }
        if (isString(templateUsages)) {
          return templateUsages.toString() as string;
        } else if (typeof templateUsages === "boolean") {
          // a boolean element value...huh?
          return `[${(templateUsages as boolean).toString()}]`;
        } else if (Array.isArray(templateUsages)) {
          return (await Promise.all(
            templateUsages.map(value => render(value, depth + 1))
          )).join("");
        }
        throw Error(
          `Unknown templateUsages type ${typeof templateUsages} from aCode.variables[${key}]. aCode = ${JSON.stringify(
            aCode
          )}. templateUsages: ${JSON.stringify(templateUsages)}`
        );
      };

      // When there are attribute variable placeholders side-by-side
      // then add a space.
      // FIXME: Use a bloody HTML parser for all this code
      html = html.replace(/\}\}\{\{/g, "}} {{");

      html = await stringReplaceAsync(
        html,
        /{{(.*?)}}/gi,
        async (match, middle) => {
          const dynamicKey: DynamicKey = parseDynamicKey(middle);
          validateDynamicKey(dynamicKey);
          return draw(dynamicKey, true, dynamicKey.type as EnumOption[]);
        }
      );

      // Some attributes will be valueless eg disabled="" which is considered
      // false so we shouldn't render the attribute at all.
      html = html.replace(/[a-zA-Z][a-zA-Z0-9-]+?="\s*"/gi, "");
      // and certain boolean attributes should be converted to valueless
      html = html.replace(/([a-zA-Z][a-zA-Z0-9-]+?)="true"/gi, (match, p1) => {
        if (match.includes("value=")) {
          // TODO: compare against HTML5 boolean attributes
          return match;
        }
        return p1;
      });

      html = await stringReplaceAsync(
        html,
        /<mt-if[\s\S]*?<\/mt-if>/gi,
        async match => {
          // FIXME: obviously regexes and HTML don't mix well
          // so if nested this will break. Replace with proper parser.
          const key = getAttr(match, "key");
          if (!key) throw Error(`Couldn't find key in "${match}"`);

          const value = (aCode as TemplateUsageElement).variables[key];

          if (!!value) {
            const response = match
              .substring(match.indexOf(">") + 1)
              .replace("</mt-if>", "");
            return response;
          } else {
            return "";
          }
        }
      );

      html = await stringReplaceAsync(
        html,
        /<mt-variable.*?\/>/gi,
        async match => {
          // self-closing <mt-variable stuff />
          const key = getAttr(match, "key");
          if (!key) throw Error(`Couldn't find key in "${match}"`);
          return await renderByVariableElementKey(key);
        }
      );

      html = await stringReplaceAsync(
        html,
        /<mt-variable[\s\S]*?\>([\s\S]*?)<\/mt-variable>/gi,
        async (match, defaultValue) => {
          // expanded <mt-variable stuff /> placeholder </mt-variable>
          const key = getAttr(match, "key");
          if (!key) throw Error(`Couldn't find key in "${match}"`);
          return await renderByVariableElementKey(key, defaultValue);
        }
      );

      return html;
    };

    const codeParts = await Promise.all(
      code.map(async value => await render(value, 0))
    );

    let html: string = codeParts
      .join("")
      .replace(/\n/gi, "")
      .replace(/"([\s\S]*?)"/gi, (match, attr) => {
        // Many attributes will look like:
        //    name="  value\n\n    \n value \n\n\n\n"
        // with unnecessary whitespace in the middle of values
        // So we'll normalize the value
        let normalizedAttr = attr.trim();
        const TWO_SPACES = "  ";
        while (normalizedAttr.indexOf(TWO_SPACES) !== -1) {
          normalizedAttr = normalizedAttr.replace(/[\s]+/gi, " ");
        }
        return `"${normalizedAttr.trim()}"`;
      });

    cssImports = uniq(cssImports); // because things can be used twice

    html = `<!--\nRemember to add these styles:\nin CSS: ${cssImports
      .map(cssImport => `${cssImport}.css`)
      .join(", ")}\nOR in Sass (SCSS): ${cssImports
      .map(cssImport => `${cssImport}.scss`)
      .join(", ")}\n-->\n${html}`;

    html = prettier.format(html, {
      parser: "html",
      printWidth: PRETTIER_LINE_WIDTH
    });

    return { code: html };
  };
}

const getAttr = (attr: string, name: string): string => {
  if (!attr.includes(name)) return undefined;
  const frag = JSDOM.fragment(attr);
  let value;
  const firstChild = frag.firstChild;
  if (firstChild.nodeType === 1) {
    value = (firstChild as Element).getAttribute(name);
    value = value.replace(/\!/, "");
  }
  return value;
};

// Via http://xahlee.info/js/html5_non-closing_tag.html
const SELF_CLOSING_HTML_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

type InsertIdsResponse = { hasIdSynonym: boolean; html };

const insertIds = (
  html: string,
  templateCount: number,
  depth: number
): InsertIdsResponse => {
  // MetaTemplate automatically adds some configurable areas of code,
  // but sadly this is in attributes.ts and it's not currently used for
  // 'Usage' (aka Example) generation. This means that there's an unfortunate
  // mismatch between the variables that a MT Input vs MT Output, and 'Usage'
  // only knows about the MT Input.
  //
  // This function is a temporary workaround until those concepts are merged
  // in MetaTemplate, and we've got the same variables.
  //
  // What this function tries to do is automatically increment some attributes
  // that are related to IDs as per ID_SYNONYMS.
  //
  // Imagine there are templates that include templates that include templates
  // and they're in this kind of structure:
  //
  //   Container
  //    -  RadioButton
  //    -  RadioButton
  //
  // If we autogenerated Ids for RadioButton we'd need to give them unique Ids, so
  // we have some heuristics that check for the (1) nesting level of the import,
  // and (2) the number of identical Ids at that level in the current template.
  // (with the idea that 2+ identical Ids within a template is probably an internal
  // Id reference that can be incremented)
  //
  // This is all a workaround until these concepts are properly unified in
  // MetaTemplate.

  let hasIdSynonym = false;
  const newIds = {};
  const dom = new JSDOM(`<html><body>${html}</body></html>`);
  const body = dom.window.document.body;
  ID_SYNONYMS.forEach(id => {
    const elements = body.querySelectorAll(`[${id}]`);
    elements.forEach(element => {
      hasIdSynonym = true;
      const value = element.getAttribute(id);
      const newValue: string = value
        .trim()
        .split(" ")
        .map(
          (idRef: string): string => {
            if (!newIds[idRef]) {
              let referencesWithinThisTemplate = 0;
              for (let i = 0; i < ID_SYNONYMS.length; i++) {
                const attrName = ID_SYNONYMS[i];
                referencesWithinThisTemplate += body.querySelectorAll(
                  `[${attrName}="${idRef}"]`
                ).length;
              }
              // On
              // If depth > 0 required because
              if (depth > 0 && referencesWithinThisTemplate > 1) {
                // 2 or more... assume it's an id unique to this template and increment per template
                newIds[idRef] = `${idRef}${templateCount}`;
              } else {
                // only 1 reference probably means the id is defined outside this template and shouldn't be incremented
                newIds[idRef] = idRef;
              }
            }
            return newIds[idRef];
          }
        )
        .join(" ");

      element.setAttribute(id, newValue);
    });
  });
  const result = Array.from(body.childNodes)
    .map(childNode => (childNode as Element).outerHTML)
    .join("");
  dom.window.close();
  return {
    hasIdSynonym,
    html: result
  };
};

async function insertDefaults(template: TemplateInput): Promise<string> {
  // Start a browser environment
  const browserArgs: BrowserInstanceArgs = {
    template
  };
  const browser = await getBrowser(browserArgs);

  const format = {
    assignedDynamicKeys: [],
    getAssignedDynamicKeys() {
      return this.assignedDynamicKeys;
    },
    registerDynamicKey(key: string) {
      return simpleUniqueKey(key, this.assignedDynamicKeys);
    }
  };

  const walk = async (node: Node) => {
    // oldAttributes: TemplateAttribute[],
    // format: any,
    // args: TemplateAttributesArgs

    if (node.nodeType === 1) {
      const element: Element = node as Element;
      const tagName = element.tagName;
      const args: TemplateAttributesArgs = {
        tagName,
        node: element,
        format,
        template
      };
      const attributes = await getTemplateAttributes(args);
      await Promise.all(
        attributes.map(async attribute => {
          const newAttributeValue = serializeTemplateAttribute(attribute);
          await element.setAttribute(attribute.key, newAttributeValue);
        })
      );
    }
    if (node.childNodes) {
      await Promise.all(Array.from(node.childNodes).map(walk));
    }
  };

  await Promise.all(browser.bodyNodes.map(walk));

  const bodyChildNodes = await Promise.all(
    browser.bodyNodes.map(async node => {
      if (node.nodeType === 1) {
        const element: any = node as Element;
        return await element.getOuterHTML();
      }
      return node.nodeValue;
    })
  );

  let newHTML = bodyChildNodes.join("");

  newHTML = newHTML.replace(/>/g, "> "); // Until we have proper parsing that retains whitespace we'll have to insert some instead to allow Prettier to wrap lines nicely

  await browser.dispose(true);
  // await browser.disposeAll(true);

  return newHTML;
}
