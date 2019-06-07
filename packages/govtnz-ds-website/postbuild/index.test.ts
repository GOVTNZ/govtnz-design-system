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
];

const indexPage = readFileSync(
  path.resolve(__dirname, '..', 'public/index.html'),
  'utf8'
);

const radiosPage = readFileSync(
  path.resolve(__dirname, '..', 'public/components/Radios/index.html'),
  'utf8'
);

test('HTML Validation', async () => {
  await Promise.all([
    validateHTMLErrors(indexPage),
    validateHTMLErrors(radiosPage),
  ]);
});

test('Validate not ES6 (IE11 needs ES5)', async () => {
  const jsPaths = await glob(path.resolve(__dirname, '..', 'public', '*.js'));

  // basic sanity check of whether there is a build there
  expect(jsPaths.length).toBeGreaterThan(10);

  await Promise.all(
    jsPaths.map(async jsPath => {
      const data = await fs.promises.readFile(jsPath, { encoding: 'utf-8' });
      await validateNotES6(data, jsPath, 'jest');
    })
  );
  try {
    validateNotES6('() => {}', '(string)', 'throw');
    expect(
      "Shouldn't get this far, expected exception thrown in validateNoES6"
    ).toBe(true);
  } catch (e) {
    expect(
      "Shouldn't get this far, expected exception thrown in validateNoES6"
    ).toBe(
      "Shouldn't get this far, expected exception thrown in validateNoES6"
    );
  }
});

async function validateHTMLErrors(data) {
  const options = {
    format: 'json',
    data,
  };

  const result = await validator(options);

  const errors = result.messages
    .filter(item => item.type === 'error')
    .filter(
      item =>
        !falsePositives.some(falsePositive => {
          return item.message.trim().startsWith(falsePositive.message.trim());
        })
    );

  if (errors.length > 0) {
    console.error(errors);
  }

  expect(errors.length).toBe(0);
}

async function validateNotES6(data, filePath, errorType) {
  const ast = babelParser.parse(data);
  babelTraverse.default(ast, {
    enter(path) {
      if (path.type === 'ArrowFunctionExpression') {
        if (errorType === 'jest') {
          expect(path.type).not.toBe('ArrowFunctionExpression');
        } else {
          throw new Error(
            `Expected no Arrow Functions within JavaScript build (to ensure IE11 support) but found ${
              path.type
            } at ${filePath}`
          );
        }
      } else {
      }
    },
  });
}
