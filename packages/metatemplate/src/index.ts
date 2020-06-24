import path from "path";
import { getBrowser } from "./browser";
import {
  serializeCSSMatches,
  mergeMatches,
  MatchedCSS,
} from "./css-sniff/css-sniff";
import jsxtojson from "jsx2json";
import {
  formatById,
  isString,
  getTemplateCSSRules,
  OnElement,
  OnCloseElement,
  OnText,
  OnVariable,
  OnSerialize,
  OnIf,
  OnCloseIf,
  DynamicKey as _DynamicKey,
  parseMtIf,
  EnumOption,
} from "./common";
import {
  TemplateAttributesArgs,
  getTemplateAttributes,
  NodeGetAttribute,
} from "./attributes";
import { uniqWith, isEqual } from "lodash";

const DEFAULT_OPTIONS: Options = {
  async: true,
  dom: "jsdom",
  log: false,
};

export async function makeTemplates(
  template: TemplateInput,
  formatIds?: string[],
  options?: Options | undefined
): Promise<Response> {
  const defaultFormats: string[] = Object.keys(formatById).filter(
    (id) => formatById[id].isDefaultOption
  );
  formatIds = formatIds || defaultFormats;

  const opts: Options = { ...DEFAULT_OPTIONS, ...options };
  if (opts.log) {
    console.info(
      `MetaTemplate: Using "${opts.dom}" for DOM with async:${opts.async} and these template(s) ${formatIds}`
    );
  }

  // Start a browser environment
  let browser = await getBrowser({ template }, { type: opts.dom });

  const chosenFormatIds: string[] =
    formatIds && formatIds.length === 1 && formatIds[0] === ALL_FORMATS
      ? Object.keys(formatById)
      : formatIds;

  const metaTemplates: TemplateOutput[] = await jobType(
    template,
    chosenFormatIds,
    browser.bodyNodes,
    opts
  );

  browser.dispose();

  if (opts.log) {
    console.log("\n\n");
    metaTemplates.forEach((mt) => {
      Object.keys(mt.files).forEach((mtPath) => {
        console.log(mtPath, "\n===========", "\n" + mt.files[mtPath], "\n");
      });
    });
  }

  return {
    metaTemplates,
    disposeAll: browser.disposeAll,
  };
}

async function jobType(
  template: TemplateInput,
  formatIds: string[],
  bodyNodes: ChildNode[],
  options: Options
): Promise<TemplateOutput[]> {
  if (options.async) {
    return await Promise.all(
      formatIds.map((formatId) =>
        generateFormat({ template, formatId, bodyNodes })
      )
    );
  } else {
    const result = [];
    for (let i = 0; i < formatIds.length; i++) {
      const formatId = formatIds[i];
      if (options.log) {
        console.info(`MetaTemplate: Generating ${formatId}`);
      }
      const format: TemplateOutput = await generateFormat({
        template,
        formatId,
        bodyNodes,
      });
      result.push(format);
    }
    return result;
  }
}

type GenerateFormatArgs = {
  template: TemplateInput;
  formatId: string;
  bodyNodes: ChildNode[];
};

export async function generateFormat({
  template,
  formatId,
  bodyNodes,
}: GenerateFormatArgs): Promise<TemplateOutput> {
  const templateFormat = formatById[formatId];
  if (!templateFormat) {
    throw Error(
      `Unrecognisedd templateFormat "${formatId}". Valid options are ${Object.keys(
        formatById
      ).join(", ")}.`
    );
  }

  const format: any = new templateFormat(template);

  let allCssMatches: MatchedCSS = {};

  for (let i = 0; i < bodyNodes.length; i++) {
    let childNode: ChildNode = bodyNodes[i];
    const walkArgs: WalkArgs = {
      node: childNode,
      format,
      template,
      cssMatches: allCssMatches,
    };
    const { cssMatches }: WalkResponse = await walk(walkArgs);
    allCssMatches = mergeMatches([allCssMatches, cssMatches]);
  }

  const cssString: string = serializeCSSMatches(allCssMatches);

  const hasMultipleRootNodes: boolean =
    bodyNodes.filter((childNode) => childNode.nodeType === 1).length > 1;
  const serializeArgs: OnSerialize = {
    css: cssString,
    hasMultipleRootNodes,
  };
  const files = await format.serialize(serializeArgs);

  const metaTemplate: TemplateOutput = {
    formatId,
    files,
  };

  return metaTemplate;
}

