import fs from "fs";
import path from "path";
import glob from "glob-promise";
import { Release } from "@govtnz/ds-common";
import { ReleaseVersion, Component, SourceId } from "./index";
import { filterByPatternIds } from "./utils";

// Relative to the 'dist' build directory

type AnyObject = { [key: string]: any };

export default async (
  sourceId: SourceId,
  version?: string,
  patternIds?: string[],
  noCache?: boolean
) => {
  // While compiled this code runs from `dist` so we need to step up and back
  // into src
  const base = path.resolve(__dirname, "..", "src/upstream", sourceId);
  const versionDir = path.join(base, version);
  const allPaths = await glob(path.join(versionDir, "*"));
  const paths = filterByPatternIds(allPaths, patternIds);

  let creditMarkdown: string = "";
  try {
    creditMarkdown = (await fs.promises.readFile(path.join(base, "credit.md"), {
      encoding: "utf-8"
    })).toString();
  } catch (e) {
    console.log(`${__filename}:default() Couldn't find ${base} + credit.md`);
    throw e;
  }

  const componentsById: AnyObject = {};

  for (let i = 0; i < paths.length; i++) {
    const aPath = paths[i];
    const extname = path.extname(aPath);
    const extension = extname.replace(/^\./, "");
    const data = await fs.promises.readFile(aPath, { encoding: "utf-8" });
    const id: string = path.basename(aPath, extname);
    componentsById[id] = {
      ...componentsById[id],
      id,
      version,
      [extension]: data
    };
  }

  const components: Component[] = Object.keys(componentsById).map(id => {
    const component: Component = {
      id: componentsById[id].id,
      version: componentsById[id].version,
      html: componentsById[id].html,
      css: componentsById[id].css
    };
    return component;
  });

  const releaseVersion: ReleaseVersion = {
    sourceId,
    version,
    components,
    creditMarkdown: creditMarkdown.toString(),
    validComponentIds: allPaths.map(aPath =>
      path.basename(aPath, path.extname(aPath))
    )
  };

  return [releaseVersion];
};
