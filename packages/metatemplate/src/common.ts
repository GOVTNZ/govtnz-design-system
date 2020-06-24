import path from "path";
import { getCSSMatches, MatchedCSS } from "./css-sniff/css-sniff";
import { TemplateInput } from "./index";
import {
  NodeAddClass,
  NodeSetAttribute,
  DynamicEnumerationTypes,
} from "./attributes";

import templateHtml from "./template-formats/html/template.html";
import templateCss from "./template-formats/css/template.css";
import templateMustache from "./template-formats/mustache/template.mustache";
import templateTwigEmbed from "./template-formats/twig-embed/template.twig-embed";
import templateReactJs from "./template-formats/react-js/template.react-js";
import templateReactJsStyledComponents from "./template-formats/react-js-styled-components/template.react-js-styled-components";
import templateReactTs from "./template-formats/react-ts/template.react-ts";
import templateReactTsStyledComponents from "./template-formats/react-ts-styled-components/template.react-ts-styled-components";
import templateSilverStripeComponents from "./template-formats/silverstripe-components/template.silverstripe-components";
import templateVueJs from "./template-formats/vue-js/template.vue-js";
import templateVueTs from "./template-formats/vue-ts/template.vue-ts";
import templateAngular from "./template-formats/angular/template.angular";
import templateScss from "./template-formats/scss/template.scss";

export const formatById = {
  [templateMustache.id]: templateMustache,
  [templateSilverStripeComponents.id]: templateSilverStripeComponents,
  [templateReactJs.id]: templateReactJs,
  [templateReactTs.id]: templateReactTs,
  [templateReactJsStyledComponents.id]: templateReactJsStyledComponents,
  [templateReactTsStyledComponents.id]: templateReactTsStyledComponents,
  [templateVueJs.id]: templateVueJs,
  [templateVueTs.id]: templateVueTs,
  [templateScss.id]: templateScss,
  [templateHtml.id]: templateHtml,
  [templateCss.id]: templateCss,
  [templateTwigEmbed.id]: templateTwigEmbed,
  [templateAngular.id]: templateAngular,
} as const;

export const simpleUniqueKey = (
  key: string,
  assignedDynamicKeys: string[]
): string => {
  // Ensures prop names are unique by keeping a list of previously
  // assigned keys in assignedDynamicKeys.
  // This is a 'Simple' one that just increments until it finds an unused
  // key.
  let dynamicKey = key;
  let counter = 0;
  do {
    counter++;
    dynamicKey = `${key}${counter > 1 ? counter : ""}`;
  } while (assignedDynamicKeys.indexOf(dynamicKey) !== -1);
  assignedDynamicKeys.push(dynamicKey);
  return dynamicKey;
};

export const find = (
  attributes: TemplateAttribute[],
  key: string
): TemplateAttribute | undefined => {
  return attributes.find((attribute) => attribute.key === key);
};

type AttributeValue = (string | DynamicKey)[];

export const parseAttributeValue = (value: string): AttributeValue => {
  const response: AttributeValue = [];
  let remaining: string = value;
  const start = "{{";
  const end = "}}";

  while (remaining.length) {
    const startIndex = remaining.indexOf(start);

    if (startIndex === -1) {
      // no DynamicKey, just string remainings
      response.push(remaining);
    } else if (startIndex === 0) {
      // a DynamicKey
      const endIndex = remaining.indexOf(end, startIndex);
      const dkString = remaining.substring(start.length, endIndex);
      const dynamicKey: DynamicKey = parseDynamicKey(dkString);
      remaining = remaining.substring(endIndex + end.length);
    } else {
      // string before another DynamicKey
      response.push(remaining.substring(0, startIndex));
      remaining = remaining.substring(startIndex);
    }
  }
  return response;
};

