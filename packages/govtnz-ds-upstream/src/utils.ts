import path from "path";
import prettier from "prettier";
import fetch from "node-fetch";
import { sleep } from "@govtnz/ds-common";
import { Component } from "./index";
import { uniq } from "lodash";

const MAX_ATTEMPTS = 5;

export const getAllCSS = async (
  dom: any,
  ignoreHrefs?: string[] | undefined
): Promise<string> => {
  // Extract ALL css because MetaTemplate will treeshake
  // the CSS, and at this point we don't know the variations
  // of valid CSS for this template (ie, enum classes that aren't
  // used in this particular HTML).

  const url = dom.window.document.location.toString();

  const cssElements = Array.from(
    dom.window.document.querySelectorAll('link[rel="stylesheet"], style')
  );

  const cssParts: string[] = await Promise.all(
    cssElements.map(
      async (element: HTMLElement): Promise<string> => {
        switch (element.nodeName.trim().toLowerCase()) {
          case "style": {
            return element.innerHTML;
          }
          case "link": {
            const href = element.getAttribute("href");
            if (
              ignoreHrefs &&
              ignoreHrefs.some(ignoreHref => href.includes(ignoreHref))
            ) {
              console.info(`Ignoring CSS from ${href}`);
              return "";
            }
            const targetUrl = new dom.window.URL(href, url).href;
            let css: string | undefined;
            let attempts = MAX_ATTEMPTS;
            let lastException;
            while (css === undefined && attempts > 0) {
              try {
                css = await fetch(targetUrl).then(resp => resp.text());
              } catch (e) {
                lastException = e;
                sleep(300); // wait a bit, geez
                attempts--;
              }
            }

            if (attempts === 0) {
              console.log(
                `Problem getting CSS after ${MAX_ATTEMPTS} I'm giving up. Last exception was ${lastException}`
              );
            }
            return css;
          }
        }
        throw Error(`getAllCSS() error: Unknown node type ${element.nodeName}`);
      }
    )
  );

  const css: string = cssParts.join("").replace(/@charset.*?;/g, "");

  if (css.trim().length === 0) {
    throw Error(
      `Was unable to extract CSS from ${
        cssElements.length
      } CSS-related elements (style/link) at url ${url}.`
    );
  }

  return css;
};

export const prettierWrapper = {
  html: (html: string): string => prettier.format(html, { parser: "html" }),
  css: (css: string): string =>
    prettier.format(css.replace(/}/g, "}\n\n\n"), { parser: "scss" }) // use scss regardless of whether we're doing scss or css because css is a subset of scss (afaik)
};

export const prettierComponent = (component: Component): Component => {
  const newComponent: Component = {
    ...component,
    html: prettierWrapper.html(component.html),
    css: prettierWrapper.css(component.css)
  };
  return newComponent;
};

export const filterByPatternIds = (
  paths: string[],
  patternIds?: string[] | undefined
) => {
  if (patternIds) {
    const filteredPaths = uniq(
      paths.filter(filePath => {
        const filename = path.basename(filePath, path.extname(filePath));
        for (let i = 0; i < patternIds.length; i++) {
          const patternId = patternIds[i];
          // console.log("Comparing", patternId, filename, patternId === filename);
          if (filename.toLowerCase() === patternId.toLowerCase()) {
            return true;
          }
        }
        return false;
      })
    );
    // console.log(`${filteredPaths.length} matches for patternIds ${patternIds}`);
    return filteredPaths;
  }
  return paths;
};