const walk = async (walkArgs: WalkArgs): Promise<WalkResponse> => {
  const { node, format, template, cssMatches } = walkArgs;
  let newAllCssMatches: MatchedCSS = cssMatches;
  let elementCSSMatches: MatchedCSS;
  switch (node.nodeType) {
    case 1: {
      // Element Node type
      const tagName = (node as HTMLElement).tagName.toLowerCase();

      if (tagName === "mt-variable") {
        let key: string = await NodeGetAttribute(node, "key");
        key = key.replace("?", ""); // will only replace one, but there should only be one
        format.registerDynamicKey(key, "node", true);
        const defaultValue = (node as HTMLElement).innerHTML;
        const variableArgs: OnVariable = {
          key,
          defaultValue,
        };
        format.onVariable(variableArgs);
      } else {
        let closingTagName = tagName;
        const isSelfClosing = !node.childNodes.length;
        if (tagName === "mt-if") {
          let key: string = await NodeGetAttribute(node, "key");
          const isOptional = key.includes("?");
          key = key.replace(/\?/g, ""); // will only replace one, but there should only be one
          let ifArgs: OnIf = {
            key,
            optional: false,
          };
          if (key.includes("=")) {
            ifArgs = parseMtIf(key);
            ifArgs.optional = isOptional;
            key = ifArgs.key;
            let options = Array.from(
              node.ownerDocument.querySelectorAll("mt-if")
            )
              .map(
                (node: HTMLElement): OnIf => {
                  return parseMtIf(node.getAttribute("key"));
                }
              )
              .filter((mtIf: OnIf): boolean => {
                return mtIf.key === ifArgs.key;
              })
              .map(
                (mtIf: OnIf): EnumOption => {
                  return {
                    name: mtIf.equalsString,
                    value: mtIf.equalsString,
                  };
                }
              );
            options = uniqWith(options, isEqual);
            key = format.registerDynamicKey(
              key,
              options,
              ifArgs.optional,
              tagName
            );
          } else {
            key = format.registerDynamicKey(key, "node", isOptional);
          }

          if (format.onIf) {
            format.onIf(ifArgs);
          }
        } else {
          const element: Element = node as Element;
          const tagName = element.tagName.toLowerCase();

          const templateArgs: TemplateAttributesArgs = {
            tagName,
            template,
            format,
            node: element,
          };
          const attributes = await getTemplateAttributes(templateArgs);

          elementCSSMatches = await getTemplateCSSRules(
            node,
            attributes,
            template
          );

          newAllCssMatches = mergeMatches([
            newAllCssMatches,
            elementCSSMatches,
          ]);

          const args: OnElement = {
            tagName,
            attributes,
            isSelfClosing,
            css: serializeCSSMatches(elementCSSMatches),
          };

          // get the closing tag name because it can change
          // when using (eg) Styled-Components
          closingTagName = await format.onElement(args);
        }
        if (!isSelfClosing) {
          const childNodes: Element[] = <Element[]>Array.from(node.childNodes);
          for (let i = 0; i < childNodes.length; i++) {
            const childNode = childNodes[i];
            const childWalkArgs: WalkArgs = {
              format: walkArgs.format,
              node: childNode,
              template,
              cssMatches: newAllCssMatches,
            };
            const { cssMatches: childCssMatches }: WalkResponse = await walk(
              childWalkArgs
            );

            newAllCssMatches = mergeMatches([
              newAllCssMatches,
              childCssMatches,
            ]);
          }
          if (tagName === "mt-if") {
            if (format.onCloseIf) {
              const closeArgs: OnCloseIf = {};
              await format.onCloseIf(closeArgs);
            }
          } else {
            const closeArgs: OnCloseElement = { tagName: closingTagName };
            await format.onCloseElement(closeArgs);
          }
        }
      }
      break;
    }
    case 3: {
      // Text Node type
      const args: OnText = {
        text: node.nodeValue,
      };
      await format.onText(args);
      break;
    }
  }
  return { cssMatches: newAllCssMatches };
};

export const makeIndexImports = ({
  fileKeys,
  cssVariables,
}: MakeIndexImports): Object => {
  // Generate an index file for JavaScript projects
  // that allows importing all files
  const byDir = fileKeys.reduce((byDir, key) => {
    const dirname = path.dirname(key);
    if (!byDir[dirname]) byDir[dirname] = [];
    byDir[dirname].push(key);
    return byDir;
  }, {});
  return Object.keys(byDir).reduce((byDirFiles, byDirKey) => {
    const templateGeneratorClass: any = formatById[byDirKey];
    let index = {};
    if (templateGeneratorClass) {
      const template: TemplateInput = {
        ...emptyTemplate,
        cssVariables,
      };
      const templateGenerator = new formatById[byDirKey](template);
      index = templateGenerator.generateIndex(byDir[byDirKey]);
    } else {
      console.info(
        `No generateIndex found for "${byDirKey}" in ${Object.keys(formatById)}`
      );
    }
    return {
      ...byDirFiles,
      ...index,
    };
  }, {});
};

export const emptyTemplate: TemplateInput = {
  id: "",
  html: "",
  css: "",
  cssVariables: [],
};

export const makeUsage = async (
  code: TemplateUsages,
  templates: TemplatesById,
  formatIds: string[],
  options?: UsageOptions | undefined
): Promise<FormatUsageExamples> => {
  const chosenFormatIds: string[] =
    formatIds && formatIds.length === 1 && formatIds[0] === ALL_FORMATS
      ? Object.keys(formatById)
      : formatIds;

  const usages: string[] = await Promise.all(
    chosenFormatIds.map(async (formatId) => {
      const TemplateFormat = formatById[formatId];
      const format: any = new TemplateFormat(emptyTemplate);
      if (format.makeUsage) {
        const usageResponse: FormatUsageResponse = await format.makeUsage(
          code,
          templates,
          options
        );
        return usageResponse.code;
      }
      return "";
    })
  );

  return chosenFormatIds.reduce((acc, formatId, index) => {
    acc[formatId] = usages[index];
    return acc;
  }, {});
};

