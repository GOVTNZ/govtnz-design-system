import ArgParse from 'argparse';
import fs from 'fs';
import path from 'path';
import formatDuration from 'format-duration';
import {
  makeTemplates,
  makeIndexImports,
  CSSVariablePattern
} from '@springload/metatemplate';
import ProgressBar from 'progress';
import rmfr from 'rmfr';
import mkdirp from 'mkdirp-promise';
import { ensureNodeVersion, safeMerge } from '@govtnz/ds-common';
import getUpstream, {
  SourceId,
  ReleaseVersion,
  Component
} from '@govtnz/ds-upstream';
import { normalizeUpstream } from './normalize';
import { startCase } from 'lodash';
import {
  safeMergeCssVariables,
  AnyObject,
  gc,
  getTimingBenchmarks,
  setTimingBenchmarks
} from './utils';
import glob from 'glob-promise';
import PromisePool from 'es6-promise-pool';
import { normalizeGovUkTemplate, cssVariables } from './normalize-govuk';

ensureNodeVersion();

async function main(
  mode: BuildMode,
  noCache: boolean = false,
  componentIds?: string[] | undefined,
  metaTemplateFormatIds: string[] | undefined = ['*'],
  sources?: string[] | undefined
) {
  console.info('Command line args:');
  console.info('  -  Cache: ', !noCache);
  console.info('  -  Sources: ', sources ? sources : 'All');
  console.info('  -  Filter By Patterns:', componentIds ? componentIds : false);
  console.info(
    '  -  MetaTemplate formats:',
    metaTemplateFormatIds ? metaTemplateFormatIds : false,
    '\n'
  );
  console.log('\n\n\n');

  const specString: string = (
    await fs.promises.readFile(
      path.join(__dirname, 'build-types', `${mode}-spec.json`),
      {
        encoding: 'utf-8'
      }
    )
  ).toString();

  if (noCache) {
    console.info('Building release while using NO CACHE.');
  } else {
    console.log(
      'Building release with cache. Use `--no-cache` to disable cache.'
    );
  }

  // const silverStripe4Files = await getSilverStripe4Files();

  let releaseSpecItems: ReleaseSpecItem[] = JSON.parse(specString);
  const release: ReleaseItem[] = [];
  let cssVariables: CSSVariablePattern[] = [];

  if (sources !== null) {
    releaseSpecItems = sources.reduce((result, source) => {
      const identifier = source.split('@');
      const sourceId = identifier[0];
      const version = identifier[1];

      const releaseSpecItem = releaseSpecItems.find(item => {
        if (item.sourceId !== sourceId) {
          return false;
        }

        if (version !== undefined && item.version !== version) {
          return false;
        }

        return true;
      });

      if (releaseSpecItem !== undefined) {
        result.push(releaseSpecItem);
      }

      return result;
    }, []);
  }

  // Sequentially run because may result in a full scrape (downloading
  // a repo, and installing it, starting webserver, scraping, etc.)
  // may have localhost port conflicts, resource contention issues...
  // and other theoretical conflicts so this is intentionally sequential.
  for (let i = 0; i < releaseSpecItems.length; i++) {
    const releaseSpecItem = releaseSpecItems[i];
    const validComponentIds =
      componentIds !== null && releaseSpecItem.componentIds !== undefined
        ? componentIds.filter(componentId =>
            releaseSpecItem.componentIds.includes(componentId)
          )
        : [];

    releaseSpecItem.componentIds =
      validComponentIds.length > 0
        ? validComponentIds
        : releaseSpecItem.componentIds;

    releaseSpecItem.metaTemplateFormatIds =
      metaTemplateFormatIds || releaseSpecItem.metaTemplateFormatIds;

    console.log(
      `Release build step ${i + 1} ${
        releaseSpecItem.sourceId
      }@${releaseSpecItem.version ||
        '(fork -- see govtnz-ds/src/upstream)'}. Scraping ${
        releaseSpecItem.componentIds
          ? releaseSpecItem.componentIds.toString()
          : 'ALL patterns.'
      } `
    );

    const releaseItem = await makeReleaseSpecItem(releaseSpecItem, noCache);
    release.push(releaseItem);

    cssVariables = safeMergeCssVariables(
      cssVariables,
      releaseItem.cssVariables
    );
  }

  const allFiles = safeMerge(...release.map(releaseItem => releaseItem.files));
  const allReleaseVersions = release.map(
    releaseItem => releaseItem.releaseVersions
  );

  const indexImports = makeIndexImports({
    fileKeys: Object.keys(allFiles),
    cssVariables
  });

  const isCompleteRelease = !componentIds && !metaTemplateFormatIds; // if they're filtering or choosing templates then we'll assume they're merging with an existing release and don't want to rimRaf

  // Disabling compilation files until specific ticket to reenable
  // because we're unclear of the features users want.
  // const compilationFiles = await makeCompilation(release);

  const nonComponentDocs = await makeNonComponentDocs(allFiles);
  let files = safeMerge(
    allFiles,
    indexImports,
    nonComponentDocs
    // silverStripe4Files
  );

  await saveRelease(
    mode,
    isCompleteRelease,
    files,
    nonComponentDocs,
    allReleaseVersions
  );

  console.log('Release updated.');
}

