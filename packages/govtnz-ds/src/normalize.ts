import cssParser from 'postcss-safe-parser';
import { camelCase } from 'lodash';
import { SourceId, ReleaseVersion } from '@govtnz/ds-upstream';
import { DynamicKey } from '@springload/metatemplate';
import { normalizeGeneric } from './normalize-generic';
import { JSDOM } from 'jsdom';
import { gc, splitSelectors } from './utils';

export const normalizeUpstream = async (
  sourceId: SourceId,
  upstreamReleaseVersions: ReleaseVersion[]
): Promise<ReleaseVersion[]> => {
  let releaseVersions: ReleaseVersion[];
  switch (sourceId) {
    case 'govuk': {
      // Already in a good format
      releaseVersions = upstreamReleaseVersions;
      break;
    }
    case 'flexboxgrid':
    case 'govtnz': {
      // already in metatemplate format, but need to camelCase names
      releaseVersions = await Promise.all(
        upstreamReleaseVersions.map(
          async (
            upstreamReleaseVersion: ReleaseVersion
          ): Promise<ReleaseVersion> =>
            await normalizeGeneric(upstreamReleaseVersion)
        )
      );
      break;
    }
    default: {
      throw Error(`Unknown ${sourceId}`);
    }
  }

  releaseVersions.forEach(releaseVersion => {
    releaseVersion.components.forEach(component => {
      if (component.id !== toId(component.id)) {
        throw new Error(
          `${__filename}: Component Id name check failure: "${
            component.id
          }" !== "${toId(component.id)}"`
        );
      }
    });
  });

  return releaseVersions;
};

function wrapBody(bodyHTML: string) {
  return `<!DOCTYPE html><html><body>${bodyHTML}</body></html>`;
}

export const insertVariableBySelector = async (
  html: string,
  selector: string,
  key: string,
  defaultValue: string = 'Example text'
): Promise<string> => {
  // Selector may be a CSS selector (just one, no comma-separated selectors),
  // but it may also include an XPath-like "/node()" suffix to select text nodes
  // because CSS Selectors can't select such nodes. ie "a/node()" will match text nodes
  // within "a" elements.
  const metaTemplateVariable = `<mt-variable key="${key}">${defaultValue}</mt-variable>`; // Note that JSDOM doesn't understand self-closing custom elements
  const dom = new JSDOM(wrapBody(html));
  const body = dom.window.document.body;
  let lastParentNode;
  let removeTags;
  if (selector.includes('/node()')) {
    const newSelector = selector.replace(/\/node\(\)$/gi, '');
    const containers = body.querySelectorAll(newSelector);
    removeTags = [];
    [...containers].forEach(container => {
      removeTags = removeTags.concat([...container.childNodes]);
    });
  } else {
    removeTags = body.querySelectorAll(selector);
  }
  if (removeTags.length === 0) {
    throw Error(`Unable to find "${selector}" in ${html}`);
  }
  [...removeTags].forEach(removeTag => {
    lastParentNode = removeTag.parentNode;
    lastParentNode.removeChild(removeTag);
  });
  lastParentNode.innerHTML = metaTemplateVariable;
  const result = [...body.childNodes]
    .map(childNode => childNode.outerHTML)
    .join('');
  setTimeout(() => {
    dom.window.close();
    gc();
  }, 10);
  return result;
};

