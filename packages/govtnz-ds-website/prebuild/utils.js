const fs = require('fs');
const path = require('path');

const pathExists = async thePath => {
  let pathExists = false;
  try {
    // testing if CSS file exists
    await fs.promises.readFile(thePath);
    pathExists = true;
  } catch (e) {
    // pass
  }
  return pathExists;
};

const escapeRegex = regex => {
  return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
};

const dsRoot = path.resolve(__dirname, '../..', 'govtnz-ds');

const autogeneratedFileSignature = '// @autogenerated\n';

const getDsPath = async dsPath => {
  // provides a fallback from stable to alpha
  const stableDsPath = path.join('build', dsPath);
  const stablePath = path.join(dsRoot, stableDsPath);
  const hasStable = await pathExists(stablePath);
  if (hasStable) {
    return stableDsPath;
  }
  const alphaDsPath = path.join('alpha', dsPath);
  const alphaPath = path.join(dsRoot, alphaDsPath);
  const hasAlpha = await pathExists(alphaPath);
  if (hasAlpha) {
    return alphaDsPath;
  }
};

const importGenerator = async (importName, errorOnMissingImports) => {
  if (['ExampleHeading', 'ExampleContainer'].includes(importName)) {
    throw Error(importName);
  }
  const reactTs = await getDsPath(`react-ts/${importName}.tsx`);
  const css = `commons/styles/ds/themed-${importName}.scss`;

  let importString = '';
  if (reactTs) {
    importString += `import ${importName} from '@govtnz/ds/${reactTs}';\n`;
  }
  if (css) {
    importString += `import '../../${css}';\n`;
  }

  const cssFullPath = path.resolve(__dirname, '../src', css);
  cssString = `/* This file is auto-generated. Do not edit. Change config in ./_settings.scss */\n@import "./theme-settings.scss";\n@import "govtnzds/${importName}";\n`;
  await fs.promises.writeFile(cssFullPath, cssString, {
    encoding: 'utf-8',
  });

  if (errorOnMissingImports && importString.length === 0) {
    throw Error(`Unable to find any code for "${importName}".`);
  }

  return importString;
};

const importSourceGenerator = importName => {
  const srcPath = `components/sourcecode/${importName}`;
  return `import { id as ${importName}__id, templateFormats as ${importName}__templateFormats, formats as ${importName}__formats } from '../../${srcPath}';\n`;
};

const cleanUp = filesToDelete => {
  console.log(`DS Prebuild: ${filesToDelete.length} file(s) to delete.`);
  return Promise.all(
    filesToDelete.map(async filePath => {
      await fs.promises.unlink(filePath);
      console.log(`DS Website: Deleted ${filePath} autogenerated file.`);
    })
  );
};

const dynamicImportsFileSignature = '// @dynamicImports\n';

const insertTemplate = (template, replacer, importsString = '') => {
  // FIXME: Replace with Mustache or something like that
  // there's no need for a custom template maker
  const filledTemplate = template
    .replace(/'{{[\s]*?(.*?)[\s]*?}}'/gi, (all, match) => {
      const variableName = match.replace(/\:.*$/, '').trim();
      const val = replacer[variableName];
      if (!val) {
        console.log(`Not found "${variableName}"`, replacer);
        return all;
      }
      if (match.endsWith(':noquote')) {
        return val;
      }
      if (match.indexOf(':') !== -1) {
        console.log(`(${match})`);
      }
      return JSON.stringify(val);
    })
    .replace(dynamicImportsFileSignature, importsString);
  if (filledTemplate.match('{{')) {
    throw Error(
      `Error: Unable to fill template variable. Did you adhere to syntax '{{ thing }}' including the single quotes? Resulting HTML was ` +
        filledTemplate
    );
  }
  return filledTemplate;
};

const writeFile = async (filePath, content) => {
  try {
    await fs.promises.writeFile(filePath, content, { encoding: 'utf-8' });
  } catch (e) {
    console.error(`Unable to write: ${filePath}. Reason: ${e}`);
    throw e;
  }
};

const removeMatch = (list, match) => {
  // When we update files we remove them from the list
  // of files to be deleted, so that we don't get new
  // inode filesystem references which might confuse
  // the gatsby watcher.
  const index = list.indexOf(match);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
};

module.exports.pageContentComponentSignature = '// @pageContentComponent';
module.exports.dsRoot = dsRoot;
module.exports.removeMatch = removeMatch;
module.exports.writeFile = writeFile;
module.exports.insertTemplate = insertTemplate;
module.exports.cleanUp = cleanUp;
module.exports.importSourceGenerator = importSourceGenerator;
module.exports.autogeneratedFileSignature = autogeneratedFileSignature;
module.exports.pathExists = pathExists;
module.exports.escapeRegex = escapeRegex;
module.exports.getDsPath = getDsPath;
module.exports.importGenerator = importGenerator;
