import fs from "fs";
import path from "path";
import glob from "glob-promise";
import rmfr from "rmfr";
import mkdirpPromise from "mkdirp";
import { uniq } from "lodash";
import syncGovUk from "./govuk";
import syncGeneric from "./generic";
import { ensureNodeVersion } from "@govtnz/ds-common";
import { prettierWrapper, filterByPatternIds } from "./utils";

ensureNodeVersion();

export default async (
  sourceId: SourceId,
  semVer?: string,
  patternIds?: string[],
  noCache?: boolean
): Promise<ReleaseVersion[]> => {
  let releaseVersions: ReleaseVersion[] = [];

  switch (sourceId) {
    case "govuk": {
      releaseVersions = await syncGovUk(
        sourceId,
        semVer,
        patternIds,
        !!noCache
      );
      break;
    }
    case "flexboxgrid":
    case "govtnz": {
      releaseVersions = await syncGeneric(
        sourceId,
        semVer,
        patternIds,
        !!noCache
      );
      break;
    }
    default: {
      throw Error(`Unknown sourceId=${sourceId}`);
    }
  }

  // Combine all valid Ids
  let validPatternIds: string[] = [];
  releaseVersions.forEach((releaseVersion) => {
    releaseVersion.validComponentIds &&
      releaseVersion.validComponentIds.forEach((id) =>
        validPatternIds.push(id)
      );
  });
  validPatternIds = uniq(validPatternIds);

  if (patternIds) {
    ensurePatternIds(validPatternIds, patternIds, sourceId, semVer);
  }

  return releaseVersions;
};

const ensurePatternIds = (
  validPatternIds: string[],
  patternIds: string[],
  sourceId: SourceId,
  semVer: string
): void => {
  const matchingPatternIds = validPatternIds.filter((validPatternId) =>
    patternIds.includes(validPatternId)
  );

  const unfoundPatternIds = patternIds.filter(
    (patternId) => !validPatternIds.includes(patternId)
  );

  if (unfoundPatternIds.length > 0) {
    console.info(
      `In ${sourceId}@${semVer} unable to find ${unfoundPatternIds} in ${validPatternIds}. ${
        matchingPatternIds.length > 0
          ? ` Could only find ${matchingPatternIds}`
          : ""
      }`
    );
  } else {
    console.info(
      `In ${sourceId}@${semVer} successfully found ${matchingPatternIds}.`
    );
  }
};

export const saveComponents = async (
  sourceId: SourceId,
  components: Component[]
): Promise<void> => {
  // Note that __dirname might be in the dist directory so we need to move up then back into src
  const sourcePath = path.resolve(__dirname, "..", "src", "upstream", sourceId);

  const versions = components.map((component) => component.version);
  await Promise.all(
    versions.map(async (version) => {
      await rmfr(path.join(sourcePath, version, "*"), { glob: true });
    })
  );
  // clean directory so we don't retain old files

  // @ts-ignore
  await mkdirpPromise(sourcePath);
  const savedIds = await Promise.all(
    components.map(
      async (component: Component): Promise<string> => {
        const versionPath = path.join(sourcePath, component.version);
        // @ts-ignore
        await mkdirpPromise(versionPath);

        await fs.promises.writeFile(
          path.join(versionPath, `${component.id}.html`),
          prettierWrapper.html(component.html),
          { encoding: "utf-8" }
        );
        await fs.promises.writeFile(
          path.join(versionPath, `${component.id}.css`),
          prettierWrapper.css(component.css),
          { encoding: "utf-8" }
        );
        return component.id;
      }
    )
  );
  console.log(`Saved ${savedIds}`);
};

export const getCache = async (
  sourceId: SourceId,
  version: string,
  patternIds?: string[] | undefined
): Promise<ReleaseVersion | undefined> => {
  // Note that __dirname might be in the dist directory so we need to move up then back into src
  const base = path.resolve(__dirname, "..", "src/upstream", sourceId);
  const sourceVersionPath = path.resolve(base, version);

  try {
    await fs.promises.stat(sourceVersionPath);
  } catch (e) {
    console.log(`No cache at ${sourceVersionPath}`);
    return;
  }

  const allFilePaths: string[] = await glob(path.join(sourceVersionPath, "*"));
  const filePaths: string[] = filterByPatternIds(allFilePaths, patternIds);

  // because our use of GovUK CSS is identical across components we will
  // reuse CSS
  let cssCache: string | undefined;
  const cssPath = filePaths.find((filePath) => filePath.endsWith(".css"));
  if (cssPath) {
    cssCache = (
      await fs.promises.readFile(cssPath, {
        encoding: "utf-8",
      })
    )
      .toString()
      .replace(/@charset.*?;/g, ""); // for our usage we assume utf-8, so charset is irrelevant.
  }

  const fileCaches: FileCache[] = await Promise.all(
    filePaths.map(async (filePath: string) => {
      const isCSS = filePath.endsWith(".css");
      let data;
      if (isCSS && cssCache) {
        data = cssCache;
      } else {
        data = (
          await fs.promises.readFile(filePath, {
            encoding: "utf-8",
          })
        ).toString();
      }
      const fileCache: FileCache = { filePath, data };
      return fileCache;
    })
  );

  const componentsById: Object = fileCaches.reduce(
    (componentsById, fileCache: FileCache) => {
      const basename = path.basename(fileCache.filePath);
      const firstDot = basename.indexOf(".");
      const extname = basename.substring(firstDot); // intentionally not using path.extname because we want double-barrel file extensions
      const id = basename.substring(0, firstDot);
      const extMap = {
        ".html": "html",
        ".css": "css",
      };
      const key = extMap[extname];
      if (!key)
        throw Error(`Unknown extname=${extname} from ${fileCache.filePath}`);

      const component: Component = {
        id,
        version,
        ...componentsById[id],
        [key]: fileCache.data,
      };
      componentsById[id] = component;

      return componentsById;
    },
    {}
  );

  let creditMarkdown: string;
  try {
    creditMarkdown = (
      await fs.promises.readFile(path.join(base, "credit.md"), {
        encoding: "utf-8",
      })
    ).toString();
  } catch (e) {
    console.log(`${__filename}:getCache() Couldn't find ${base} + credit.md`);
    throw e;
  }

  const components: Component[] = Object.values(componentsById);

  console.log(
    `Using cached response. Force recalculation by deleting "${sourceVersionPath}`
  );

  const releaseVersion: ReleaseVersion = {
    sourceId,
    version,
    components,
    validComponentIds: allFilePaths.map((filePath) =>
      path.basename(filePath, path.extname(filePath))
    ),
    creditMarkdown: creditMarkdown.toString(),
  };

  return releaseVersion;
};

type FileCache = {
  filePath: string;
  data: string;
};

export type Component = {
  id: string;
  version: string;
  html: string;
  css: string;
  cssVariables?: CSSVariablePattern[];
  calculatedDynamicKeys?: { [key: string]: string };
};

export type ReleaseVersion = {
  sourceId: SourceId;
  version: string;
  components: Component[];
  creditMarkdown: string;
  validComponentIds?: string[] | undefined;
};

export type CSSVariablePattern = {
  id: string;
  defaultValue: string;
  nameMatch?: string;
  valueMatch?: string;
  valueSubstringMatch?: string;
};

export type SourceId = "govuk" | "govtnz" | "flexboxgrid";
