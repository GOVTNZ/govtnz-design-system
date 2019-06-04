import validator from 'html-validator';
import path from 'path';
import { readFileSync } from 'fs';
// import { uniq } from 'lodash';

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

async function validateHTMLErrors(data) {
  const options = {
    format: 'json',
    data,
  };

  const result = await validator(options);

  // console.log(result);
  // const uniqueTypes = uniq(result.messages.map(item => item.type));
  // console.log(uniqueTypes)

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