const makeReleaseSpecItem = async (
  { sourceId, version, componentIds, metaTemplateFormatIds }: ReleaseSpecItem,
  noCache: boolean
): Promise<ReleaseItem> => {
  let releaseVersions: ReleaseVersion[];
  if (version) {
    // if there's a specific version then assume they want upstream copies
    releaseVersions = await getUpstream(
      sourceId,
      version,
      componentIds,
      noCache
    );
    releaseVersions = await normalizeUpstream(sourceId, releaseVersions);
  } else {
    if (!componentIds) {
      throw Error(
        `componentIds required ${JSON.stringify({
          sourceId,
          version,
          componentIds,
          metaTemplateFormatIds
        })}`
      );
    }

    const components = await Promise.all(
      componentIds.map(async componentId => {
        const base = path.join(__dirname, 'upstream', sourceId);
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

        let component: Partial<Component>;

        component = await normalizeGovUkTemplate({
          id: componentId,
          html,
          css,
          cssNamespace: '',
          message: '',
          calculatedDynamicKeys: [],
          additionalPrefixesToBypassNamespacing: [
            'fieldset',
            'radios',
            'checkboxes',
            'link',
            'a'
          ]
        });

        component = {
          version,
          ...component
        } as Component;

        return component;
      })
    );

    const releaseVersion: ReleaseVersion = {
      sourceId,
      version: 'all',
      components,
      creditMarkdown: ''
    };

    releaseVersions = [releaseVersion];
    releaseVersions = await normalizeUpstream(sourceId, releaseVersions);
  }

  let cssVariables: CSSVariablePattern[] = [];

  const jobs: ComponentToFilesArgs[] = [];
  for (let rvIndex = 0; rvIndex < releaseVersions.length; rvIndex++) {
    const releaseVersion: ReleaseVersion = releaseVersions[rvIndex];
    const components = releaseVersion.components;

    for (let cIndex = 0; cIndex < components.length; cIndex++) {
      const component = components[cIndex];
      const job: ComponentToFilesArgs = {
        component,
        creditMarkdown: releaseVersion.creditMarkdown,
        cssVariables,
        metaTemplateFormatIds
      };
      jobs.push(job);
    }
  }

  const jobIds: string[] = jobs.map(job => job.component.id);
  console.log(`Generating these templates: ${jobIds}`);

  const filesArr: AnyObject[] = [];

  const startTime = Date.now();
  const timings = await getTimingBenchmarks();
  let timing = timings[jobs.length];
  const expectedDuration: number =
    timing && timing[MAX_METATEMPLATE_WORKERS]
      ? timing[MAX_METATEMPLATE_WORKERS]
      : jobs.length * AVERAGE_JOB_DURATION_ms;
  if (jobs.length > 0) {
    let message = `Because there are ${
      jobs.length
    } job(s) with ${MAX_METATEMPLATE_WORKERS} workers this may take approximately ${formatDuration(
      expectedDuration
    )}.`;
    if (timing && timing[MAX_METATEMPLATE_WORKERS]) {
      message = `Last time ${
        jobs.length
      } job(s) with ${MAX_METATEMPLATE_WORKERS} worker(s) took ${formatDuration(
        expectedDuration
      )}${
        expectedDuration > LONGER_THAN_A_HUMAN_COULD_POSSIBILITY_TOLERATE_ms
          ? ' ...so go get a cuppa.'
          : '.'
      }`;
    }
    console.info(message);
  }

  const bar = new ProgressBar(
    `MetaTemplate Output generation (#${jobs.length} total) :bar :percent`,
    {
      total: jobs.length
    }
  );

  // Start pool of workers for MetaTemplate...
  let disposeMetaTemplate;
  let nextJobIndex = 0;

  async function processJob(jobIndex: number, job: ComponentToFilesArgs) {
    const response: ComponentToFilesResponse = await componentToFiles(job);
    filesArr.push(response.files);
    cssVariables = safeMergeCssVariables(cssVariables, response.cssVariables);
    disposeMetaTemplate = response.disposeMetaTemplate;
  }

  function GetNextJob() {
    const thisJobIndex = nextJobIndex;
    const job = jobs[thisJobIndex];
    nextJobIndex++;
    bar.tick();
    if (job) {
      return processJob(thisJobIndex, job);
    }
    return null;
  }

  if (jobs.length > 0) {
    const concurrency =
      jobs.length < MAX_METATEMPLATE_WORKERS
        ? jobs.length
        : MAX_METATEMPLATE_WORKERS; // The number of promises to process simultaneously.
    const pool = new PromisePool(GetNextJob.bind(bar), concurrency);
    const poolPromise = pool.start();
    await poolPromise;
    if (disposeMetaTemplate) {
      await disposeMetaTemplate();
    } else {
      console.log(
        `No 'disposeMetaTemplate' found in ${jobs.length} job(s). This indicates a bug that should be investigated.`
      );
    }
  }

  // Finished...
  const actualDuration = Date.now() - startTime;
  timing = {
    ...timing,
    [MAX_METATEMPLATE_WORKERS]: actualDuration
  };
  timings[jobs.length] = timing;
  if (jobs.length > 0) {
    console.log(
      `That took took ${formatDuration(
        actualDuration
      )} with ${MAX_METATEMPLATE_WORKERS} worker(s).`
    );
  }
  await setTimingBenchmarks(timings);

  const files = safeMerge(...filesArr);

  return {
    releaseVersions,
    files,
    creditMarkdown: releaseVersions[0].creditMarkdown,
    cssVariables
  };
};

