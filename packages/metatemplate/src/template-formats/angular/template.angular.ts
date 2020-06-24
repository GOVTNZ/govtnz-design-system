import { TemplateFormat } from "../template-format";
import { TemplateInput, emptyTemplate } from "../../index";
import prettier from "prettier";
import { PRETTIER_LINE_WIDTH } from "../../index";
import {
  TemplateAttribute,
  simpleUniqueKey,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize,
  DynamicKeyType
} from "../../common";

export type Options = {};

const defaultOptions = {};

export default class Angular implements TemplateFormat {
  static id = "angular";
  public dirname = "angular";
  static isDefaultOption = false;

  template: string;
  options: Options;
  inputs: string[];
  assignedDynamicKeys: TemplateFormat["assignedDynamicKeys"];

  _template: TemplateInput;
  script: string;
  style: string;

  constructor(
    template: TemplateInput = emptyTemplate,
    options: Options = defaultOptions
  ) {
    this._template = template;
    this.options = options;
    this.assignedDynamicKeys = {};
    this.template = "";
    this.inputs = [];
    this.script = "";
    this.style = "";
  }

  onElement = async ({
    tagName,
    attributes,
    isSelfClosing
  }: OnElement): Promise<string> => {
    this.template +=
      `\n<${tagName}` + // TODO: escape elementName?
      (attributes && attributes.length > 0
        ? " " +
          attributes
            .map(
              // TODO: escape attributes?
              (attribute: TemplateAttribute) =>
                this.renderAttribute(tagName, attribute, this.options)
            )
            .join(" ")
        : "") +
      (isSelfClosing ? "/" : "") +
      ">\n"; // DEV NOTE: trailing whitespace to help Prettier linewrap
    return tagName;
  };

  renderAttribute = (
    tagName: string,
    attribute: TemplateAttribute,
    options: Options
  ): string => {
    const attr = attribute;

    let attrValue = "";

    if (attr.dynamicKeys) {
      attrValue = attr.value ? attr.value : "";
      let hasPrecedingValues = attrValue.length > 0;

      const needsFullOmitWrapper =
        attr.isOmittedIfEmpty &&
        (attrValue.length || attr.dynamicKeys.length >= 2);

      const fallback =
        attr.isOmittedIfEmpty && attr.dynamicKeys.length === 1
          ? "undefined"
          : '""';

      attrValue += attr.dynamicKeys
        .map((dynamicKey, index) => {
          if (index >= 1) {
            hasPrecedingValues = true;
          }
          const A_SPACE = " ";
          const spacer = hasPrecedingValues ? `"${A_SPACE}" + ` : "";

          if (dynamicKey.ifTrueValue) {
            if (attr.dataType !== "string") {
              return `{{${dynamicKey.key}}}`;
            }
            return `{{${dynamicKey.key} ? "${
              hasPrecedingValues ? A_SPACE : ""
            }${dynamicKey.ifTrueValue}" : ${fallback}}}`;
          } else if (Array.isArray(dynamicKey.type)) {
            if (attr.isOmittedIfEmpty && !needsFullOmitWrapper) {
              return `{{constants.${dynamicKey.key}[${dynamicKey.key}]}}`;
            }
            return `{{constants.${dynamicKey.key}[${dynamicKey.key}] !== undefined ? ${spacer} constants.${dynamicKey.key}[${dynamicKey.key}] : ${fallback}}}`;
          } else {
            if (
              ["function", "boolean"].includes(dynamicKey.type) || // if it's a datatype that needs to be expressed in React as attr={false} then serialize it differently and don't provide a fallback default
              (attr.isOmittedIfEmpty &&
                (attrValue.length || attr.dynamicKeys.length === 1)) // if it's a datatype whose value should be `undefined` when its variable isn't set then
            ) {
              // although this is in a template string that particular
              // syntax will be removed in 'TEMPLATE STRING REMOVAL' below
              return `{{${dynamicKey.key}}}`;
            } else {
              return `{{${dynamicKey.key} ? ${spacer} ${dynamicKey.key} : ""}}`;
            }
          }
        })
        .join(""); // No spaces between dynamicKeys because each one renders whitespace as necessary
      attrValue = attrValue.trim();

      attrValue = `"${attrValue}"`;
    }

    const attrString = `${attr.key}=${attrValue}`;

    return attrString;
  };

  onCloseElement = async ({ tagName }: OnCloseElement): Promise<void> => {
    this.template += `\n\n</${tagName}>\n\n`; // DEV NOTE: leading and trailing whitespace to help Prettier linewrap
  };

  onText = async ({ text }: OnText): Promise<void> => {
    this.template += text;
  };

  onVariable = async ({ key, defaultValue }: OnVariable): Promise<void> => {
    this.template += `<slot${
      key !== "children" ? ` name="${key}"` : ""
    }></slot>`;
  };

  renderInputs = (key: string): string => {
    let typing: string[];
    let alreadyDefinedTheUndefinedType = false;
    const def = this.assignedDynamicKeys[key];
    switch (def.type) {
      case "string": {
        typing = ["string"];
        break;
      }
      case "boolean": {
        typing = ["boolean"];
        break;
      }
      case "number": {
        typing = ["number"];
        break;
      }
      case "node": {
        alreadyDefinedTheUndefinedType = true;
        // React.ReactNode includes `undefined` already
        typing = ["React.ReactNode"];
        break;
      }
      default: {
        if (Array.isArray(def.type)) {
          typing = def.type.map(option => `"${option.name || option}"`);
        } else {
          typing = ["any"];
        }
        break;
      }
    }
    if (def.optional && !alreadyDefinedTheUndefinedType) {
      typing.push("undefined");
    }
    return `@Input() ${key}: ${typing.join(" | ")};`;
  };

  serialize = async ({ css }: OnSerialize): Promise<Object> => {
    const templateFilename = `${this.dirname}/${this._template.id}.ts`;
    let script = `import { Component, Input } from '@angular/core';
    @Component({
      selector: 'g-${this._template.id}',
      template: \`${this.template}\`
    })
    export class AppComponent {
      ${Object.keys(this.assignedDynamicKeys)
        .map(this.renderInputs)
        .join("\n")}
      title = '${this._template.id}';
    }
    `;

    script = prettier.format(script, {
      parser: "typescript",
      printWidth: PRETTIER_LINE_WIDTH
    });

    return {
      [templateFilename]: script
    };
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
}
