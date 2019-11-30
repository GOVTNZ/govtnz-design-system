import { CSSVariablePattern } from '@springload/metatemplate';
import { camelCase, kebabCase } from 'lodash';

const govUkClassNameToGenericClassName = (
  namespace: string,
  className: string,
  originalIds: string[],
  fullMatch: string
): { replacement: string; newMessage?: string | undefined } => {
  let g: string;
  // We want to namespace CSS classes (in both HTML and CSS to keep them in sync) so
  // that CSS tweaks per-component don't affect other components (ie. setting a distinct
  // border colour for each .g-label... one as .g-usage1-label and the other as
  // .g-usage2-label
  //
  // However we could be namespacing "g-radios" to "g-radios-radios" which is rather
  // pointless.
  //
  // So if it already starts with the namespace then we don't a insert a namespace
  if (
    originalIds &&
    originalIds.some(
      anId =>
        !!className.match(new RegExp(`^${anId}[-_]`)) || anId === className
    )
  ) {
    return {
      newMessage: `Note: Using CSS concated namespace of "g-${className}" because of the duplicate start of "g-${namespace}-${className}")\n`,
      replacement: `g-${className}`
    };
  }
  return { replacement: `g-${namespace}-${className}` };
};

export const normalizeGovUkTemplate = async ({
  id,
  html,
  css,
  cssNamespace,
  message,
  calculatedDynamicKeys,
  additionalPrefixesToBypassNamespacing
}) => {
  // FIXME: Replace with a real HTML/CSS parser-based replacement
  const newCssNamespace = cssNamespace || camelCase(id);
  // console.log({ id, cssNamespace, newCssNamespace });
  const namespacedHTML = html.replace(/g-([A-Za-z0-9-_]+)/g, (all, p1) => {
    // The regex ^^ doesn't need to encompass the whole class name, just the g-something part
    // that we're using to test
    const { newMessage, replacement } = govUkClassNameToGenericClassName(
      newCssNamespace,
      p1,
      [
        id,
        camelCase(id),
        kebabCase(id),
        newCssNamespace,
        ...additionalPrefixesToBypassNamespacing
      ],
      all
    );
    if (newMessage) {
      message += newMessage;
    }
    return replacement;
  });
  // This regex should only match the part of a selector that starts with
  // "g-something-" or "g-something" not more than that such as
  // "g-something-notthis" and definitely not
  // ".g-something-anything .g-another-thing" because each "g-" should be
  // matched individually so that it may be optionally namespaced
  const namespacedCSS = css.replace(/\.g-([A-Za-z0-9-_]+)/g, (all, p1) => {
    // The regex ^^ doesn't need to encompass the whole class name, just the g-something part
    // that we're using to test
    const { newMessage, replacement } = govUkClassNameToGenericClassName(
      newCssNamespace,
      p1,
      [id, newCssNamespace, ...additionalPrefixesToBypassNamespacing],
      all
    );
    if (newMessage) {
      message += newMessage;
    }
    return `.${replacement}`;
  });

  let newMessage = message;

  return {
    id,
    html: namespacedHTML,
    css: namespacedCSS,
    message: newMessage,
    calculatedDynamicKeys,
    cssVariables
  };
};

