"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argparse_1 = __importDefault(require("argparse"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const format_duration_1 = __importDefault(require("format-duration"));
const metatemplate_1 = require("@springload/metatemplate");
const progress_1 = __importDefault(require("progress"));
const rmfr_1 = __importDefault(require("rmfr"));
const mkdirp_promise_1 = __importDefault(require("mkdirp-promise"));
const ds_common_1 = require("@govtnz/ds-common");
const ds_upstream_1 = __importDefault(require("@govtnz/ds-upstream"));
const normalize_1 = require("./normalize");
const lodash_1 = require("lodash");
const utils_1 = require("./utils");
const glob_promise_1 = __importDefault(require("glob-promise"));
const es6_promise_pool_1 = __importDefault(require("es6-promise-pool"));
ds_common_1.ensureNodeVersion();
async function main(mode, noCache = false, patternIds, metaTemplateFormatIds = ['*']) {
    console.info('Command line args:');
    console.info('  -  Cache: ', !noCache);
    console.info('  -  Filter By Patterns:', patternIds ? patternIds : false);
    console.info('  -  MetaTemplate formats:', metaTemplateFormatIds ? metaTemplateFormatIds : false, '\n');
    console.log('\n\n\n');
    const specString = (await fs_1.default.promises.readFile(path_1.default.join(__dirname, 'build-types', `${mode}-spec.json`), {
        encoding: 'utf-8'
    })).toString();
    if (noCache) {
        console.info('Building release while using NO CACHE.');
    }
    else {
        console.log('Building release with cache. Use `--no-cache` to disable cache.');
    }
    const releaseSpecItems = JSON.parse(specString);
    const release = [];
    let cssVariables = [];
    // Sequentially run because may result in a full scrape (downloading
    // a repo, and installing it, starting webserver, scraping, etc.)
    // may have localhost port conflicts, resource contention issues.
    for (let i = 0; i < releaseSpecItems.length; i++) {
        const releaseSpecItem = releaseSpecItems[i];
        releaseSpecItem.patternIds = patternIds || releaseSpecItem.patternIds;
        releaseSpecItem.metaTemplateFormatIds =
            metaTemplateFormatIds || releaseSpecItem.metaTemplateFormatIds;
        console.log(`Release build step ${i + 1} ${releaseSpecItem.sourceId}@${releaseSpecItem.version}. Scraping ${releaseSpecItem.patternIds
            ? releaseSpecItem.patternIds.toString()
            : 'ALL patterns.'} `);
        const releaseItem = await makeReleaseSpecItem(releaseSpecItem, noCache);
        release.push(releaseItem);
        cssVariables = utils_1.safeMergeCssVariables(cssVariables, releaseItem.cssVariables);
    }
    const allFiles = ds_common_1.safeMerge(...release.map(releaseItem => releaseItem.files));
    const allReleaseVersions = release.map(releaseItem => releaseItem.releaseVersions);
    const indexImports = metatemplate_1.makeIndexImports({
        fileKeys: Object.keys(allFiles),
        cssVariables
    });
    // const compilationFiles = await makeCompilation(release);
    const nonComponentDocs = await makeNonComponentDocs(allFiles);
    let files = ds_common_1.safeMerge(allFiles, indexImports, nonComponentDocs);
    const isCompleteRelease = !patternIds && !metaTemplateFormatIds; // if they're filtering or choosing templates then we'll assume they're merging with an existing release and don't want to rimRaf
    await saveRelease(mode, isCompleteRelease, files, nonComponentDocs, allReleaseVersions);
    console.log('Release updated.');
}
const makeReleaseSpecItem = async ({ sourceId, version, patternIds, metaTemplateFormatIds }, noCache) => {
    const upstreamReleaseVersions = await ds_upstream_1.default(sourceId, version, patternIds, noCache);
    const releaseVersions = await normalize_1.normalizeUpstream(sourceId, upstreamReleaseVersions);
    let cssVariables = [];
    const jobs = [];
    for (let rvIndex = 0; rvIndex < releaseVersions.length; rvIndex++) {
        const releaseVersion = releaseVersions[rvIndex];
        const components = releaseVersion.components;
        for (let cIndex = 0; cIndex < components.length; cIndex++) {
            const component = components[cIndex];
            const job = {
                component,
                creditMarkdown: releaseVersion.creditMarkdown,
                cssVariables,
                metaTemplateFormatIds
            };
            jobs.push(job);
        }
    }
    const jobIds = jobs.map(job => job.component.id);
    console.log(`Generating these templates: ${jobIds}`);
    const filesArr = [];
    const startTime = Date.now();
    const timings = await utils_1.getTimingBenchmarks();
    let timing = timings[jobs.length];
    const expectedDuration = timing && timing[MAX_METATEMPLATE_WORKERS]
        ? timing[MAX_METATEMPLATE_WORKERS]
        : jobs.length * AVERAGE_JOB_DURATION_ms;
    if (jobs.length > 0) {
        let message = `Because there are ${jobs.length} job(s) with ${MAX_METATEMPLATE_WORKERS} workers this may take approximately ${format_duration_1.default(expectedDuration)}.`;
        if (timing && timing[MAX_METATEMPLATE_WORKERS]) {
            message = `Last time ${jobs.length} job(s) with ${MAX_METATEMPLATE_WORKERS} worker(s) took ${format_duration_1.default(expectedDuration)}${expectedDuration > LONGER_THAN_A_HUMAN_COULD_POSSIBILITY_TOLERATE_ms
                ? ' ...so go get a cuppa.'
                : '.'}`;
        }
        console.info(message);
    }
    const bar = new progress_1.default(`MetaTemplate Output generation (#${jobs.length} total) :bar :percent`, {
        total: jobs.length
    });
    // Start pool of workers for MetaTemplate...
    let disposeMetaTemplate;
    let nextJobIndex = 0;
    async function processJob(jobIndex, job) {
        const response = await componentToFiles(job);
        filesArr.push(response.files);
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
        const concurrency = jobs.length < MAX_METATEMPLATE_WORKERS
            ? jobs.length
            : MAX_METATEMPLATE_WORKERS; // The number of promises to process simultaneously.
        const pool = new es6_promise_pool_1.default(GetNextJob.bind(bar), concurrency);
        const poolPromise = pool.start();
        await poolPromise;
        if (disposeMetaTemplate) {
            await disposeMetaTemplate();
        }
        else {
            console.log(`No 'disposeMetaTemplate' found in ${jobs.length} job(s). This indicates a bug that should be investigated.`);
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
        console.log(`That took took ${format_duration_1.default(actualDuration)} with ${MAX_METATEMPLATE_WORKERS} worker(s).`);
    }
    await utils_1.setTimingBenchmarks(timings);
    const files = ds_common_1.safeMerge(...filesArr);
    return {
        releaseVersions,
        files,
        creditMarkdown: releaseVersions[0].creditMarkdown,
        cssVariables
    };
};
const componentToFiles = async ({ component, creditMarkdown, cssVariables, metaTemplateFormatIds }) => {
    const cssReadme = `These CSS files can be bundled in any order because all selectors are namespaced.`;
    cssVariables = utils_1.safeMergeCssVariables(cssVariables, component.cssVariables);
    const response = await metatemplate_1.makeTemplates(component, metaTemplateFormatIds);
    const markdownFileName = `${component.id}.md`;
    const relativeMarkdownPath = path_1.default.join('docs', markdownFileName);
    let md = '';
    try {
        const markdownPath = path_1.default.resolve(__dirname, relativeMarkdownPath);
        md = (await fs_1.default.promises.readFile(markdownPath)).toString();
    }
    catch (e) {
        md += `# ${lodash_1.startCase(component.id)}\n\ncode:${component.id}\n`;
    }
    md += `## Credit\n${creditMarkdown}`;
    utils_1.gc();
    const metaTemplateFiles = response.metaTemplates.map(metaTemplate => metaTemplate.files);
    // merge all metatemplates together
    return {
        files: ds_common_1.safeMerge(...metaTemplateFiles, {
            ['css/README.md']: cssReadme,
            [`docs/${markdownFileName}`]: md
        }),
        disposeMetaTemplate: response.disposeAll
    };
};
const saveRelease = async (mode, isCompleteRelease, files, additionalStableFiles, allReleaseVersions) => {
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
        alpha: path_1.default.resolve(__dirname, '..', 'alpha_src'),
        build: path_1.default.resolve(__dirname, '..', 'build_src')
    };
    const specPath = specPaths[mode];
    if (!specPath)
        throw Error(`specPath doesn't recognise mode=${mode}. Valid options are ${Object.keys(specPaths)}`);
    // Clean up after previous release
    if (isCompleteRelease) {
        await rmfr_1.default(path_1.default.join(specPath, '*'), { glob: true });
        await mkdirp_promise_1.default(specPath);
    }
    let metaTemplateInputsById = allReleaseVersions.reduce((metaTemplateInputsById, releaseVersions) => {
        releaseVersions.forEach(releaseVersion => releaseVersion.components.forEach((component) => {
            metaTemplateInputsById[component.id] = component;
        }));
        return metaTemplateInputsById;
    }, {});
    const metaTemplateInputsPath = path_1.default.join(specPath, '.metatemplate-inputs.json');
    if (!isCompleteRelease) {
        try {
            const data = (await fs_1.default.promises.readFile(metaTemplateInputsPath, {
                encoding: 'utf-8'
            })).toString();
            const oldMetaTemplateInputs = JSON.parse(data);
            metaTemplateInputsById = {
                ...oldMetaTemplateInputs,
                ...metaTemplateInputsById
            };
        }
        catch (e) {
            // Recoverable, so print error and continue...
            console.log(e);
            metaTemplateInputsById = {};
        }
    }
    await fs_1.default.promises.writeFile(path_1.default.join(specPath, '.metatemplate-inputs.json'), JSON.stringify(metaTemplateInputsById, null, 2), {
        encoding: 'utf-8'
    });
    // Write the new release
    const releaseFilePaths = Object.keys(files);
    await Promise.all(releaseFilePaths.map(async (releaseFilePath) => {
        process.stdout.write('.');
        const filePathDir = path_1.default.join(specPath, path_1.default.dirname(releaseFilePath));
        await mkdirp_promise_1.default(filePathDir);
        const filePath = path_1.default.join(specPath, releaseFilePath);
        let options;
        if (typeof files[releaseFilePath] === 'string') {
            // because we might receive Buffers of binary data
            options = {
                encoding: 'utf-8'
            };
        }
        const hasData = !!files[releaseFilePath];
        if (hasData) {
            await fs_1.default.promises.writeFile(filePath, files[releaseFilePath], options);
        }
    }));
    // Copy static files
    const staticPath = path_1.default.join(specPath, 'static');
    await mkdirp_promise_1.default(staticPath);
    const staticFiles = await glob_promise_1.default(path_1.default.join(__dirname, 'static/*'));
    await Promise.all(staticFiles.map(staticFilePath => fs_1.default.promises.copyFile(staticFilePath, path_1.default.join(staticPath, path_1.default.basename(staticFilePath)))));
    console.log(`\n\nFinished. Wrote ${releaseFilePaths.length} file(s) to ${mode}\n( ${specPath} )`);
};
const makeNonComponentDocs = async (allFiles) => {
    const usedDocs = Object.keys(allFiles)
        .filter(aFile => aFile.startsWith('docs/'))
        .map(aFile => path_1.default.basename(aFile));
    let docFiles = {};
    // Now copy over any markdown files that weren't related to components
    const docsPath = path_1.default.resolve(__dirname, 'docs');
    const allDocs = (await glob_promise_1.default(path_1.default.join(docsPath, '*.md'))).map(docPath => path_1.default.basename(docPath));
    const unusedDocs = allDocs.filter(filename => {
        return usedDocs.indexOf(filename) === -1;
    });
    await Promise.all(unusedDocs.map(async (unusedDoc) => {
        const markdown = await fs_1.default.promises.readFile(path_1.default.join(docsPath, unusedDoc));
        docFiles[`docs/${unusedDoc}`] = markdown;
    }));
    return docFiles;
};
const MAX_METATEMPLATE_WORKERS = 1;
const AVERAGE_JOB_DURATION_ms = 20 * 1000;
const LONGER_THAN_A_HUMAN_COULD_POSSIBILITY_TOLERATE_ms = 6 * 60 * 1000;
var ArgumentParser = argparse_1.default.ArgumentParser;
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
const args = parser.parseArgs();
const argMt = (args.metaTemplateFormat &&
    args.metaTemplateFormat.split(',').filter(val => !!val)) ||
    undefined;
main('build', !!args.noCache, args.filter && args.filter.split(','), argMt && argMt.length > 0 ? argMt : undefined);
//# sourceMappingURL=index.js.map