type ComponentToFilesArgs = {
  component: Component;
  creditMarkdown: string;
  cssVariables: CSSVariablePattern[];
  metaTemplateFormatIds?: string[] | undefined;
};

type ComponentToFilesResponse = {
  files: AnyObject;
  cssVariables: CSSVariablePattern[];
  disposeMetaTemplate: Function;
};

const componentToFiles = async ({
  component,
  creditMarkdown,
  cssVariables,
  metaTemplateFormatIds
}: ComponentToFilesArgs): Promise<ComponentToFilesResponse> => {
  const cssReadme = `These CSS files can be bundled in any order because all selectors are namespaced.`;
  cssVariables = safeMergeCssVariables(cssVariables, component.cssVariables);

  const metaTemplateInput = Object.assign(
    {},
    ...Object.keys(component)
      .filter(key => key !== 'props')
      .map(key => {
        return { [key]: component[key] };
      }),
    {
      calculatedDynamicKeys:
        component.calculatedDynamicKeys &&
        Object.keys(component.calculatedDynamicKeys).map(key => {
          return {
            key,
            expression: component.calculatedDynamicKeys[key]
          };
        })
    }
  );

  const response = await makeTemplates(
    metaTemplateInput,
    metaTemplateFormatIds
  );

  const markdownFileName = `${component.id}.md`;
  const relativeMarkdownPath = path.join('docs', markdownFileName);
  let md: string = '';
  try {
    const markdownPath = path.resolve(__dirname, relativeMarkdownPath);
    md = (await fs.promises.readFile(markdownPath)).toString();
  } catch (e) {
    md += `# ${startCase(component.id)}\n\ncode:${component.id}\n`;
  }
  md += `## Credit\n${creditMarkdown}`;

  gc();

  const metaTemplateFiles = response.metaTemplates.map(
    metaTemplate => metaTemplate.files
  );

  // merge all metatemplates together
  return {
    files: safeMerge(...metaTemplateFiles, {
      ['css/README.md']: cssReadme,
      [`docs/${markdownFileName}`]: md
    }),
    cssVariables,
    disposeMetaTemplate: response.disposeAll
  };
};

