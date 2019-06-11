import fs from "fs";
import path from "path";
import findProcess from "find-process";
import treeKill from "tree-kill";
import postHtml from "posthtml";
import postHtmlAttrsSorter from "posthtml-attrs-sorter";
import { JSDOM } from "jsdom";
import {
  execShellNpmProject,
  cacheFn,
  sleep,
  isSiteDown
} from "@govtnz/ds-common";
import { getAllCSS } from "./utils";
import { Component } from "./index";

const ignoreHrefs = ["prism.min.css"];

export const getComponents = async (
  version: string,
  npmProjectPath: string,
  noCache: boolean
) => {
  await buildComponents(version, npmProjectPath, noCache);
  return await extractComponents(version, npmProjectPath, noCache);
};

const buildComponents = async (
  version: string,
  npmProjectPath: string,
  noCache: boolean
): Promise<Object> => {
  // The 'build' script name changes so we'll try a few different things
  const packageJSONString: string = (await fs.promises.readFile(
    path.join(npmProjectPath, "package.json"),
    { encoding: "utf-8" }
  )).toString();
  const packageJSON = JSON.parse(packageJSONString);
  const scripts = Object.keys(packageJSON.scripts);
  const buildScripts = scripts.filter(
    script => ["build:dist", "build"].indexOf(script) !== -1
  );

  if (buildScripts.length === 0)
    throw new Error("Unable to find NPM build script");

  const _rebuild = async () => {
    const hasBuiltPath = path.join(npmProjectPath, ".has-built");
    return await execShellNpmProject(
      `npm run ${buildScripts[0]}`,
      npmProjectPath
    );
  };

  const cachePath = path.join(npmProjectPath, ".has-built");
  if (noCache) {
    return await _rebuild();
  }
  return await cacheFn(cachePath, _rebuild);
};

const customExtractions: Extraction[] = [
  {
    path: "examples/typography",
    selector:
      ".govuk-heading-xl, .govuk-heading-l, .govuk-heading-m, .govuk-heading-s",
    componentId: "heading--style-size"
  },
  {
    path: "examples/typography",
    selector: ".govuk-body-l, .govuk-body-m, .govuk-body-s, .govuk-body-xs",
    componentId: "paragraph--style-size"
  },
  {
    path: "examples/typography",
    selector: "ul.govuk-list.govuk-list--bullet",
    componentId: "unordered-list"
  },
  {
    path: "examples/typography",
    selector: "ol.govuk-list.govuk-list--number",
    componentId: "ordered-list"
  },
  {
    path: "examples/typography",
    selector: ".govuk-link.govuk-link--muted",
    componentId: "a" // not a typo!
  },
  {
    path: "examples/typography",
    selector:
      ".govuk-table, .govuk-table__head, .govuk-table__row, .govuk-table__header, .govuk-table__body, .govuk-table__cell, .govuk-table__cell--numeric, .govuk-table__caption",
    componentId: "custom-table"
  },
  {
    path: "examples/typography",
    selector: ".govuk-caption-xl",
    componentId: "caption-xl"
  },
  {
    path: "examples/typography",
    selector: ".govuk-caption-l",
    componentId: "caption-l"
  },
  {
    path: "examples/typography",
    selector: ".govuk-caption-m",
    componentId: "caption-m"
  }
];

export const extractComponents = async (
  version: string,
  npmProjectPath: string,
  noCache: boolean
): Promise<Component[]> => {
  const componentUrls = await getComponentUrls(version, npmProjectPath, false);
  const components = await extractComponentsCode(
    version,
    npmProjectPath,
    componentUrls,
    customExtractions,
    noCache
  );
  return components;
};