export const parseDynamicKey = (dk: string): DynamicKey => {
  let dynamicKey: DynamicKey;
  // Key

  const separatorIndex = dk.indexOf(SEPARATOR);
  let keySegment = separatorIndex === -1 ? dk : dk.substring(0, separatorIndex);
  keySegment = keySegment.trim();
  const isOptional = keySegment.endsWith(OPTIONAL);
  if (isOptional) {
    keySegment = keySegment.replace(optionalRegexp, "");
  }

  if (separatorIndex === -1) {
    // chance to exit early
    dynamicKey = {
      key: keySegment,
      optional: isOptional,
      type: "string",
    };
    return dynamicKey;
  }

  const options: EnumOption[] = dk
    .substring(separatorIndex + SEPARATOR.length)
    .split(ENUM_SEPARATOR)
    .map(
      (option): EnumOption => {
        // `option` is a string that looks like either,
        //    " valueThatIsAlsoName ", or
        //    " value as friendlyName "
        // so when split by " as " it will have either
        // 1 or 2 array items.
        const parts: string[] = option.split(" as ");
        const enumOption: EnumOption = {
          value: parts[0].trim(),
          name: parts.length === 2 ? parts[1].trim() : parts[0].trim(),
        };
        return enumOption;
      }
    );

  const dynamicKeyType: DynamicKeyType =
    options.length === 1 ? "boolean" : "string";

  // Value
  dynamicKey = {
    key: keySegment,
    optional: isOptional,
    type: options.length === 1 ? "boolean" : options,
    ifTrueValue: dynamicKeyType === "boolean" ? options[0].value : undefined,
  };

  return dynamicKey;
};

export const serializeTemplateAttribute = (
  attribute: TemplateAttribute
): string => {
  let value = attribute.value || "";
  if (attribute.dynamicKeys) {
    if (value.length) {
      value += " ";
    }
    attribute.dynamicKeys.forEach((dynamicKey: DynamicKey) => {
      value += `{{ `;
      value += dynamicKey.key;
      if (dynamicKey.optional) {
        value += "?";
      }
      if (dynamicKey.type === "string") {
        // nothing
      } else if (Array.isArray(dynamicKey.type)) {
        value += " : ";
        value += dynamicKey.type
          .map((enumOption: EnumOption) => {
            return `${enumOption.value} as ${enumOption.name}`;
          })
          .join(" | ");
      } else if (dynamicKey.ifTrueValue) {
        value += ` : ${dynamicKey.ifTrueValue}`;
      } else {
      }
      value += " }}";
    });
  }
  value = value.trim();
  return value;
};

export const isString = (maybeString: any): boolean => {
  return typeof maybeString === "string" || maybeString instanceof String;
};