export const setAttributeBySelector = (
  html: string,
  selector: string,
  attributeName: string,
  defaultValue: string | undefined,
  dynamicKeys?: DynamicKey[] | undefined
): string => {
  // Selector may be a CSS selector
  const dom = new JSDOM(wrapBody(html));
  const body = dom.window.document.body;
  const target = body.querySelector(selector);
  if (!target) {
    throw Error(`Unable to select node with "${selector}" in ${html}.`);
  }
  let value: string =
    defaultValue === undefined
      ? target.getAttribute(attributeName) || ''
      : defaultValue;

  if (dynamicKeys && dynamicKeys.length) {
    if (value.length > 0) {
      value += ' ';
    }
    value += dynamicKeys
      .map(dynamicKey => {
        let dk = '{{ ';

        dk += dynamicKey.key;
        if (dynamicKey.stableKey) {
          dk += '!';
        }
        if (Array.isArray(dynamicKey.type)) {
          dk += `${dynamicKey.optional ? '?' : ''}: `;
          dk += dynamicKey.type
            .map(anEnum => `${anEnum.value} as ${anEnum.name}`)
            .join(' | ');
        } else if (dynamicKey.type === 'boolean') {
          // "?" because all booleans are optional ie, not provided=false, provided=true
          dk += `?: ${dynamicKey.ifTrueValue}`;
        }
        dk += ' }}';
        return dk;
      })
      .join(' ');
  }

  target.setAttribute(attributeName, value);

  const result = [...body.childNodes]
    .map(childNode => childNode.outerHTML)
    .join('');
  dom.window.close();
  gc();
  return result;
};

export const removeAttribute = (
  html: string,
  selector: string,
  attributeName: string
) => {
  const dom = new JSDOM(wrapBody(html));
  const body = dom.window.document.body;
  const target = body.querySelector(selector);
  if (!target) {
    throw Error(`Unable to select node with "${selector}" in ${html}.`);
  }
  target.removeAttribute(attributeName);
  const result = Array.from(body.childNodes)
    .map(childNode => childNode.outerHTML)
    .join('');
  dom.window.close();
  gc();
  return result;
};

export const removeElement = (html: string, selector: string) => {
  const dom = new JSDOM(wrapBody(html));
  const body = dom.window.document.body;
  const target = body.querySelector(selector);
  if (!target) {
    throw Error(`Unable to select node with "${selector}" in ${html}.`);
  }
  target.parentNode.removeChild(target);
  const result = Array.from(body.childNodes)
    .map(childNode => childNode.outerHTML)
    .join('');
  dom.window.close();
  gc();
  return result;
};

export const select = (html: string, selector: string): string => {
  // Selector may be a CSS selector
  const dom = new JSDOM(wrapBody(html));
  const body = dom.window.document.body;
  const resultNode = body.querySelector(selector);
  if (!resultNode) {
    throw Error(`Couldn't find "${selector}" in: ${html}`);
  }
  const result = resultNode.outerHTML;
  dom.window.close();
  gc();
  return result;
};

export const replaceClass = (
  html: string,
  className: string,
  withValue: string
): string => {
  // TODO: Use a CSS Parser to rename the class
  if (html.indexOf(className) === -1) {
    throw Error(`Unable to find "${className}" in "${html}".`);
  }
  return html.replace(className, withValue);
};

export const toId = (id: string): string => {
  // Normalise component id to be camelCase except with the first
  // letter being a capital letter ie CamelCase.
  return id.substring(0, 1).toUpperCase() + camelCase(id.substring(1));
};

type PropertyMatchProps = {
  atRule: string;
  selector: string;
  name: string;
  value: string;
  isImportant: boolean;
};

type ValueReplacer = (props: PropertyMatchProps) => string | undefined;

type SelectorReplacerProps = {
  selector: string;
};

type SelectorReplacer = (props: SelectorReplacerProps) => string | undefined;

type AddProps = {
  atRule: string;
  selector: string;
};

type AddCallback = (props: AddProps) => string | undefined;

type RemoveCallback = (props: PropertyMatchProps) => boolean;

