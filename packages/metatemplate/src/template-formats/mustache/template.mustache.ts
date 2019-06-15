import {
  TemplateInput,
  emptyTemplate,
  TemplateUsages,
  TemplatesById,
  FormatUsageResponse,
  TemplateUsageElement,
  UsageOptions,
  PRETTIER_LINE_WIDTH
} from "../../index";
import {
  TemplateAttribute,
  simpleUniqueKey,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize,
  parseDynamicKey,
  DynamicKey
} from "../../common";
import { uniq } from "lodash";
import prettier from "prettier";

const INDENT_WHITESPACE = "  ";

export default class Mustache {
  static id = "mustache";
  public dirname = "mustache";
  static isDefaultOption = true;

  data: string = "";
  template: TemplateInput;
  assignedDynamicKeys: string[];
  unescapedKeys: string[];

  constructor(template: TemplateInput = emptyTemplate) {
    this.template = template;
    this.data = "";
    this.assignedDynamicKeys = [];
    this.unescapedKeys = [];
  }

  wrapVar = (key: string): string => {
    return `{{${key}}}`;
  };

  ifVar = (
    needsPrecedingSpace: boolean,
    key: string,
    children: string
  ): string => {
    return `{{#${key}}}${needsPrecedingSpace ? " " : ""}${children}{{/${key}}}`;
  };

  renderAttribute = (attribute: TemplateAttribute, id: string): string => {
    // TODO: escape attribute values and keys?
    let attr = "";

    const isOmittedIfEmpty =
      attribute.isOmittedIfEmpty &&
      attribute.dynamicKeys &&
      attribute.dynamicKeys.length === 1;

    if (isOmittedIfEmpty) {
      attr += `{{#${attribute.dynamicKeys[0].key}}}\n${INDENT_WHITESPACE}`;
    }

    attr += `${attribute.key}="${attribute.value}`;

    if (attribute.dynamicKeys) {
      attr += attribute.dynamicKeys
        .map((dynamicKey, i) => {
          const needsPrecedingSpace =
            !!attribute.value || attribute.dynamicKeys.length > 1;
          switch (dynamicKey.type) {
            case "boolean": {
              return this.ifVar(
                needsPrecedingSpace,
                dynamicKey.key,
                dynamicKey.ifTrueValue || dynamicKey.key
              );
              break;
            }
            case "string": {
              return this.wrapVar(dynamicKey.key);
              break;
            }
            default: {
              if (Array.isArray(dynamicKey.type)) {
                // Because Mustache is "logic-less" we can't have
                // if (x === 1) { result1 } else if (x === 2) { result2 } endif;
                // we can only have truthy results, so we instead we use the fact
                // that the "=" character is a valid part of a variable name and
                // we make variables for each possible enumeration. So when
                // comparing a variable of "x" for a value of "1" we instead check
                // for a variable named "x=1" literally. So now the code looks like,
                // if (x=1) { result1 } endif; if(x=2) { result2 } endif;
                return dynamicKey.type
                  .map(enumOption => {
                    const enumerationKey = `${dynamicKey.key}=${
                      enumOption.name
                    }`;
                    return this.ifVar(
                      needsPrecedingSpace,
                      enumerationKey,
                      enumOption.value
                    );
                  })
                  .join("");
              }
              break;
            }
          }
        })
        .join(" ")
        .trim();
    } else {
      attr += attribute.value;
    }
    attr += `"\n`;
    if (isOmittedIfEmpty) {
      attr += `{{/${attribute.dynamicKeys[0].key}}}\n`;
    }
    return attr;
  };

  onElement = async ({
    tagName,
    attributes,
    isSelfClosing
  }: OnElement): Promise<string> => {
    this.data +=
      `<${tagName}\n` + // TODO: escape elementName?
      (attributes
        ? attributes
            .map((attribute: TemplateAttribute) => {
              return this.renderAttribute(attribute, this.template.id);
            })
            .join("")
        : "") +
      (isSelfClosing ? "/" : "") +
      ">\n"; // DEV NOTE: trailing whitespace to help Prettier linewrap
    return tagName;
  };

  onCloseElement = async ({ tagName }: OnCloseElement): Promise<void> => {
    this.data += `</${tagName}>\n`; // DEV NOTE: trailing whitespace to help Prettier linewrap
  };

  onText = async ({ text }: OnText): Promise<void> => {
    this.data += `${INDENT_WHITESPACE}${text}\n`;
  };

  onVariable = async ({ key }: OnVariable): Promise<void> => {
    this.unescapedKeys.push(key);
    this.data += `${INDENT_WHITESPACE}{{{${key}}}}\n`;
  };

  mustacheWarning = (): string => {
    return `{{! DEVELOPER NOTE: This template uses triple-bracket "{{{"\n    which disables HTML escaping.\n    Please ensure these variables are properly escaped:\n     - ${this.unescapedKeys.join(
      ",\n     - "
    )}.\n    The reason for this is to allow raw HTML, for values such as (eg) '<span lang="mi">Māori</span>'. }}\n\n`;
  };