const cssVariables: CSSVariablePattern[] = [
  {
    id: 'g-theme-font-family',
    valueSubstringMatch: 'Arial, sans-serif',
    defaultValue: 'Arial, sans-serif'
  },
  {
    id: 'g-theme-color-heading',
    valueSubstringMatch: '#ff0000',
    defaultValue: '#0b0c0c'
  },
  {
    id: 'g-theme-color-link',
    valueSubstringMatch: '#ff0000',
    defaultValue: '#0000ff'
  },

  {
    id: 'g-theme-color-black',
    valueSubstringMatch: '#000000',
    defaultValue: '#000000'
  },
  {
    id: 'g-theme-color-grey',
    valueSubstringMatch: '#bfc1c3',
    defaultValue: '#bfc1c3'
  },
  {
    id: 'g-theme-color-darkblue',
    valueSubstringMatch: '#005ea5',
    defaultValue: '#005ea5'
  },
  {
    id: 'g-theme-color-brand-1', // focus
    valueSubstringMatch: '#ffbf47',
    defaultValue: '#b53cde'
  },
  {
    id: 'g-theme-color-light-grey',
    valueSubstringMatch: '#f8f8f8',
    defaultValue: '#f8f8f8'
  },
  {
    id: 'g-theme-color-mid-grey',
    valueSubstringMatch: '#6f777b',
    defaultValue: '#6f777b'
  },
  {
    id: 'g-theme-color-white',
    valueSubstringMatch: '#ffffff',
    defaultValue: '#ffffff'
  },
  {
    id: 'g-theme-color-brand-2',
    valueSubstringMatch: '#00823b',
    defaultValue: '#00823b'
  },
  {
    id: 'g-theme-color-brand-3',
    valueSubstringMatch: '#003618',
    defaultValue: '#003618'
  },
  {
    id: 'g-theme-color-brand-4',
    valueSubstringMatch: '#00692f',
    defaultValue: '#00692f'
  },
  {
    id: 'g-theme-color-dark2',
    valueSubstringMatch: '#b10e1e',
    defaultValue: '#b10e1e'
  },
  {
    id: 'g-theme-color-dark3',
    valueSubstringMatch: '#2b8cc4',
    defaultValue: '#2b8cc4'
  },
  {
    id: 'g-theme-color-dark4',
    valueSubstringMatch: '#a1acb2',
    defaultValue: '#a1acb2'
  },
  {
    id: 'g-theme-color-dark5',
    valueSubstringMatch: '#454a4c',
    defaultValue: '#454a4c'
  },
  {
    id: 'g-theme-color-dark6',
    valueSubstringMatch: '#dee0e2',
    defaultValue: '#dee0e2'
  },
  {
    id: 'g-theme-color-dark7',
    valueSubstringMatch: '#171819',
    defaultValue: '#171819'
  },
  {
    id: 'g-theme-color-dark8',
    valueSubstringMatch: '#2e3133',
    defaultValue: '#2e3133'
  },
  {
    id: 'g-theme-color-dark9',
    valueSubstringMatch: '#1d8feb',
    defaultValue: '#1d8feb'
  },
  {
    id: 'g-theme-color-dark10',
    valueSubstringMatch: '#4c2c92',
    defaultValue: '#4c2c92'
  },
  {
    id: 'g-theme-color-dark11',
    valueSubstringMatch: '#28a197',
    defaultValue: '#28a197'
  },
  {
    id: 'g-theme-button-color',
    valueSubstringMatch: '#00823b',
    defaultValue: '#078766'
  },
  {
    id: 'g-theme-button-color-hover-focus',
    valueSubstringMatch: '#00682f',
    defaultValue: '#0c6c53'
  },
  {
    id: 'g-theme-button-color-secondary',
    valueSubstringMatch: '#dee0e2',
    defaultValue: '#d3d3d3'
  },
  {
    id: 'g-theme-button-color-secondary-hover-focus',
    valueSubstringMatch: '#c8cacb',
    defaultValue: '#b2b2b2'
  },
  {
    id: 'g-theme-button-color-secondary-box-shadow',
    valueSubstringMatch: '#858688',
    defaultValue: '#2a2a2a'
  },
  {
    id: 'g-theme-button-color-warning',
    valueSubstringMatch: '#b10e1e',
    defaultValue: '#b10e1e'
  },
  {
    id: 'g-theme-button-color-warning-hover-focus',
    valueSubstringMatch: '#8e0b18',
    defaultValue: '#900815'
  },
  {
    id: 'g-theme-button-color-warning-box-shadow',
    valueSubstringMatch: '#47060c',
    defaultValue: '#2a2a2a'
  },
  {
    id: 'g-theme-heading-font-weight',
    valueSubstringMatch: 'g-heading-font-weight',
    defaultValue: 'bold'
  }
];
