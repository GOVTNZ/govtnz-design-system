import fs from "fs";
import path from "path";
import glob from "glob-promise";
import { Props, Viewport } from "./index";
import { simpleUniqueKey, execShellNpmProject } from "@govtnz/ds-common";
import { generateHTMLCompilation } from "./compilation-utils";

const npmProjectPath = path.resolve(__dirname, "..");

export default async (props: Props): Promise<Object> => {
  const symbolKeys = [];
  const patternAttributes = pattern => {
    return `data-sketch-symbol="${normalizeSketchId(pattern.id, symbolKeys)}`;
  };
  const htmlPath = await generateHTMLCompilation(props, {
    attribute: patternAttributes
  });
  return await generateASketch(htmlPath, props.responsiveModes);
};

const generateASketch = async (
  htmlPath: string,
  viewports?: Viewport[]
): Promise<Object> => {
  const aSketchDir = `${htmlPath}_SKETCH`;
  const relativeHtmlPath = `.${htmlPath.substring(npmProjectPath.length)}`;
  const viewPortArgs = viewports
    ? viewports
        .map(
          viewport =>
            `--viewports.${viewport.name} ${viewport.width}x${viewport.height}`
        )
        .join(" ")
    : "";
  const cmd = `yarn html-sketchapp --file ${relativeHtmlPath} ${viewPortArgs} --out-dir ${aSketchDir}`;
  const result: string = await execShellNpmProject(cmd, npmProjectPath);
  const aSketchPaths = await glob(path.join(aSketchDir, "*.json"));
  if (aSketchPaths.length === 0) {
    console.log({ npmProjectPath, cmd, result });
  }
  const aSketchReadme = {
    "sketch/README.md":
      "These .json files are in asketch format. See https://github.com/brainly/html-sketchapp#import-asketch-files-to-sketch for how to convert these to sketch files."
  };
  const aSketchFiles = await Promise.all(
    aSketchPaths.map(async aSketchFile => {
      const data = await fs.promises.readFile(aSketchFile);
      return { [`sketch/${path.basename(aSketchFile)}`]: data };
    })
  );
  return Object.assign({}, ...aSketchFiles, aSketchReadme);
};

const normalizeSketchId = (id: string, existingIds: string[]): string => {
  // Ids follow BEM convention, but BEM uses "__" (double underscore) for
  // namespaces whereas Sketch wants "/" (forward slash) to group related
  // items so first let's convert that.
  let normId = id.replace(/__/gi, "/");

  // Now consider these two types of ids,
  // 1)  "button__start-link" -> "button/start-link"  ...great!
  // 2)  "button" -> "button"  ...not great! because for Sketch to group
  //      these two ids together it needs a "/" followed by a name.
  // So we do this...
  if (normId.indexOf("/") === -1) {
    normId += "/default";
  }
  // then we ensure the id is unique...
  normId = simpleUniqueKey(normId, existingIds);
  return normId;
};
