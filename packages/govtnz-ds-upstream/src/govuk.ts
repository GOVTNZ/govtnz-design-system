import fs from "fs";
import path from "path";
import glob from "glob-promise";
import {
  getGithubReleases,
  Release,
  httpsGet,
  unzip,
  npmInstall,
  log,
  isSiteDown
} from "@govtnz/ds-common";
import Confirm from "prompt-confirm";
import { getComponents } from "./govuk.components";
import { ReleaseVersion, saveComponents, getCache, SourceId } from "./index";
import { prettierComponent } from "./utils";

export default async (
  sourceId: SourceId,
  version?: string,
  patternIds?: string[],
  noCache?: boolean
) => {
  let releases: Release[] = [];

  if (version) {
    releases = [
      {
        version,
        url: `https://github.com/alphagov/govuk-frontend/archive/v${version}.zip`
      }
    ];
  } else {
    releases = await getGovukGithubReleases();
  }

  // Ensure getRelease is run sequentially because
  // each release starts a server on localhost:3000
  // and also there might be too much resource use
  // memory, network, cpu, etc.
  const arr: ReleaseVersion[] = [];
  for (let i = 0; i < releases.length; i++) {
    const release = releases[i];
    let releaseVersion;
    if (!noCache) {
      releaseVersion = await getCache("govuk", release.version, patternIds);
    }
    if (!releaseVersion) {
      await safetyCheck();
      releaseVersion = await scrapeRelease(
        sourceId,
        release.version,
        release.url,
        !!noCache
      );
    }
    arr.push(releaseVersion);
  }
  return arr;
};

const getGovukGithubReleases = () => {
  const ignoreVersions = [
    // ignore these particular old versions which are unnecessary
    "0.0.30-alpha",
    "0.0.31-alpha",
    "0.0.29-alpha",
    "0.0.28-alpha",
    "0.0.27-alpha",
    "0.0.26-alpha"
  ];
  return getGithubReleases(
    "alphagov",
    "govuk-frontend",
    undefined,
    ignoreVersions
  );
};

const scrapeRelease = async (
  sourceId: SourceId,
  version: string,
  url: string,
  noCache: boolean
): Promise<ReleaseVersion> => {
  log(`Scraping ${sourceId}@${version}`);
  const file = await httpsGet(url);

  log("Unzipping repo");
  const extractPath = await unzip(file);

  log("NVM/NPM installing");
  const npmProjectPath = (await glob(path.join(extractPath, "*")))[0]; // there should only be 1 directory in the Github generated zip
  await npmInstall(npmProjectPath);

  log("Scraping components");
  const components = (await getComponents(
    version,
    npmProjectPath,
    noCache
  )).map(component => prettierComponent(component));

  await saveComponents("govuk", components);

  log(
    `Successfully scraped govuk@${version}\n` +
      "--------------------------------------------\n\n"
  );

  log(); // reset counter

  // While compiled this code runs from `dist` so we need to step up and back
  // into src
  const govUkPath = path.resolve(__dirname, "..", "src/upstream", "govuk");
  const base = path.join(govUkPath, version);
  const creditMarkdown: string = (await fs.promises.readFile(
    path.join(govUkPath, "credit.md"),
    {
      encoding: "utf-8"
    }
  )).toString();

  const releaseVersion: ReleaseVersion = {
    sourceId,
    version,
    components,
    creditMarkdown: creditMarkdown.toString()
  };

  return releaseVersion;
};

let hasAlreadyPassed = false;

const safetyCheck = async (): Promise<void> => {
  if (hasAlreadyPassed == true) return;
  hasAlreadyPassed = true;
  console.log("\n\n\nChecking for upstream updates..\n\n");
  const govUkReleases = await getGovukGithubReleases();
  console.log("    ==============================================");
  console.log(
    `          Latest upstream release is ${govUkReleases[0].version}.`
  );
  console.log("    ==============================================\n\n\n");
  if (process.argv.join(" ").indexOf("--force") === -1 && !process.env.CI) {
    const prompt = new Confirm(
      "PLEASE NOTE: This script is not necessary to use the Design System. See 'Usage' in docs.\n" +
        "WARNING: If you continue this script may stop Node.js processes on your system. Please fully understand the purpose of this script before continuing.\n" +
        "Do you want to continue?"
    );
    const result = await prompt.run();
    if (!result) {
      console.log("...bye!");
      process.exit(0);
      return;
    }
  }

  // GovUk-specific
  const probableUrl = "http://localhost:3000";
  const isSiteActuallyDown = await isSiteDown(probableUrl);
  if (isSiteActuallyDown === false) {
    throw Error(
      `Huh? Dev server is running at ${probableUrl} before we've started any servers. Please stop the server and try again.`
    );
  }
};