const getComponentUrls = async (
  version: string,
  npmProjectPath: string,
  noCache: boolean
): Promise<string[]> => {
  const componentUrlsCachePath = path.join(
    npmProjectPath,
    ".component-urls-cache.json"
  );
  const _getComponentUrls = async (
    npmProjectPath: string
  ): Promise<string[]> => {
    const { error, devServerUrl, kill } = await webServer(npmProjectPath);
    if (error) {
      throw new Error(error);
    }
    console.log(
      "Scraping site parts (. = scraping url, + = found component url)"
    );
    const componentUrls = await findComponentUrlsOnWebsite(
      version,
      devServerUrl
    );
    await sleep(5000); // Wait a bit for socket cleanup
    await kill("Stopping webserver"); // stop webserver
    return componentUrls;
  };

  if (noCache) {
    return await _getComponentUrls(npmProjectPath);
  }

  return await cacheFn(componentUrlsCachePath, _getComponentUrls, [
    npmProjectPath
  ]);
};

type WebServerResponse = {
  kill?: Function;
  devServerUrl?: string;
  error?: string;
};

const webServer = async (
  npmProjectPath: string
): Promise<WebServerResponse> => {
  return new Promise(async (resolve: Function, reject: Function) => {
    // The goal is to ensure we don't leave any Node servers
    // running by accident when we leave this function.
    // Unfortunately the new server created isn't in a process tree
    // that TreeKill can cleanly stop, so instead we diff the OS
    // process list before and after, to kill any new Node processes
    // that are created since this function started.
    //
    // This is obviously a dangerous approach but we welcome advice on
    // how to avoid this.
    //
    // TODO: add docs or interactive user confirmation so that users
    // don't accidentally kill off background Node processes started
    // during this function's execution.
    const nodeProcessesAtStart = await findProcess("name", "node");
    const existingNodePids = nodeProcessesAtStart.map(process => process.pid);

    let devServerUrl;
    let isServerStarted = false;
    let stdOut = "";
    let stdErr = "";

    const child = await execShellNpmProject("npm run start", npmProjectPath, {
      __returnChild: true,
      stdio: "inherit"
    });

    process.stdout.write("Waiting for webserver to start.");

    const kill = async (reason?: string) => {
      console.log(
        `Stopping webserver ${child && child.pid ? child.pid : ""}. ${
          reason ? reason : ""
        }`
      );
      console.log("Debug output", { stdOut, stdErr });
      if (timer) clearTimeout(timer);

      if (!child.pid) {
        console.log(
          "Error. Child webserver process PID doesn't exist. PID: ",
          child.pid,
          reason
        );
        return;
      } else {
        console.log(`Killing ${child.pid}`);
      }
      await treeKillPromise(child.pid);
      const nodeProcessesAtEnd = await findProcess("name", "node");
      await Promise.all(
        nodeProcessesAtEnd.map(process => {
          if (existingNodePids.indexOf(process.pid) === -1) {
            console.info(
              `Killing new Node process #${process.pid}. ${process.cmd}`
            );
            return treeKillPromise(process.pid);
          }
        })
      );
      await sleep(5000);

      if (devServerUrl) {
        const siteIsDown = await isSiteDown(devServerUrl);
        if (siteIsDown) {
          console.info("Webserver successfully stopped :)");
        } else {
          throw new Error(`Site isn't down :( at ${devServerUrl}`);
        }
      }
    };

    child.stdout.on("data", data => {
      stdOut += data;
      if (!isServerStarted) {
        process.stdout.write("."); // progress indicator
      }

      // console.log("stdout", data);

      // Wait until data includes something that looks like
      // a url, and then assume that's the dev server url.
      // Different versions of the Pattern Library have
      // different strings to look for so hopefully this is
      // generic yet unique enough to identify dev server
      // urls.
      const SUCCESS_MAGIC_BYTES = "http://";
      if (
        isServerStarted === false &&
        data.toLowerCase().includes(SUCCESS_MAGIC_BYTES)
      ) {
        isServerStarted = true;
        process.stdout.write("started!");
        // then the webserver has started
        const index = data.toLowerCase().indexOf(SUCCESS_MAGIC_BYTES);
        const endOfLine = data.indexOf("\n", index);
        devServerUrl = data
          .substring(index, endOfLine === -1 ? endOfLine : data.length)
          .trim();
        if (timer) clearTimeout(timer);
        console.log(""); // print linebreak
        resolve({ devServerUrl, kill });
      }
    });
    child.stderr.on("data", data => {
      // console.log("stderr", data);

      const ERROR_MAGIC_BYTES = "EADDRINUSE";
      if (isServerStarted === false && data.includes(ERROR_MAGIC_BYTES)) {
        isServerStarted = true;
        const index =
          data.indexOf(ERROR_MAGIC_BYTES) + ERROR_MAGIC_BYTES.length;
        const endOfLine = data.indexOf("\n", index);
        const port = parseInt(
          data
            .substring(index, endOfLine === -1 ? endOfLine : data.length)
            .replace(/:/gi, "")
            .trim(),
          10
        );
        devServerUrl = `http://localhost:${port}/`;
        if (timer) clearTimeout(timer);
        process.stdout.write("started!");
        console.log(""); // print linebreak
        resolve({ devServerUrl, kill });
      }
      stdErr += data;
    });
    const minuteInMilliseconds = 60 * 1000;
    let timer = setTimeout(async () => {
      await kill("Start timeout exceeded");
    }, 3 * minuteInMilliseconds); // startup can take a very long time
  });
};