const saveRelease = async (
  mode: BuildMode,
  isCompleteRelease: boolean,
  files: Object,
  additionalStableFiles?: Object | undefined,
  allReleaseVersions?: ReleaseVersion[][] | undefined
) => {
  // Expects an Object that acts as a pseudo-filesystem.
  // The Object `files` has keys that are paths and values that are data.
  // The keys are paths relative to ./release without a leading '/' or '.'.
  // The values can be strings or binary data.
  //
  // ie,
  //
  // files = {
  //   'css/back-link.css': 'body { background:red }',
  //   'react-js/back-link.js': 'import React from \'react\';\n // etc...',
  // }

  const specPaths = {
    alpha: path.resolve(__dirname, '..', 'alpha_src'),
    build: path.resolve(__dirname, '..', 'build_src')
  };

  const specPath = specPaths[mode];

  if (!specPath)
    throw Error(
      `specPath doesn't recognise mode=${mode}. Valid options are ${Object.keys(
        specPaths
      )}`
    );

  // Clean up after previous release
  if (isCompleteRelease) {
    await rmfr(path.join(specPath, '*'), { glob: true });
    await mkdirp(specPath);
  }

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

  const metaTemplateInputsPath = path.join(
    specPath,
    '.metatemplate-inputs.json'
  );
  if (!isCompleteRelease) {
    try {
      const data = (
        await fs.promises.readFile(metaTemplateInputsPath, {
          encoding: 'utf-8'
        })
      ).toString();
      const oldMetaTemplateInputs = JSON.parse(data);
      metaTemplateInputsById = {
        ...oldMetaTemplateInputs,
        ...metaTemplateInputsById
      };
    } catch (e) {
      // Recoverable, so print error and continue...
      console.log(e);
      metaTemplateInputsById = {};
    }
  }

  await fs.promises.writeFile(
    path.join(specPath, '.metatemplate-inputs.json'),
    JSON.stringify(metaTemplateInputsById, null, 2),
    {
      encoding: 'utf-8'
    }
  );

  // Write the new release
  const releaseFilePaths = Object.keys(files);
  await Promise.all(
    releaseFilePaths.map(async (releaseFilePath: string) => {
      process.stdout.write('.');
      const filePathDir = path.join(specPath, path.dirname(releaseFilePath));
      await mkdirp(filePathDir);
      const filePath = path.join(specPath, releaseFilePath);
      let options;
      if (typeof files[releaseFilePath] === 'string') {
        // because we might receive Buffers of binary data
        options = {
          encoding: 'utf-8'
        };
      }

      const hasData = !!files[releaseFilePath];
      if (hasData) {
        await fs.promises.writeFile(filePath, files[releaseFilePath], options);
      }
    })
  );

  // Copy static files
  const staticPath = path.join(specPath, 'static');
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
    `\n\nFinished. Wrote ${releaseFilePaths.length} file(s) to ${mode}\n( ${specPath} )`
  );
};

const makeNonComponentDocs = async (allFiles: Object) => {
  const usedDocs = Object.keys(allFiles)
    .filter(aFile => aFile.startsWith('docs/'))
    .map(aFile => path.basename(aFile));

  let docFiles: Object = {};
  // Now copy over any markdown files that weren't related to components
  const docsPath = path.resolve(__dirname, 'docs');
  const allDocs = (await glob(path.join(docsPath, '*.md'))).map(docPath =>
    path.basename(docPath)
  );
  const unusedDocs = allDocs.filter(filename => {
    return usedDocs.indexOf(filename) === -1;
  });

  await Promise.all(
    unusedDocs.map(async unusedDoc => {
      const markdown = await fs.promises.readFile(
        path.join(docsPath, unusedDoc)
      );
      docFiles[`docs/${unusedDoc}`] = markdown;
    })
  );

  return docFiles;
};

type ReleaseSpecItem = {
  sourceId: SourceId;
  version?: string;
  componentIds?: string[] | undefined;
  metaTemplateFormatIds?: string[] | undefined;
};

type ReleaseItem = {
  files: Object;
  releaseVersions: ReleaseVersion[];
  creditMarkdown: string;
  cssVariables?: CSSVariablePattern[];
};

const MAX_METATEMPLATE_WORKERS = 1;
const AVERAGE_JOB_DURATION_ms = 20 * 1000;
const LONGER_THAN_A_HUMAN_COULD_POSSIBILITY_TOLERATE_ms = 6 * 60 * 1000;

type MetaTemplateInputsById = {
  [key: string]: Component;
};

type BuildMode = 'build' | 'alpha';

var ArgumentParser = ArgParse.ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Govt NZ Design System builder'
});
parser.addArgument(['-n', '--no-cache'], {
  help: 'No Cache'
});
parser.addArgument(['-f', '--filter'], {
  help: 'Filter by template Ids (comma separated)'
});
parser.addArgument(['-m', '--metaTemplateFormat'], {
  help: 'MetaTemplate formats by Id (comma separated)'
});
parser.addArgument(['-s', '--sources'], {
  help:
    'Use specific sources Ids (comma seperated). Use "-s mysource@1.2.3" for a specific version of a source.'
});

const args = parser.parseArgs();

const argMt =
  (args.metaTemplateFormat &&
    args.metaTemplateFormat.split(',').filter(val => !!val)) ||
  undefined;

main(
  'build',
  !!args.noCache,
  args.filter && args.filter.split(','),
  argMt && argMt.length > 0 ? argMt : undefined,
  args.sources && args.sources.split(',')
);