  serialize = async ({ css }: OnSerialize): Promise<Object> => {
    const warning = this.unescapedKeys.length ? this.mustacheWarning() : "";
    const extname = "mustache";
    const files = {
      [`${this.dirname}/${this.template.id}.${extname}`]: `${warning}${
        this.data
      }`.trim()
    };
    return files;
  };

  registerDynamicKey = (key: string): string => {
    return simpleUniqueKey(key, this.assignedDynamicKeys);
  };

  getAssignedDynamicKeys = (): string[] => {
    return this.assignedDynamicKeys;
  };

  generateIndex = (filesArr: string[]): Object => {
    return {};
  };

  makeUsage = async (
    code: TemplateUsages,
    templatesById: TemplatesById,
    options: UsageOptions
  ): Promise<FormatUsageResponse> => {
    const imports = [`import Mustache from 'mustache';\n`];
    const mustacheImports = [];
    const templateVariables = {};
    const render = (aCode: TemplateUsageElement | string): string => {
      if (typeof aCode === "string" || aCode instanceof String) {
        return aCode as string;
      }
      const element: TemplateUsageElement = aCode;
      const isComponent = aCode.templateId.match(/[A-Z]/); // ie. is a Component reference not HTML

      if (!isComponent) {
        const hasChildren = !!(aCode.variables && aCode.variables.children);
        return `<${aCode.templateId} ${Object.keys(aCode.variables)
          .filter(key => key !== "children")
          .map(key => `${key}="${aCode.variables[key]}"`)
          .join(" ")}${
          hasChildren
            ? `>${
                Array.isArray(aCode.variables.children)
                  ? aCode.variables.children.map(render)
                  : aCode.variables.children.toString()
              }</${aCode.templateId}>`
            : "/>"
        }`;
      }

      const importPrefix =
        (options && options.importPrefix) || "@govtnz/ds/build/"; // TODO: Refactor this out so it's always config

      imports.push(
        `import ${element.templateId} from "${importPrefix}mustache/${
          element.templateId
        }.mustache";\n`
      );

      mustacheImports.push(element.templateId);

      const response = `\${Mustache.render(${
        element.templateId
      }, {${Object.keys(element.variables)
        .map(key => {
          const value = element.variables[key];
          // Because Mustache is "logic-less" we can't have
          // if (x === 1) { result1 } else if (x === 2) { result2 } endif;
          // we can only have truthy results, so we instead we use the fact
          // that the "=" character is a valid part of a variable name and
          // we make variables for each possible enumeration. So when
          // comparing a variable of "x" for a value of "1" we instead check
          // for a variable named "x=1" literally. So now the code looks like,
          // if (x=1) { result1 } endif; if(x=2) { result2 } endif;
          if (!templateVariables[element.templateId]) {
            templateVariables[element.templateId] = {};
            if (!templatesById[element.templateId]) {
              throw Error(
                `MetaTemplate: Unable to find "${
                  element.templateId
                }" in templatesById. This template should be provided.`
              );
            }
            templatesById[element.templateId].html.replace(
              /{{(.*?)}}/,
              (match, dynamicKeyString) => {
                const dynamicKey: DynamicKey = parseDynamicKey(
                  dynamicKeyString
                );
                if (Array.isArray(dynamicKey.type) || dynamicKey.ifTrueValue) {
                  templateVariables[element.templateId][
                    dynamicKey.key
                  ] = dynamicKey;
                }
                return match;
              }
            );
          }
          const enumerationKey = `${key}=${value}`;

          if (templateVariables[element.templateId][key]) {
            const enumTrue = `"${key}": true `;
            if (
              Array.isArray(templateVariables[element.templateId][key].type)
            ) {
              // Then we'll respond with that enumOption as true
              // using the `"key=value": true` syntax...
              const enumOptionTrue = `"${enumerationKey}": true,`;
              // ...but if that enumOption is within an attribute with
              // 'isOmittedIfEmpty' then we should pass in the key itself.
              return enumOptionTrue + enumTrue;
            } else {
              return enumTrue;
            }
          }
          let resp = `"${key}": \``;
          if (typeof value === "string") {
            resp += value;
          } else if (Array.isArray(value)) {
            resp += value.map(render).join("");
          }
          resp += "`";
          return resp;
        })
        .join(",\n")} })}`;

      return response;
    };

    const defaultBody = code.map(render).join("");
    const importsString = uniq(imports).join("") + "\n";
    const devNote = `// Developer note: ensure your ".mustache" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\n`;
    const devNote2 = `// The variables ${uniq(mustacheImports).join(
      ", "
    )} are all strings that are mustache templates.\n`;
    const allCode = `${devNote}${importsString}${devNote2}\n\nexport default \`${defaultBody}\`;`;

    const response = prettier.format(allCode, {
      parser: "babel",
      printWidth: PRETTIER_LINE_WIDTH
    });

    return {
      code: response
    };
  };
}