const findComponentUrlsOnWebsite = async (
  version: string,
  devServerUrl: string
): Promise<string[]> => {
  const componentUrls = new Set();
  const visitedUrls = new Set();
  const urlsToScrape = [devServerUrl];

  const scrapePage = async (url: string): Promise<void> => {
    const options: Object = {
      resources: "usable",
      runScripts: "dangerously"
    };
    if (visitedUrls.has(url)) {
      // console.log(` - already scraped ${url}`);
      return;
    }
    // console.log(`Looking at "${url}"`);
    visitedUrls.add(url);
    let dom;
    try {
      dom = await JSDOM.fromURL(url, options);
    } catch (e) {
      if (dom) {
        dom.window.close();
      }
      await sleep(1000);
      if (e && e.statusCode === 404) {
        return;
      }
      console.log(e);
      return;
    }

    const iframes = dom.window.document.querySelectorAll("iframe");
    if (iframes) {
      [...Array.from(iframes)]
        .map((iframe: Element) => iframe.getAttribute("src"))
        .map(
          src =>
            new dom.window.URL(src, url).href
              .replace(/#.*?$/, "") // remove any #hash state
              .replace(/\?iframe=true$/, "") // remove unnecessary query param
        )
        .filter(componentUrl => componentUrl.startsWith(devServerUrl))
        .forEach(componentUrl => {
          process.stdout.write("+"); // progress indicator
          componentUrls.add(componentUrl);
        });
    }

    const aHrefs = dom.window.document.querySelectorAll("a[href]");
    // console.log(`aHrefs: ${aHrefs ? aHrefs.length : 0}`);
    if (aHrefs) {
      [...Array.from(aHrefs)]
        .map((hyperlink: Element) => hyperlink.getAttribute("href"))
        .map(href => new dom.window.URL(href, url).href.replace(/#.*?$/, ""))
        .filter(hrefUrl => hrefUrl.startsWith(devServerUrl))
        .filter(hrefUrl => !visitedUrls.has(hrefUrl))
        .forEach(hrefUrl => {
          // console.log("found scrape url", hrefUrl);
          urlsToScrape.push(hrefUrl);
        });
    }

    // Clean up JSDOM
    dom.window.close();
    await sleep(200);
  };

  do {
    await scrapePage(urlsToScrape.pop());
    process.stdout.write("."); // progress indicator
    // console.log(`Remaining URLs: ${urlsToScrape.length}`);
  } while (urlsToScrape.length);

  const urls = Array.from(componentUrls);
  console.log(`Found ${urls.length} component(s)`);
  if (urls.length === 0) {
    throw Error(`Found ZERO components at ${devServerUrl}. Weird. ${version}`);
  }
  return urls;
};

let cssCache: string | undefined;

const MAX_ATTEMPTS = 1;

const extractComponentsCode = async (
  version: string,
  npmProjectPath: string,
  componentUrls: string[],
  customExtractions: Extraction[],
  noCache: boolean
): Promise<Component[]> => {
  const componentCachePath = path.join(npmProjectPath, ".component-cache.json");

  const existingIds = new Set();

  const scrapePage = async (url: string): Promise<Component> => {
    const options: Object = {
      resources: "usable",
      runScripts: "dangerously",
      pretendToBeVisual: true
    };
    let dom;
    let attempts = MAX_ATTEMPTS;
    let lastExceptionString;
    while (!dom && attempts > 0) {
      try {
        if (!dom) {
          dom = await JSDOM.fromURL(url, options);
        }
      } catch (e) {
        attempts--;
        lastExceptionString = e.toString();
        if (!e || e.statusCode !== 404) {
          console.log(e);
        }
      }
    }

    if (!dom) {
      throw Error(`Unable to load ${url} ${lastExceptionString}`);
    }

    // Wait for subresources to load so that CSS detection will work
    await new Promise((resolve, reject) => {
      dom.window.document.addEventListener("load", resolve);
    });

    const container = dom.window.document.querySelector(
      ".app-whitespace-highlight"
    );

    if (!container) {
      throw new Error(
        `Unable to find component container. URL was "${url}". HTML was ${
          dom.window.document.innerHTML
        }`
      );
    }

    const id = normalizeComponentId(url);
    if (existingIds.has(id)) {
      throw new Error(`Duplicate id ${id}.`);
    }
    existingIds.add(id);

    let css: string | undefined;
    // In GovUK we have a single CSS file for all components
    // so we may as well share a css value
    if (cssCache) {
      css = cssCache;
    } else {
      css = await getAllCSS(dom, ignoreHrefs);
      cssCache = css;
    }

    // Using reorderAttributes to ensure deterministic serialization
    // so that diffs don't randomly change with different attribute
    // ordering.
    const html = await reorderAttributes(container.innerHTML.trim());

    ensureKnownColours(css);

    // Clean up JSDOM
    dom.window.close();
    // The sleep() is to wait for socket closing etc. because
    // even after the await above it has resources open.
    await sleep(1000);
    const component: Component = {
      id,
      version,
      html,
      css
    };
    return component;
  };

  const scrapeCustom = async (
    customExtraction: Extraction,
    devServerUrl: string
  ): Promise<Component> => {
    const options: Object = {
      resources: "usable",
      pretendToBeVisual: true
    };

    const url = `${devServerUrl}${devServerUrl.endsWith("/") ? "" : "/"}${
      customExtraction.path
    }`;
    let dom;

    try {
      dom = await JSDOM.fromURL(url, options);
    } catch (e) {
      if (!e || e.statusCode !== 404) {
        console.log(e);
      }
    }

    // Wait for subresources to load so that CSS detection will work
    await new Promise(resolve => {
      dom.window.document.addEventListener("load", resolve);
    });

    const matchedElements = dom.window.document.querySelectorAll(
      customExtraction.selector
    );

    if (!matchedElements) {
      throw new Error(
        `Unable to find component container. URL was "${url}" with selector ${
          customExtraction.selector
        }. HTML was ${dom.window.document.innerHTML}`
      );
    }

    const containers = Array.from(matchedElements);

    if (existingIds.has(customExtraction.componentId)) {
      throw new Error(`Duplicate id ${customExtraction.componentId}.`);
    }
    existingIds.add(customExtraction.componentId);

    // Using reorderAttributes to ensure deterministic serialization
    // so that diffs don't randomly change with different attribute
    // ordering.
    let html = (await Promise.all(
      containers.map(
        async (container: Element): Promise<string> => {
          return await reorderAttributes(container.outerHTML.trim());
        }
      )
    )).join("\n");

    if (containers.length > 1) {
      // if there's not a single root element then we need to wrap it
      // to comply with MetaTemplate and React
      html = `<div class="g-fragment">${html}</div>`;
    }

    let css: string | undefined;
    // In GovUK we have a single CSS file for all components
    // so we may as well share a css value
    if (cssCache) {
      css = cssCache;
    } else {
      css = await getAllCSS(dom, ignoreHrefs);
      cssCache = css;
    }

    ensureKnownColours(css);

    // Clean up JSDOM
    dom.window.close();
    // The sleep() is to wait for socket closing etc. because
    // even after the await above it has resources open.
    await sleep(1000);
    const component: Component = {
      id: customExtraction.componentId,
      version,
      html,
      css
    };
    return component;
  };

  const scrapePages = async (
    componentUrls: string[],
    customExtractions: Extraction[]
  ) => {
    const { error, devServerUrl, kill } = await webServer(npmProjectPath);
    if (error) {
      throw new Error(error);
    }

    const components = [];

    const custom = [...customExtractions];
    do {
      const component = await scrapeCustom(custom.pop(), devServerUrl);
      components.push(component);
      process.stdout.write(","); // progress indicator
    } while (custom.length);

    const urls = [...componentUrls];
    do {
      const component = await scrapePage(urls.pop());
      components.push(component);
      process.stdout.write("."); // progress indicator
    } while (urls.length);

    await sleep(5000); // Wait a bit for socket cleanup
    await kill("Stopping webserver"); // stop webserver

    return components;
  };

  if (noCache) {
    return await scrapePages(componentUrls, customExtractions);
  }

  return await cacheFn(componentCachePath, scrapePages, [
    componentUrls,
    customExtractions
  ]);
};

const reorderAttributes = async (html: string): Promise<string> => {
  const result = await postHtml()
    .use(
      postHtmlAttrsSorter({
        // Options..of which there are none
      })
    )
    .process(html);
  return result.html;
};

const normalizeComponentId = (url: string): string => {
  const urlObj = new URL(url);
  return urlObj.pathname
    .replace("/components/", "")
    .replace("/index.html", "")
    .replace("/preview", "")
    .replace(/[\/\\]/gi, "__")
    .replace(/[^a-zA-Z0-9_-]/gi, "")
    .toLowerCase();
};

export const treeKillPromise = (pid: number) => {
  return new Promise((resolve, reject) => {
    treeKill(pid, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

export const ensureKnownColours = (css: string): void => {
  // Check for any new colours that have appeared in the CSS
  // because we should convert them into colours we want.
  // We don't want unrecognised colours just slipping through.
  const matches = css.match(/\#[0-9a-f]{6}/gi);
  if (!matches || !matches.length) return;
  for (let i = 0; i < matches.length; i++) {
    const hexColour = matches[i];
    if (!knownColours.includes(hexColour.toLowerCase())) {
      throw Error(
        `New colour ${hexColour} appeared in UK Gov system! Please update the list and ensure their colour is mapped to one we want. Add them to ${__filename} uniqueColours.`
      );
    }
  }
};

const knownColours = [
  "#0b0c0c",
  "#000000",
  "#bfc1c3",
  "#005ea5",
  "#ffbf47",
  "#f8f8f8",
  "#6f777b",
  "#ffffff",
  "#00823b",
  "#003618",
  "#00692f",
  "#b10e1e",
  "#2b8cc4",
  "#a1acb2",
  "#454a4c",
  "#dee0e2",
  "#171819",
  "#2e3133",
  "#1d8feb",
  "#4c2c92",
  "#28a197",
  "#fcf8e3", // Syntax highlighting used in their DS code examples, but not used in the UK DS per se
  "#b3d4fc", // Syntax highlighting
  "#dd4a68", // Syntax highlighting
  "#fbeed5", // Syntax highlighting
  "#c09853", // Syntax highlighting
  "#e4f2ff", // Syntax highlighting
  "#f5f2f0", // Syntax highlighting
  "#708090", // Syntax highlighting
  "#a67f59", // Syntax highlighting

  "#003418", // Button (default) box shadow
  "#00682f", // Button (default) focus background color
  "#858688", // Button (secondary) box shadow
  "#c8cacb", // Button (secondary) focus background color
  "#47060c", // Button (warning) box shadow
  "#8e0b18", // Button (warning) focus background color
];

type Extraction = {
  path: string;
  selector: string;
  componentId: string;
};
