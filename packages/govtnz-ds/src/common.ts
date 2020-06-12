import fs from 'fs';
import path from 'path';

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
