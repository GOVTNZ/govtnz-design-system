// import util from 'util';
import fs from 'fs';
import path from 'path';
// import { exec } from 'child_process';
// import { JSDOM } from 'jsdom';
// import { https } from 'follow-redirects';
// import unzipper from 'unzipper';
// import { omitBy } from 'lodash';
// import execa from 'execa';
// import semver from 'semver';

// const tmpDir: string = path.resolve(__dirname, '..', 'tmp');

// export type Release = {
//   version: string;
//   url: string;
// };

// export type Releases = Release[];

// export const getGithubReleases = async (
//   username: string,
//   repo: string,
//   afterVersion?: string,
//   ignoreVersions?: string[]
// ): Promise<Releases> => {
//   const url = `https://github.com/${username}/${repo}/releases${
//     afterVersion ? `?after=v${afterVersion}` : ''
//   }`;
//   const dom = await JSDOM.fromURL(url);
//   const downloads = dom.window.document.querySelectorAll(
//     "details a[href*='zip']"
//   );
//   let releases: Releases = [...Array.from(downloads)]
//     .filter((hyperlink: Element) => {
//       return hyperlink.innerHTML.toLowerCase().includes('source code');
//     })
//     .map((hyperlink: Element) => {
//       const href = hyperlink.getAttribute('href');
//       const version = href
//         .toLowerCase()
//         .substring(href.lastIndexOf('/') + 1)
//         .replace(/^v/, '')
//         .replace(/\.zip$/, '');
//       const downloadUrl = new dom.window.URL(href, url).href;
//       const release: Release = {
//         version,
//         url: downloadUrl
//       };
//       return release;
//     });

//   if (!afterVersion) {
//     // Go back one more page
//     const lastVersion = releases[releases.length - 1].version;
//     const previousReleases = await getGithubReleases(
//       username,
//       repo,
//       lastVersion,
//       ignoreVersions
//     );
//     releases = [...releases, ...previousReleases];
//   }

//   releases = releases
//     .sort(sortSemvers)
//     .filter(release => ignoreVersions.indexOf(release.version) === -1);

//   return releases;
// };

// export const log = (function() {
//   // Wrapper around console.log that puts "Step X." where "X"
//   // increments on each call.
//   let count = 1;
//   return (...args) => {
//     if (args.length === 0) {
//       // reset counter by passing no args
//       count = 1;
//       return;
//     }
//     console.log(`Step ${count}.`, ...args);
//     count++;
//   };
// })();

// const getAsPromise = util.promisify(https.get);

// export const httpsGet = async (url): Promise<any> => {
//   const safeCacheKey = url.replace(/[^a-z0-9]/gi, '-');
//   const cachePath = path.join(tmpDir, safeCacheKey);

//   if (fs.existsSync(cachePath)) {
//     // CACHE HIT
//     console.log(
//       `Using cached download ${cachePath}. Delete that file to force redownload.`
//     );
//     return Promise.resolve(fs.createReadStream(cachePath));
//   }

//   // CACHE MISS
//   return new Promise((resolve, reject) => {
//     https
//       .get(url, response => {
//         if (!response.statusCode.toString().startsWith('2')) {
//           return reject(response);
//         }
//         console.log(`Downloaded to ${cachePath} for future caching.`);
//         const stream = fs.createWriteStream(cachePath);
//         response.pipe(stream);

//         stream.on('finish', () => resolve(fs.createReadStream(cachePath)));
//       })
//       .on('error', e => {
//         reject(e);
//       });
//   });
// };

// export const unzip = async (file: any): Promise<string> => {
//   const filename = path.basename(file.path);
//   const cachePath = path.join(tmpDir, `${filename}_UNZIP`);
//   if (!fs.existsSync(cachePath)) {
//     await file.pipe(unzipper.Extract({ path: cachePath })).promise();
//   }
//   return cachePath;
// };

// const execAsPromise = util.promisify(exec);
// export const execShell = async (command, options): Promise<string | any> => {
//   console.log(`EXEC [${command}]`);
//   if (options.__consoleLogAll) {
//     console.log(`EXEC ${command}`);
//   }
//   if (options.__returnChild) {
//     return exec(command, options);
//   }
//   let result;
//   try {
//     result = await execa.shell(command, options);
//   } catch (e) {
//     console.log({ command, error: e });
//     result = (result ? result.toString() : '') + e.toString();
//   }
//   return result;
// };

// export const execShellNpmProject = async (
//   command,
//   npmProjectPath,
//   execOptions?
// ) => {
//   if (!process.env.NVM_DIR)
//     throw new Error(
//       'NVM not available. Environment variable NVM_DIR was not found.'
//     );

//   // Yarn injects PATHs like '/tmp/yarn--1547189998990-0.44725907929508013
//   // to ensure same version of Node in forked processes which we don't want
//   // so we need to remove that PATH from the env
//   const env = {
//     ...omitBy(
//       process.env,
//       (value, key) => ['npm_config_prefix'].indexOf(key) !== -1
//     ),
//     PATH: process.env.PATH.split(':')
//       .filter(PATH => PATH.indexOf('/tmp/yarn--') === -1)
//       .join(':')
//   };

//   const nvmSetupCommand = npmProjectPath =>
//     `cd "${npmProjectPath}" && . "$NVM_DIR/nvm.sh" [ -s "$NVM_DIR/nvm.sh" ] && nvm install && nvm use &&`;
//   // PATH=$PATH:${npmProjectPath}/node_modules/.bin
//   const subprocessOptions = (npmProjectPath: string, options: Object) => ({
//     cwd: npmProjectPath,
//     env,
//     ...options
//   });

