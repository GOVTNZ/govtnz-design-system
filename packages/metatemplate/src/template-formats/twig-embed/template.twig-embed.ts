import { TemplateFormat } from "../template-format";
import {
  TemplateInput,
  emptyTemplate,
  TemplateUsages,
  TemplatesById,
  FormatUsageResponse,
  TemplateUsageElement,
  UsageOptions,
} from "../../index";
import {
  TemplateAttribute,
  DynamicKeyType,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize,
} from "../../common";

const INDENT_WHITESPACE = "  ";

export default class TwigEmbed implements TemplateFormat {
  static id = "twig-embed";
  public dirname = "twig-embed";
  static isDefaultOption = true;

  data: string = "";
  template: TemplateInput;
  assignedDynamicKeys: TemplateFormat["assignedDynamicKeys"];
  unescapedKeys: string[];

  constructor(template: TemplateInput = emptyTemplate) {
    this.template = template;
    this.data = "";
    this.assignedDynamicKeys = {};
    this.unescapedKeys = [];
  }

  wrapVar = (key: string, isAttribute: boolean): string => {
    return `{{ ${key} | escape('${isAttribute ? "html_attr" : "html"}') }}`;
  };

  ifVar = (
    needsPrecedingSpace: boolean,
    key: string,
    children: string
  ): string => {
    return `{% if ${key} %}${
      needsPrecedingSpace ? " " : ""
    }${children}{% endif %}`;
  };

  renderAttribute = (attribute: TemplateAttribute, id: string): string => {
    // TODO: escape attribute values and keys?
    let attr = "";

    const isOmittedIfEmpty =
      attribute.isOmittedIfEmpty &&
      attribute.dynamicKeys &&
      attribute.dynamicKeys.length === 1;

    // if (isOmittedIfEmpty) {
    //   attr += `{{#${attribute.dynamicKeys[0].key}}}\n${INDENT_WHITESPACE}`;
    // }

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
            case "A_TARGET":
            case "ARIA_CURRENT":
            case "string": {
              return this.wrapVar(dynamicKey.key, true);
              break;
            }
            default: {
              if (Array.isArray(dynamicKey.type)) {
                let response = `{% if `;
                response += dynamicKey.type
                  .map(
                    (enumOption) =>
                      `${dynamicKey.key} == "${enumOption.name}" %}${enumOption.value}{%`
                  )
                  .join(" elseif ");
                response += " endif %}";

                return response;
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
    // if (isOmittedIfEmpty) {
    //   attr += `{{/${attribute.dynamicKeys[0].key}}}\n`;
    // }
    return attr;
  };

  onElement = async ({
    tagName,
    attributes,
    isSelfClosing,
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

  onVariable = async ({ key, defaultValue }: OnVariable): Promise<void> => {
    this.unescapedKeys.push(key);
    this.data += `{% block ${key} %}${defaultValue}{% endblock %}\n`;
  };

  serialize = async ({ css }: OnSerialize): Promise<Object> => {
    const files = {
      [`${this.dirname}/${this.template.id}.html.twig`]: this.data.trim(),
    };
    return files;
  };

  registerDynamicKey = (
    key: string,
    type: DynamicKeyType,
    optional: boolean
  ): string => {
    this.assignedDynamicKeys[key] = { type, optional };
    return key;
  };

  generateIndex = (filesArr: string[]): Object => {
    return {};
  };

  makeUsage = async (
    code: TemplateUsages,
    templatesById: TemplatesById,
    options: UsageOptions
  ): Promise<FormatUsageResponse> => {
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
          .filter((key) => key !== "children")
          .map((key) => `${key}="${aCode.variables[key]}"`)
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

      let response = `{% embed "${element.templateId}.html.twig" `;

      let withObj = {};
      let blockObj = {};

      Object.keys(element.variables).forEach((key) => {
        const value = element.variables[key];
        if (Array.isArray(value)) {
          blockObj[key] = value;
        } else {
          withObj[key] = value;
        }
      });

      const withObjKeys = Object.keys(withObj);
      if (withObjKeys.length > 0) {
        response +=
          " with " +
          "{" +
          withObjKeys.map((key) => `'${key}':'${withObj[key]}'`).join(", ") +
          "} only ";
      }
      response += "%}";

      response += Object.keys(blockObj)
        .map((key) => {
          const value = blockObj[key];
          return (
            `{% block ${key} %}` +
            value.map(render).join("\n") +
            "{% endblock %}"
          );
        })
        .join("");
      response += `{% endembed %}`;

      return response;
    };

    const allCode = code.map(render).join("");

    return {
      code: allCode,
    };
  };
}
