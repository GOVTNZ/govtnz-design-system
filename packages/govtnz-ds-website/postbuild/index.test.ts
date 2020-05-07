const fs = require('fs');
const validator = require('html-validator');
const glob = require('glob-promise');
const babelParser = require('@babel/parser');
const babelTraverse = require('@babel/traverse');
const path = require('path');
const { readFileSync } = require('fs');

const falsePositives = [
  { message: 'Bad value “fetch” for attribute “as” on element “link”.' },
  {
    message:
      'Element “h1” not allowed as child of element “legend” in this context.',
  },
  {
    message: 'Bad value “presentation” for attribute “role” on element “svg”',
  },
];

const indexPage = readFileSync(
  path.resolve(__dirname, '..', 'public/index.html'),
  'utf8'
);

const radiosPage = readFileSync(
  path.resolve(__dirname, '..', 'public/components/Radios/index.html'),
  'utf8'
);

const radiosIframe = readFileSync(
  path.resolve(__dirname, '..', 'public/components/Radios__example1.html'),
  'utf8'
);

test('HTML Validation', async () => {
  await Promise.all([
    validateHTMLErrors(indexPage, 'Index page'),
    validateHTMLErrors(radiosPage, 'Radios page'),
    validateHTMLErrors(radiosIframe, 'Radios iframed page'),
  ]);
});

test('Validate not ES6 (IE11 needs ES5)', async () => {
  const jsPaths = await glob(path.resolve(__dirname, '..', 'public', '*.js'));

  // basic sanity check of whether there is a build there
  expect(jsPaths.length).toBeGreaterThan(10);

  await Promise.all(
    jsPaths.map(async jsPath => {
      const data = await fs.promises.readFile(jsPath, { encoding: 'utf-8' });
      try {
        await validateNotES6(data, jsPath, 'jest');
        expect(true).toBe(true);
      } catch (e) {
        expect(false).toBe(true);
        console.error(e);
      }
    })
  );

  // Test whether validateNotES6 is working as expected by whether it
  // will NOT throw an exception on ES5 code
  // (and yeah I know the proper name is ES2015)
  try {
    validateNotES6('thing;', '(string)', 'throw');
    // SHOULD get this far, because doesn't expect exception thrown in
    // validateNoES6
    expect(true).toBe(true);
  } catch (e) {
    expect(
      "SHOULDN'T get this far, didn't expect exception thrown in validateNoES6"
    ).toBe(true);
  }
});

async function validateHTMLErrors(data, fileId) {
  const options = {
    format: 'json',
    data,
  };

  jest.setTimeout(30000); // HTTP requests to the validator service can take a while

  let result;
  try {
    result = await validator(options);
  } catch (e) {
    console.error(fileId, e);
  }

  const errors =
    result &&
    result.messages
      .filter(item => item.type === 'error')
      .filter(
        item =>
          !falsePositives.some(falsePositive => {
            return item.message.trim().startsWith(falsePositive.message.trim());
          })
      );

  if (errors === undefined) {
    console.error('Unable to get any result from validation');
  } else if (errors && errors.length > 0) {
    console.error(fileId, errors);
  }

  expect(errors && errors.length).toBe(0);
}

async function validateNotES6(data, filePath, errorType) {
  const ast = babelParser.parse(data);
  babelTraverse.default(ast, {
    enter(path) {
      if (path.type === 'ArrowFunctionExpression') {
        if (errorType === 'jest') {
          expect(path.type).not.toBe('ArrowFunctionExpression');
        } else {
          const message = `Expected no Arrow Functions within JavaScript build (to ensure IE11 support) but found ${path.type} at ${filePath}. Was given: ${data}`;
          console.log(message);
          throw new Error(message);
        }
      } else {
      }
    },
  });
}

test('Validate that HTML has a single id="main-heading"', async () => {
  const regex = /id=["']main-heading["']/g;
  const allHtmlPaths = await glob(
    path.resolve(__dirname, '..', 'public', '**/*.html'),
    { nodir: true }
  );

  const htmlPaths = allHtmlPaths.filter(
    anHtmlPath => !anHtmlPath.includes('__example')
  );

  jest.setTimeout(htmlPaths.length * 1000);

  // basic sanity check of whether there is a build there
  expect(htmlPaths.length).toBeGreaterThan(10);

  await Promise.all(
    htmlPaths.map(async htmlPath => {
      let data;
      try {
        data = await fs.promises.readFile(htmlPath, {
          encoding: 'utf-8',
        });
      } catch (e) {
        console.log(htmlPath);
        throw e;
      }
      const results = data.match(regex);

      if (!results || results.length !== 1) {
        const h1Index = data.indexOf('<h1');
        console.log(
          htmlPath,
          h1Index !== -1 ? data.substring(h1Index - 100, h1Index + 300) : null,
          results
        );
      }
      expect(results && results.length).toBe(1);
    })
  );
});
