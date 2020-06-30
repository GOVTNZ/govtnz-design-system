import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';
import {
  makeTemplates,
  makeIndexImports,
  CSSVariablePattern
} from '@springload/metatemplate';
import ProgressBar from 'progress';
import mkdirp from 'mkdirp';
import { ensureNodeVersion, safeMerge } from './common';
import {
  ReleaseVersion,
  Component,
  ReleaseSpecItem,
  ReleaseItem,
  ComponentToFilesArgs,
  ComponentToFilesResponse
} from './types';
import { safeMergeCssVariables, AnyObject, gc } from './utils';
import glob from 'glob-promise';
import { toId } from './normalize';
import { defaultTheme } from './theme';

ensureNodeVersion();

async function main() {
  const release: ReleaseItem[] = [];
  let cssVariables: CSSVariablePattern[] = [];

  for (let i = 0; i < releaseSpecItems.length; i++) {
    const releaseSpecItem = releaseSpecItems[i];
    const validComponentIds = [];
    releaseSpecItem.componentIds =
      validComponentIds.length > 0
        ? validComponentIds
        : releaseSpecItem.componentIds;
    releaseSpecItem.metaTemplateFormatIds =
      metaTemplateFormatIds || releaseSpecItem.metaTemplateFormatIds;
    console.log(
      `Release build step ${i + 1} see govtnz-ds/src/template-sources/${
        releaseSpecItem.sourceId
      }`
    );
    const releaseItem = await makeReleaseSpecItem(releaseSpecItem);
    release.push(releaseItem);
    cssVariables = safeMergeCssVariables(
      cssVariables,
      releaseItem.cssVariables
    );
  }

  let allFiles = safeMerge(...release.map(releaseItem => releaseItem.files));
  const allReleaseVersions = release.map(
    releaseItem => releaseItem.releaseVersions
  );
  const indexImports = makeIndexImports({
    fileKeys: Object.keys(allFiles),
    cssVariables
  });
  allFiles = safeMerge(allFiles, indexImports);

  await saveReleaseSources(allFiles, allReleaseVersions);
  await buildRelease();

  console.log('Release updated.');
}

const makeReleaseSpecItem = async ({
  sourceId,
  version,
  componentIds
}: ReleaseSpecItem): Promise<ReleaseItem> => {
  const base = path.join(__dirname, 'template-sources', sourceId);
  let releaseVersions: ReleaseVersion[];
  if (!componentIds) {
    const files = await glob(path.join(base, '*.html'));
    componentIds = files.map(aFile =>
      aFile.substring(base.length + 1).replace(/\.html$/, '')
    );
    console.log(`Found these component Ids in ${sourceId}`, componentIds);
  }
  const components = await Promise.all(
    componentIds.map(async componentId => {
      const base = path.join(__dirname, 'template-sources', sourceId);
      const html = (
        await fs.promises.readFile(path.join(base, `${componentId}.html`), {
          encoding: 'utf-8'
        })
      ).toString();
      const css = (
        await fs.promises.readFile(path.join(base, `${componentId}.css`), {
          encoding: 'utf-8'
        })
      ).toString();
      return {
        version,
        id: toId(componentId),
        html,
        css,
        cssVariables: defaultTheme
      };
    })
  );
  const releaseVersion: ReleaseVersion = {
    sourceId,
    version: 'all',
    components: components as Component[],
    creditMarkdown: ''
  };
  releaseVersions = [releaseVersion];
  let cssVariables: CSSVariablePattern[] = [];
  const jobs: ComponentToFilesArgs[] = [];
  for (let rvIndex = 0; rvIndex < releaseVersions.length; rvIndex++) {
    const releaseVersion: ReleaseVersion = releaseVersions[rvIndex];
    const components = releaseVersion.components;
    for (let cIndex = 0; cIndex < components.length; cIndex++) {
      const component = components[cIndex];
      const job: ComponentToFilesArgs = {
        component,
        creditMarkdown: releaseVersion.creditMarkdown
      };
      jobs.push(job);
    }
  }
  const jobIds: string[] = jobs.map(job => job.component.id);
  console.log(`Generating these templates: ${jobIds}`);
  const filesArr: AnyObject[] = [];
  const bar = new ProgressBar(
    `MetaTemplate Output generation (#${jobs.length} total) :bar :percent`,
    {
      total: jobs.length
    }
  );
  let disposeMetaTemplate: Function | undefined;
  if (jobs.length > 0) {
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      const response: ComponentToFilesResponse = await componentToFiles(job);
      bar.tick();
      filesArr.push(response.files);
      cssVariables = safeMergeCssVariables(cssVariables, response.cssVariables);
      disposeMetaTemplate = response.disposeMetaTemplate;
    }
    if (disposeMetaTemplate) {
      await disposeMetaTemplate();
    } else {
      console.log(
        `No 'disposeMetaTemplate' found in ${jobs.length} job(s). This indicates a bug that should be investigated.`
      );
    }
  }
  const files = safeMerge(...filesArr);
  return {
    releaseVersions,
    files,
    creditMarkdown: releaseVersions[0].creditMarkdown,
    cssVariables
  };
};