//   const nvm = nvmSetupCommand(npmProjectPath);

//   return await execShell(
//     `${nvm} ${command}`,
//     subprocessOptions(npmProjectPath, execOptions)
//   );
// };

// export const cacheFn = async (
//   cachePath: string,
//   fn: Function,
//   fnArgs?: any[]
// ): Promise<any> => {
//   let response;
//   try {
//     const data = (
//       await fs.promises.readFile(cachePath, {
//         encoding: 'utf-8'
//       })
//     ).toString();
//     response = JSON.parse(data);
//     console.log(
//       `Using cached function response. Force recalculation by deleting "${cachePath}"`
//     );
//   } catch (e) {
//     response = await fn(...(fnArgs || []));
//     await fs.promises.writeFile(cachePath, JSON.stringify(response), {
//       encoding: 'utf-8'
//     });
//   }
//   return response;
// };

// export const npmInstall = async npmProjectPath => {
//   const nodeModulesPath = path.join(npmProjectPath, 'node_modules');
//   let output;
//   if (!fs.existsSync(nodeModulesPath)) {
//     output = await execShellNpmProject('npm install', npmProjectPath);
//     console.log('npm install', output);
//   }
//   return output;
// };

// export const sleep = (milliseconds: number) => {
//   return new Promise(resolve => {
//     setTimeout(resolve, milliseconds);
//   });
// };

// export const isSiteDown = (url: string): Promise<boolean> => {
//   return new Promise(async (resolve, reject) => {
//     // Checking that the url site is actually down because if it's
//     // not then subsequent scrapes would scrape the wrong site.
//     let dom;
//     const tidyUp = async () => {
//       if (!dom) return;
//       dom.window.close();
//       if (global) {
//         global.gc();
//       }
//       await sleep(1000);
//     };
//     try {
//       dom = await JSDOM.fromURL(url);
//     } catch (e) {
//       await tidyUp();
//       if (e.error.errno === 'ECONNREFUSED') {
//         resolve(true);
//         return;
//       }
//     }
//     console.log(`Site is still up :( at ${url}`);
//     resolve(false);
//   });
// };

// export const simpleUniqueKey = (
//   key: string,
//   assignedDynamicKeys: string[]
// ): string => {
//   // Ensures prop names are unique by keeping a list of previously
//   // assigned keys in assignedDynamicKeys.
//   // This is a 'Simple' one that just increments until it finds an unused
//   // key. More complicated registries may be necessary in other formats such
//   // as React which currently* uses different names for things, ie:
//   //   for   ->  htmlFor
//   //   class ->  className
//   // [*] but as of Jan 2019 they're looking to readdress this in ReactDOM
//   let dynamicKey = key;
//   let counter = 0;
//   do {
//     counter++;
//     dynamicKey = `${key}${counter > 1 ? counter : ''}`;
//   } while (assignedDynamicKeys.indexOf(dynamicKey) !== -1);
//   assignedDynamicKeys.push(dynamicKey);
//   return dynamicKey;
// };

// const DEFAULT_MAPPING = { emToPixel: 16, remToPixel: 16, pxToPixel: 1 };

// export const cssUnitToPixels = (
//   value: string,
//   mapping: Object = DEFAULT_MAPPING
// ): number => {
//   const num = parseFloat(value);
//   const unit = value.replace(/[0-9\.]/gi, '');
//   return num * mapping[`${unit}ToPixel`];
// };

// type Semver = {
//   version: string;
//   [fieldName: string]: any;
// };

// export const sortSemvers = (a: Semver, b: Semver) => {
//   if (semver.gt(a.version, b.version)) {
//     return -1;
//   }
//   return semver.lt(a.version, b.version) ? 1 : 0;
// };

export const ensureNodeVersion = () => {
  const nvmVersion = fs
    .readFileSync(path.resolve(__dirname, '..', '..', '..', '.nvmrc'), {
      encoding: 'utf-8'
    })
    .replace('v', '') // nvmrc has semver which could start with letter "v".
    .trim();

  if (nvmVersion !== process.version.replace('v', '')) {
    console.error(
      `You're running Node version ${process.version} but we require ${nvmVersion}. Please install NVM and run \`nvm use\` to switch Node versions.`
    );
    process.exit(1);
  }
};

export const safeMerge = (...arr: Object[]) => {
  // Merges an array of objects while ensuring conflicting keys
  // are only merged if their values are equal (===).
  // If not it throws an Error with details on the diff.
  const arrKeys: string[][] = arr.map(item => Object.keys(item));
  const dupeKeysWithConflictingValues: string[] = [];
  arrKeys.forEach((fromKeys, fromIndex) => {
    fromKeys.forEach(fromKey => {
      const fromValue = arr[fromIndex][fromKey];
      arrKeys.forEach((toKeys, toIndex) => {
        if (fromIndex === toIndex) return; // don't check same Object
        if (!toKeys.includes(fromKey)) return;
        const toValue = arr[toIndex][fromKey];
        if (fromValue !== toValue) {
          // console.log(theDiff)[0];
          dupeKeysWithConflictingValues.push(
            `[${fromIndex}][${fromKey}] !== [${toIndex}][${fromKey}].  because "${fromValue}" !== "${toValue}"` //
          );
        }
      });
    });
  });
  if (dupeKeysWithConflictingValues.length) {
    throw Error(
      `Duplicate keys with different values found. ${dupeKeysWithConflictingValues.join(
        '\n'
      )}`
    );
  }

  return Object.assign({}, ...arr);
};
