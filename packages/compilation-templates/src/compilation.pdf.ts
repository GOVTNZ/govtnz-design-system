import path from "path";
import Puppeteer from "puppeteer";
import { Props, Viewport } from "./index";
import { makeWebPage } from "./compilation-utils";

const tmpDir = path.resolve(__dirname, "..", "tmp");

export default async (props: Props): Promise<Object> => {
  const symbolKeys = [];
  const patternAttributes = (pattern): string => {
    // prevent page breaks in the middle of Patterns
    return 'style="page-break-inside:avoid; margin-top: 1em; margin-bottom: 1em; outline: dashed 1px #999"';
  };
  const patternWrapper = (pattern, innerHTML): string => {
    return `<div style="page-break-inside:avoid; margin-top: 2em; padding-top: 2em; margin-bottom: 1em">${innerHTML}</div>`;
  };
  const webPage: string = makeWebPage(
    `body { padding: 3em; } ${props.css}`,
    props.patterns,
    { attribute: patternAttributes, wrapper: patternWrapper },
    true
  );
  return await generateAPDF(webPage, props.responsiveModes);
};

const generateAPDF = async (webPage: string, viewports?: Viewport[]) => {
  // Idea: translate Viewports to PDF page sizes?
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(webPage);
  await page.emulateMedia("screen");
  const pdf = await page.pdf();
  await browser.close();
  return { ["pdf/all.pdf"]: pdf };
};