const componentToFiles = async ({
  component
}: ComponentToFilesArgs): Promise<ComponentToFilesResponse> => {
  const cssReadme = `These CSS files can be bundled in any order because all selectors are namespaced.`;
  const response = await makeTemplates(component);
  gc();
  const metaTemplateFiles = response.metaTemplates.map(
    metaTemplate => metaTemplate.files
  );
  const files = safeMerge(...metaTemplateFiles, {
    ['css/README.md']: cssReadme
  });
  // merge all metatemplates together
  return {
    files,
    cssVariables: component.cssVariables,
    disposeMetaTemplate: response.disposeAll
  };
};

const saveReleaseSources = async (
  files: Object,
  allReleaseVersions?: ReleaseVersion[][] | undefined
) => {
  /* Expects an Object that acts as a pseudo-filesystem.
   *
   * The Object `files` has keys that are paths and values of file data.
   *
   * The values can be strings or binary data.
   *
   * eg,
   *
   * files = {
   *   'css/back-link.css': 'body { background:red }',
   *   'react-js/back-link.js': 'import React from \'react\';\n // etc...',
   * }
   */

  const numberOfFiles = Object.keys(files).length;
  if (numberOfFiles === 0) {
    throw Error('Excepted some files to save. Received 0.');
  }
  // Clean up after previous release
  try {
    await fsExtra.rmdir(path.join(buildPath, '*'), { glob: true });
  } catch (e) {
    const message = e.toString();
    if (!message.includes('no such')) {
      throw e;
    }
  }
  // @ts-ignore
  await mkdirp(buildPath);
  try {
    await fsExtra.rmdir(path.join(buildSrcPath, '*'), { glob: true });
  } catch (e) {
    const message = e.toString();
    if (!message.includes('no such')) {
      throw e;
    }
  }
  // @ts-ignore
  await mkdirp(buildSrcPath);
  let metaTemplateInputsById = allReleaseVersions.reduce(
    (
      metaTemplateInputsById: MetaTemplateInputsById,
      releaseVersions: ReleaseVersion[]
    ) => {
      releaseVersions.forEach(releaseVersion =>
        releaseVersion.components.forEach((component: Component) => {
          metaTemplateInputsById[component.id] = component;
        })
      );
      return metaTemplateInputsById;
    },
    {}
  );
  await fs.promises.writeFile(
    path.join(buildSrcPath, '.metatemplate-inputs.json'),
    JSON.stringify(metaTemplateInputsById, null, 2),
    {
      encoding: 'utf-8'
    }
  );
  // Write the new release
  const releaseFilePaths = Object.keys(files);
  process.stdout.write('Writing files...');
  await Promise.all(
    releaseFilePaths.map(async (releaseFilePath: string) => {
      process.stdout.write('.');
      const filePathDir = path.join(
        buildSrcPath,
        path.dirname(releaseFilePath)
      );
      // @ts-ignore
      await mkdirp(filePathDir);
      const filePath = path.join(buildSrcPath, releaseFilePath);
      let options;
      if (typeof files[releaseFilePath] === 'string') {
        // only add text encoding it the files item is a string
        options = {
          encoding: 'utf-8'
        };
      }
      const unconvertedVariable = ' g-theme-';
      if (
        (releaseFilePath.endsWith('.css') ||
          releaseFilePath.endsWith('.scss')) &&
        files[releaseFilePath].includes(unconvertedVariable)
      ) {
        const uVIndex = files[releaseFilePath].indexOf(unconvertedVariable);
        throw Error(
          `${releaseFilePath} included unconverted variable starting with g-theme-... . File data was: ${files[
            releaseFilePath
          ].substring(uVIndex - 10, uVIndex + 100)}`
        );
      }
      await fs.promises.writeFile(filePath, files[releaseFilePath], options);
    })
  );
  // Copy static files
  const staticPath = path.join(buildSrcPath, 'static');
  // @ts-ignore
  await mkdirp(staticPath);
  const staticFiles = await glob(path.join(__dirname, 'static/*'));
  await Promise.all(
    staticFiles.map(staticFilePath =>
      fs.promises.copyFile(
        staticFilePath,
        path.join(staticPath, path.basename(staticFilePath))
      )
    )
  );
  console.log(
    `\n\nFinished. Wrote ${releaseFilePaths.length} file(s)\n( ${buildSrcPath} )`
  );
};

async function buildRelease() {
  const dirsToCopy = [
    'html',
    'css',
    'scss',
    'mustache',
    'static',
    'twig-embed',
    'vue-js',
    'vue-ts'
  ];
  await Promise.all(
    dirsToCopy.map(async dir => {
      const from = path.join(buildSrcPath, dir);
      const to = path.join(buildPath, dir);
      console.log('copying', from, to);
      return fsExtra.copy(from, to);
    })
  );
}

const metaTemplateFormatIds = ['*'];
const buildSpecPath = path.join(__dirname, 'build-types', `build-spec.json`);
const specString = fs
  .readFileSync(buildSpecPath, {
    encoding: 'utf-8'
  })
  .toString();
const releaseSpecItems: ReleaseSpecItem[] = JSON.parse(specString);
const buildPath = path.resolve(__dirname, '..', 'build');
const buildSrcPath = path.resolve(__dirname, '..', 'build_src');

type MetaTemplateInputsById = {
  [key: string]: Component;
};

main();