export const escapeTextForRegex = (text: string) => {
  return text.replace(/([()[{*+.$^\\|?])/g, "\\$1");
};

export type TemplateAttribute = {
  key: string;
  value: string;
  dynamicKeys?: DynamicKey[] | undefined; // the template's dynamic fields variable name (ie prop name in React)
  isValueless?: boolean | undefined; // should be generated as a valueless attribute if possible ie "<select multiple>"
  isOmittedIfEmpty?: boolean | undefined; // whether attribute should be ommited if not given a value. For example, the id attribute in <h1 id={idValue}> should be omitted if idValue variable wasn't set.
  dataType: AttributeDataType;
};

export type DynamicKey = {
  key: string;
  optional: boolean;
  type: DynamicKeyType;
  ifTrueValue?: string;
  defaultValue?: any;
};

export type DynamicKeyType =
  | "string"
  | "boolean"
  | "node"
  | "reference"
  | "function"
  | "number"
  | DynamicEnumerationTypes
  | EnumOption[];

export type EnumOption = {
  value: string;
  name: string;
};

// "string" and "boolean" are simple attribute value types,
// but in some template formats we also need to pass in
// references to variables, ie in React <img src={ImgRef}>
export type AttributeDataType = "string" | "boolean" | "reference" | "function";

const SEPARATOR = ":";
const ENUM_SEPARATOR = "|";
const OPTIONAL = "?";

const optionalRegexp = new RegExp(`${escapeTextForRegex(OPTIONAL)}$`); // regex anchored to end of string

export const sleep = (duration_ms: number) =>
  new Promise((resolve) => setTimeout(resolve, duration_ms));

export const fileToUri = (filePath: string): string => {
  let pathName = path.resolve(filePath).replace(/\\/g, "/");

  if (pathName[0] !== "/") {
    // Windows
    pathName = "/" + pathName;
  }

  return encodeURI("file://" + pathName);
};

export const getTemplateCSSRules = async (
  node: any,
  attributes: TemplateAttribute[],
  template: TemplateInput
): Promise<MatchedCSS> => {
  // if (node.matchedCSS) {
  //   return node.matchedCSS;
  // }
  const options = {
    document: node.ownerDocument,
    ignoreChildren: true,
  };

  let matchedCSS = await getCSSMatches([node], options);

  await Promise.all(
    attributes.map(async (attribute) => {
      if (!attribute.dynamicKeys || attribute.dynamicKeys.length === 0) return;
      await Promise.all(
        attribute.dynamicKeys.map(async (dynamicKey) => {
          switch (dynamicKey.type) {
            case "boolean": {
              if (dynamicKey.key === "class") {
                const restore = await NodeAddClass(
                  node,
                  dynamicKey.ifTrueValue
                );
                matchedCSS = await getCSSMatches([node], options, matchedCSS);
                // await restore();
              } else {
                const restore = await NodeSetAttribute(
                  node,
                  attribute.key,
                  dynamicKey.ifTrueValue
                );
                matchedCSS = await getCSSMatches([node], options, matchedCSS);
                // await restore();
              }
              break;
            }
            default: {
              if (Array.isArray(dynamicKey.type)) {
                if (dynamicKey.key === "class") {
                  // Just add them all... don't support not(.class) rules for now
                  // FIXME: add more variations
                  const restores = await Promise.all(
                    dynamicKey.type.map(async (aType) => {
                      return await NodeAddClass(node, aType.value);
                    })
                  );
                  matchedCSS = await getCSSMatches([node], options, matchedCSS);
                  // await Promise.all(restores.map(restore => restore()));
                } else {
                  const restores = await Promise.all(
                    dynamicKey.type.map(async (aType) => {
                      const restore = await NodeSetAttribute(
                        node,
                        attribute.key,
                        aType.value
                      );
                      matchedCSS = await getCSSMatches(
                        [node],
                        options,
                        matchedCSS
                      );
                      return restore;
                    })
                  );
                  // await Promise.all(restores.map(restore => restore()));
                }
              }
              break;
            }
          }
        })
      );
    })
  );
  // node.matchedCSS = matchedCSS;
  return matchedCSS;
};

export const VENDOR_CSS_PROPERTIES_WITH_GENERIC_NAMES = [
  // Initially the approach was to remove properties starting with
  //     /^(-moz-|-webkit-)/
  // on the assumption that AutoPrefixer (a typical library used in
  // most builds, and in Styled-Components) would add them again,
  // so these vendor-prefixed properties were redundant, however
  // there are some vendor-specific properties
  // that don't have generic names so now we're removing only known
  // properties that have generic names.
  //
  // TODO: Apply this to Sass too (but not CSS).
  //
  // TODO: See if AutoPrefixer/someone publishes a list of these so
  // we don't have to maintain it.
  "-webkit-box-orient",
  "-webkit-box-direction",
  "-webkit-box-flex",
];

export const parseMtIf = (key: string): OnIf => {
  const optional = key.includes("?");
  key = key.replace(/\?/, "");
  let comparison = undefined;
  let equalsString = undefined;
  if (key.includes("=")) {
    comparison = key.includes("!=") ? "!=" : "=";
    equalsString = key.substring(key.indexOf("=") + 1);
    key = key.substring(0, key.indexOf("=")).replace("!", "");
  }
  return {
    key,
    optional,
    comparison,
    equalsString,
  };
};

export type OnElement = {
  tagName: string;
  attributes?: TemplateAttribute[];
  css?: string;
  isSelfClosing: boolean;
};

export type OnCloseElement = {
  tagName: string;
};

export type OnText = {
  text: string;
};

export type OnVariable = {
  key: string;
  defaultValue: string;
};

export type OnSerialize = {
  css: string;
  hasMultipleRootNodes: boolean;
};

export type OnIf = {
  key: string;
  optional: boolean;
  comparison?: "=" | "!=";
  equalsString?: string;
};

export type OnCloseIf = {};
