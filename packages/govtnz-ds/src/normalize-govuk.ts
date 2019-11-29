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
    calculatedDynamicKeys
  };
};
