import path from 'path';
import fs from 'fs';
import glob from 'glob-promise';

const root = path.dirname(__dirname);

describe('SCSS', () => {
  test('_settings has variables', async () => {
    const settingsData = await fs.promises.readFile(
      path.join(root, 'build', 'scss', '_settings.scss'),
      { encoding: 'utf-8' }
    );
    const SCSS_VARIABLE_PREFIX = '$';
    expect(settingsData.includes(SCSS_VARIABLE_PREFIX)).toBe(true);
  });
});

// The follow constant is an arbitrary choice to check for whether the conversion seemed successful
const COLOUR_THAT_SHOULD_EXIST = 'b53cde';

describe(`CSS/SCSS contains values`, () => {
  test(`CSS contains ${COLOUR_THAT_SHOULD_EXIST}`, async () => {
    const filterFn = aPath => {
      return !path.basename(aPath).includes('_');
    };
    const css = await getAggregatedData('css', 'css', filterFn);
    expect(css).toEqual(expect.stringContaining(COLOUR_THAT_SHOULD_EXIST));
  });

  test(`SCSS contains ${COLOUR_THAT_SHOULD_EXIST}`, async () => {
    const scss = await getAggregatedData('scss', 'scss');
    expect(scss).toEqual(expect.stringContaining(COLOUR_THAT_SHOULD_EXIST));
  });
});

async function getAggregatedData(
  integrationType: 'css' | 'scss',
  fileExtension: string,
  filterPath?: (aPath: string) => boolean
) {
  const paths = await glob(
    path.join(root, 'build', integrationType, `*.${fileExtension}`)
  );
  const filteredPaths = filterPath ? paths.filter(filterPath) : paths;
  const datum = await Promise.all(
    filteredPaths.map(aPath =>
      fs.promises.readFile(aPath, { encoding: 'utf-8' })
    )
  );
  return datum.join('');
}