export const setCSSValues = (
  css: string,
  valueReplacer?: ValueReplacer | undefined,
  selectorReplacer?: SelectorReplacer | undefined,
  addCallback?: AddCallback | undefined,
  removeCallback?: RemoveCallback | undefined
): string => {
  // Prettier maintains single and double but not triple linebreaks,
  // so to compare CSS files we need to increase spacing between CSS rules
  // and then use Prettier to standardise it again... hence closeCSSRule
  // being 3 linebreaks "}\n\n\n"
  const closeCSSRule = '} ';

  let lastAtRule: string = '';

  let lastSelector: string = '';

  const renderCSS = node => {
    let response: string = '';
    switch (
      node.type.trim() // strangely .trim() is required because node.type can be "@font-face " with a trailing space!
    ) {
      case 'rule': {
        lastSelector = node.selector;
        let callbackResponse: string | undefined;
        if (selectorReplacer) {
          callbackResponse = selectorReplacer({ selector: node.selector });
        }
        response +=
          callbackResponse !== undefined ? callbackResponse : node.selector;
        response += '{';
        response += node.nodes ? node.nodes.map(renderCSS).join('\n') : '';
        if (addCallback) {
          const selectors = splitSelectors(lastSelector);
          for (let i = 0; i < selectors.length; i++) {
            const newVal = addCallback({
              atRule: lastAtRule,
              selector: selectors[i]
            });
            if (newVal) {
              response += `${newVal};`;
            }
          }
        }

        response += closeCSSRule;
        lastSelector = '';
        break;
      }
      case 'atrule': {
        lastAtRule = `@${node.name} ${node.params}`;
        response += `@${node.name} ${node.params} `;
        if (node.nodes) {
          response += ' {';
          response += node.nodes.map(renderCSS).join('\n');
          response += closeCSSRule;
        } else {
          response += ';';
        }
        lastAtRule = '';
        break;
      }
      case 'decl': {
        const defaultResponse = node.value;
        let callbackResponse: string | undefined;
        if (valueReplacer) {
          const selectors = splitSelectors(lastSelector);
          for (let i = 0; i < selectors.length; i++) {
            const newVal = valueReplacer({
              atRule: lastAtRule,
              selector: selectors[i],
              name: node.prop,
              value: node.value,
              isImportant: !!node.important
            });
            if (callbackResponse && newVal) {
              // two competing replacement values for this particular CSS property
              throw Error(
                `replaceCSSValues error: two competing selectors replaced the value ${lastSelector}`
              );
            }
            callbackResponse = newVal;
          }
        }
        let shouldBeRemoved = false;
        if (removeCallback) {
          const selectors = splitSelectors(lastSelector);
          for (let i = 0; i < selectors.length; i++) {
            if (
              removeCallback({
                atRule: lastAtRule,
                selector: selectors[i],
                name: node.prop,
                value: node.value,
                isImportant: !!node.important
              })
            ) {
              // In an 'if' block so that once set `true` it can't
              // be unset.
              shouldBeRemoved = true;
            }
          }
        }
        if (shouldBeRemoved === false) {
          response +=
            node.prop +
            node.raws.between +
            (callbackResponse !== undefined
              ? callbackResponse
              : defaultResponse) +
            (node.important ? ' !important' : '') +
            ';';
        }
        break;
      }
      case 'comment': {
        // ignore
        break;
      }
      case '@font-face': {
        throw Error(
          `${__filename}: Unrecognised CSS node type "${node.type}". Please contribute your CSS as a test case to the project.`
        );
        break;
      }
      default: {
        throw Error(
          `${__filename}: Unrecognised CSS node type "${node.type}". Please contribute your CSS as a test case to the project.`
        );
      }
    }
    return response;
  };
  const cssNodes = [...cssParser(css).nodes];
  return cssNodes.map(node => renderCSS(node)).join('\n');
};

export const wrapIfBySelector = (
  html: string,
  selector: string,
  key: string
): string => {
  const dom = new JSDOM(wrapBody(html), {
    resources: 'usable',
    pretendToBeVisual: true
  });
  const document = dom.window.document;

  const mtIf = document.createElement('mt-if');
  mtIf.setAttribute('key', key);
  const element = document.querySelector(selector);
  element.parentNode.insertBefore(mtIf, element);
  mtIf.appendChild(element);
  const result = [...document.body.childNodes]
    .map(childNode => childNode.outerHTML)
    .join('');
  dom.window.close();
  gc();
  return result;
};

export type CalculatedDynamicKeys = {
  [key: string]: string;
};

export type MetaTemplateDef = {
  id: string;
  html: string;
  css: string;
  message?: string;
  calculatedDynamicKeys?: CalculatedDynamicKeys;
};