export const jsxToUsageCode = async (jsx: string): Promise<TemplateUsages> => {
  const entry = (jsx: string) => {
    const document = jsxtojson(jsx, { useEval: false });

    const supportJSXProps = (props) => {
      // Working around a bug in jsx2json
      // https://github.com/stolksdorf/jsx2json/issues/2
      const keys = Object.keys(props);
      const newProps = {};
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];

        let value = props[key];

        if (key === "className") {
          key = "class";
        }

        if (
          typeof value === "string" &&
          value.startsWith("<") &&
          value.endsWith(">")
        ) {
          // Not a good check, but nothing is when we have to turn
          // a string into JSX and this seems to work.
          newProps[key] = entry(value);
        } else {
          newProps[key] = value;
        }
      }
      return newProps;
    };

    const walk = (node): TemplateUsage | string => {
      const allChildrenIsText =
        node.children && node.children.every((element) => isString(element));

      if (isString(node)) {
        return node.trim();
      } else {
        const templateUsage: TemplateUsage = {
          templateId: node.type,
          variables: {
            ...(node.props ? supportJSXProps(node.props) : {}),
            ...(node.children && node.children.length > 0
              ? {
                  children: allChildrenIsText
                    ? node.children.join("").trim()
                    : node.children.map(walk),
                }
              : {}),
          },
        };
        return templateUsage;
      }
    };

    const docArray = Array.isArray(document) ? document : [document];
    const templateUsages: TemplateUsages = docArray.map(walk);
    return templateUsages;
  };

  const jsObj = entry(jsx);
  return jsObj;
};

export const PRETTIER_LINE_WIDTH = 80;

export type TemplateUsage = TemplateUsageElement | string;

export type TemplateUsageElement = {
  templateId: string;
  variables: {
    [variableName: string]: TemplateUsage[] | string | boolean;
  };
};

export type TemplateUsages = TemplateUsage[];

export type TemplatesById = {
  [id: string]: TemplateInput;
};

export interface TemplateGenerator {} // FIXME

export const ALL_FORMATS = "*";

// List copied from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
// Using Object to derive TS https://stackoverflow.com/a/49529930
const inputTypesObj = {
  button: null,
  checkbox: null,
  image: null,
  radio: null,
  color: null,
  date: null,
  datetime: null,
  "datetime-local": null,
  email: null,
  file: null,
  hidden: null,
  month: null,
  number: null,
  password: null,
  range: null,
  reset: null,
  search: null,
  submit: null,
  tel: null,
  text: null,
  url: null,
  week: null,
};

export type TemplateInput = {
  id: string;
  html: string | undefined;
  css: string | undefined;
  cssVariables: CSSVariablePattern[];
};

export type CSSVariablePattern = {
  id: string;
  defaultValue: string;
  valueSubstringMatch: string;
};

export type TemplateOutput = {
  formatId: string;
  files: Object; // filename: data
};

type WalkArgs = {
  node: Document["childNodes"][number];
  format: any;
  template: TemplateInput;
  cssMatches: MatchedCSS;
};

type WalkResponse = {
  cssMatches: MatchedCSS;
};

export type MakeIndexImports = {
  fileKeys: string[];
  cssVariables?: CSSVariablePattern[] | undefined;
};

export type FormatUsageExamples = { [key: string]: string };

export type FormatUsageResponse = {
  code: string;
  imports?: string[] | undefined;
};

export type ExtensionOverride = {
  [key: string]: string;
};

export type UsageOptions = {
  flattenAttributeValues?: boolean | undefined;
  filenameExtensionOverride?: ExtensionOverride | undefined;
  tagNameReplacer?: Function | undefined;
  renderImport?: Function | undefined;
  importPrefix?: string | undefined; // TODO: Make this a required arg
};

export type Response = {
  metaTemplates: TemplateOutput[];
  disposeAll: Function;
};

export type Options = {
  async: boolean; // `true` seems good in Puppeteer but not tested properly in JSDOM
  dom: "jsdom" | "puppeteer";
  log: boolean;
};

export type DynamicKey = _DynamicKey;

export type CalculatedDynamicKey = {
  key: string;
  expression: string /* It's a JavaScript expression...
                        Assumes being run in the context of a return statement that
                        is given 'dynamicKeys' of non-calculated dynamicKeys, ie:
                        assuming a "textValue" dynamicKey a calculated dynamicKey
                        "textValueLength" might be made,
                            { key: 'textValueLength', expression: 'dK.textValue.length' }
                        because that expression will run in the context of,
                            function ( dK ) {
                              return dk.textValue.length
                            }
                        The expression can be any valid Javascript,
                            { key: 'epochAtRender', expression: 'Date.now()' }
                        
                        
  */;
};
