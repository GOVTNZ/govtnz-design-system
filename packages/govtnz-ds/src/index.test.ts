import path from 'path';
import fs from 'fs';

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
