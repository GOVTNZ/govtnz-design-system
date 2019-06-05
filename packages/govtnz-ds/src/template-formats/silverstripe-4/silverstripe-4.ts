import path from 'path';
import glob from 'glob-promise';
import fs from 'fs';
import { safeMerge } from '@govtnz/ds-common';
import templateReplacer from '../silverstripe';

export default async function(): Promise<AnyObject> {
  const formRoot = path.join(__dirname, 'upstream-forms');
  const templatePaths = await glob(path.join(formRoot, '**', '*.ss'));

  const silverStripeTemplates: string[] = await Promise.all(
    templatePaths.map(async templatePath => {
      return (await fs.promises.readFile(templatePath, {
        encoding: 'utf-8'
      })).toString();
    })
  );

  const templateParts = templatePaths.map((templatePath, i) => {
    const relativePath = templatePath.substring(formRoot.length + 1);
    return {
      [relativePath]: convertTemplate(relativePath, silverStripeTemplates[i])
    };
  });

  return safeMerge({}, ...templateParts);
}

function convertTemplate(
  templatePath: string,
  silverStripeTemplate: string
): string {
  return templateReplacer(
    silverStripeTemplate,
    (tagName: string, className: string) => {
      console.log(templatePath, tagName, className);
      return className;
    }
  );
}

type AnyObject = {
  [key: string]: string;
};

const ssClassToDS = {};
