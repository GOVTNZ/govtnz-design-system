import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Props, Pattern } from "./index";

const tmpPath = path.resolve(__dirname, "..", "tmp");

export const generateHTMLCompilation = async (
  props: Props,
  callbacks: WebpageCallbacks
): Promise<string> => {
  const { patterns } = props;
  const cacheKey = getHash(patterns);
  const HTMLPath = path.join(tmpPath, `${cacheKey}.html`);
  try {
    await fs.promises.unlink(HTMLPath);
  } catch (e) {
    // usually because file doesn't exist. ignore
  }
  const stream = fs.createWriteStream(HTMLPath, {
    flags: "a",
    encoding: "utf-8"
  });
  await new Promise(resolve => {
    stream.on("open", () => {
      resolve();
    });
  });
  stream.write(makeWebPage(props.css, props.patterns, callbacks));
  const finishPromise = new Promise(resolve => {
    stream.on("finish", () => {
      resolve();
    });
  });
  stream.end();
  await finishPromise;
  return HTMLPath;
};

const getHash = (obj: Object): string => {
  return crypto
    .createHash("sha1")
    .update(JSON.stringify(obj))
    .digest("hex");
};

export const makeWebPage = (
  css: string,
  patterns: Pattern[],
  callbacks: WebpageCallbacks,
  showId?: boolean
): string => {
  let page =
    '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8"/>\n<title></title>\n<style>\n';
  page += css;
  page += "\n</style>\n</head>\n<body>\n";
  page += patterns
    .map(pattern => {
      const heading = showId
        ? `<h2 style="margin-bottom: 0px;margin-top: 0.5em">${pattern.id}</h2>`
        : "";
      const patternHtml = `${heading}<div ${
        callbacks.attribute ? callbacks.attribute(pattern) : ""
      }>${pattern.html.trim().replace(/\n/g, " ")}</div>\n`;
      return callbacks.wrapper
        ? callbacks.wrapper(pattern, patternHtml)
        : patternHtml;
    })
    .join("\n");
  page += "</body>\n</html>\n";

  return page;
};

type WebpageCallbacks = {
  wrapper?: Function;
  attribute?: Function;
};
