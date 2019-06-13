import path from "path";
import prettier from "prettier";
import cssParser from "postcss-safe-parser";
import splitCssSelector from "split-css-selector";
import {
  TemplateInput,
  emptyTemplate,
  TemplateUsage,
  TemplateUsages,
  TemplatesById,
  PRETTIER_LINE_WIDTH,
  FormatUsageResponse,
  UsageOptions
} from "../../index";
import {
  TemplateAttribute,
  DynamicKeyType,
  simpleUniqueKey,
  EnumOption,
  DynamicKey,
  VENDOR_CSS_PROPERTIES_WITH_GENERIC_NAMES,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnIf,
  OnCloseIf,
  OnText,
  OnSerialize
} from "../../common";
import { camelCase, uniq } from "lodash";

export type Options = {
  language: "javascript" | "typescript" | "component-and-imports";
  css: "styled-components" | "import-css" | "none";
};

const defaultOptions: Options = {
  language: "typescript",
  css: "styled-components"
};

export type RenderReactComponent = {
  render: string;
};

type AssignedDynamicDefsByKey = {
  [key: string]: { type: DynamicKeyType; optional: boolean };
};

// DEVELOPER NOTE
// I once tried refactoring this file into two distinct
// React-TS and React-TS-Styled-Components files, but
// the results weren't great.
//
// When separate they were (at the time obv):
// react-ts: 332 lines
// react-ts-styled-components: 486 lines
//
// When combined they were
// both in one file: 513 lines
//
// There was significant code duplication between them, so
// then the obvious question was deciding how to share
// code/logic.
//
// I could have had a base React-TS class and extended that
// for React-TS-Styled-Components and ensured certain functions
// were overriden correctly etc., but that's a bit of
// coordination between classes, and it forces functions (and
// therefore passing variables) as abstraction which is
// a bit annoying, and I felt it was simpler to just have
// if/else branches.
//
// (Feel free to prototype it if you think it can be cleaner the
// classy way though...)

export default class ReactTsStyledComponents {
  static id = "react-ts-styled-components";
  public dirname = "react-ts-styled-components";
  static isDefaultOption = true;

  template: TemplateInput;
  options: Options;
  render: string; // The body of the render function code
  style: string; // Output code for Styled Components
  constants: { [key: string]: any }; // Output code for any enumerations (friendly name to value mappings).
  imports: string[];
  importNames: string[];
  styleKeys: string[];
  assignedDynamicKeys: string[];
  assignedDynamicDefsByKey: AssignedDynamicDefsByKey;

  constructor(
    template: TemplateInput = emptyTemplate,
    options: Options = defaultOptions
  ) {
    this.template = template;
    this.options = options;
    this.render = "";
    this.style = "";
    this.constants = {};
    this.styleKeys = [];
    this.imports = [];
    this.importNames = [];
    this.assignedDynamicKeys = [];
    this.assignedDynamicDefsByKey = {};
  }

  renderAttribute = (
    tagName: string,
    attribute: TemplateAttribute,
    options: Options
  ): string => {
    const attr: TemplateAttribute = {
      ...attribute,
      key: this.reactKeyTransform(attribute.key)
    };
    // TODO: escape attribute values and keys

    let attrValue = "";

    if (attr.dynamicKeys) {
      if (attribute.key === "style") {
        if (attribute.value.includes("{{")) {
          // FIXME: allow ...spread override for any dynamicKeys in style="", rather than ignoring them
          console.warn(
            `WARNING: Ignoring dynamic style="${attribute.value}" override.`
          );
        }
        const values = attribute.value.split(";"); // FIXME: Use proper inline CSS splitter so we don't get caught by escaped ";" in the middle of properties like `content: ";";`
        const styleObj = {};
        values.forEach(value => {
          const colonIndex = value.indexOf(":"); // FIXME: Use proper CSS property string splitter.
          const propertyName = value.substring(0, colonIndex);
          const propertyValue = value.substring(colonIndex + 1);
          if (
            colonIndex !== -1 &&
            propertyName.trim() &&
            propertyValue.trim()
          ) {
            // TODO: Verify that all style properties written as
            // kebab-case http://wiki.c2.com/?KebabCase
            // can be converted to camelCase http://wiki.c2.com/?CamelCase
            // ie. text-align -> textAlign
            // because there are probably edge-cases.
            styleObj[camelCase(propertyName)] = propertyValue.trim();
          }
        });
        attrValue += `{${JSON.stringify(styleObj)}}`;
      } else {
        attrValue = attr.value ? attr.value : "";
        let hasPrecedingValues = attrValue.length > 0;

        const needsFullOmitWrapper =
          attr.isOmittedIfEmpty &&
          (attrValue.length || attr.dynamicKeys.length >= 2);

        const fallback =
          attr.isOmittedIfEmpty && attr.dynamicKeys.length === 1
            ? "undefined"
            : '""';

        const typeCoersion =
          this.options.language === "typescript" && typeCoersions[attr.key]
            ? ` as ${typeCoersions[attr.key]}`
            : "";

        attrValue += attr.dynamicKeys
          .map((dynamicKey, index) => {
            if (index >= 1) {
              hasPrecedingValues = true;
            }
            const A_SPACE = " ";
            const spacer = hasPrecedingValues ? `"${A_SPACE}" + ` : "";

            if (dynamicKey.ifTrueValue) {
              if (attr.dataType !== "string" || forceAttributeAsRef[attr.key]) {
                return `$\{${dynamicKey.key}${typeCoersion}}`;
              }
              return `$\{${dynamicKey.key} ? "${
                hasPrecedingValues ? A_SPACE : ""
              }${dynamicKey.ifTrueValue}" : ${fallback}}`;
            } else if (Array.isArray(dynamicKey.type)) {
              this.constants[dynamicKey.key] = {};
              dynamicKey.type.forEach(option => {
                this.constants[dynamicKey.key][option.name] = option.value;
              });
              if (attr.isOmittedIfEmpty && !needsFullOmitWrapper) {
                return `$\{constants.${dynamicKey.key}[${
                  dynamicKey.key
                }]${typeCoersion}}`;
              }
              return `$\{constants.${dynamicKey.key}[${
                dynamicKey.key
              }] !== undefined ? ${spacer} constants.${dynamicKey.key}[${
                dynamicKey.key
              }] : ${fallback}}`;
            } else {
              if (
                ["function", "boolean"].includes(dynamicKey.type) || // if it's a datatype that needs to be expressed in React as attr={false} then serialize it differently and don't provide a fallback default
                (attr.isOmittedIfEmpty &&
                  (attrValue.length || attr.dynamicKeys.length === 1)) // if it's a datatype whose value should be `undefined` when its variable isn't set then
              ) {
                // although this is in a template string that particular
                // syntax will be removed in 'TEMPLATE STRING REMOVAL' below
                return `$\{${dynamicKey.key}}`;
              } else {
                return `$\{${dynamicKey.key} ? ${spacer} ${
                  dynamicKey.key
                } : ""}`;
              }
            }
          })
          .join(""); // No spaces between dynamicKeys because each one renders whitespace as necessary
        attrValue = attrValue.trim();

        // if it's a template string including dynamic props
        const isTemplateString = attrValue.includes("${");

        if (attr.dataType !== "string" || isTemplateString) {
          if (isTemplateString) {
            if (!attr.value && attr.dynamicKeys.length === 1) {
              //
              // TEMPLATE STRING REMOVAL
              //
              // If there was no default value and only a single dynamicKey
              // then we don't need to put the expression into a template string
              // we can convert from:
              //   attr={`${test ? "thing" : ""}`}
              // to,
              //   attr={test ? "thing" : ""}
              attrValue = attrValue.replace(/^\${/, "").replace(/}$/, "");
              attrValue = `{${attrValue}}`;
            } else {
              attrValue = `{\`${attrValue}\`}`;
            }
          } else if (
            attr.dataType !== "string" ||
            forceAttributeAsRef[attr.key]
          ) {
            // non-string
            if (attr.dataType === "boolean") {
              attrValue = (!!attrValue).toString();
            }
            attrValue = `{${attrValue}}`;
          }
          if (needsFullOmitWrapper) {
            const theIf = attr.dynamicKeys
              .map(dynamicKey => `${dynamicKey.key} !== undefined`)
              .join(" || ");
            attrValue = `{${theIf} ? ${attrValue
              .replace(/^{/, "")
              .replace(/}$/, "")} : undefined}`;
          }
        } else {
          if (attr.dataType !== "string" || forceAttributeAsRef[attr.key]) {
            attrValue = `{${attrValue}}`;
          } else {
            // conventional string attribute value

            attrValue = `"${attrValue}"`;
          }
        }
      }
    } else {
      if (attr.key === "style") {
        console.warn(
          `WARNING: Ignoring style="${
            attribute.value
          }" string literal. Not yet supported.`
        );
        attrValue = `{{}}`; // FIXME: parse inline style="" value and convert to React-style Object, and allow ...spread override too.
      } else if (forceAttributeAsRef[attr.key]) {
        attrValue = `{${attr.value}}`;
      } else {
        attrValue = `"${attr.value}"`;
      }
    }

    const attrString = ` ${attr.key}=${attrValue}`;

    return attrString;
  };

  renderStyledComponentRules = async (
    cssString: string,
    classAttribute: TemplateAttribute
  ): Promise<StyledComponentsResponse> => {
    const usedProps: string[] = [];
    const renderCSS = node => {
      let css = "";

      const getPseudoes = (selector: string): string[] => {
        return splitCssSelector(selector)
          .map(selector => selector.replace(/:not\(.*?\)/gi, ""))
          .filter(selector => selector.includes(":"))
          .map(selector => selector.substring(selector.indexOf(":")).trim());
      };

      const isAtRule = node.type === "atrule";
      let isWrapped: boolean = isAtRule;
      const pseudoes = node.selector ? getPseudoes(node.selector) : [];
      if (!isWrapped && pseudoes.length > 0) {
        isWrapped = true;
      }

      if (isWrapped) {
        if (isAtRule) {
          css += `@${node.name} ${node.params}`;
        } else if (node.selector) {
          css += pseudoes.join(",");
        }
        css += "{\n";
      }

      // Now we turn CSS into boolean logic compared against props.
      //
      // Selectors typically look like,
      //
      //   .basic.basic--with-option
      //
      // because people use selectors to turn on/off styling,
      // so we can use selectors in Styled-Components as boolean
      // logic by comparing the remaining selector (".basic--with-option")
      // against dynamicKeys that would add the class ("basic--with-option")
      // to match that.
      //
      // So we turn CSS into boolean logic compared against props.

      // FIXME: this will break with multiple classes in classAttribute.value
      // ie hierarchical selectors
      const remainingSelector =
        node.selector &&
        classAttribute &&
        node.selector
          .replace(new RegExp(`.${classAttribute.value.trim()}[ \.{]`, "g"), "")
          .trim();

      let isDynamic: boolean = false;
      if (classAttribute && classAttribute.dynamicKeys) {
        const conditional: string[] = [];
        classAttribute.dynamicKeys.forEach(dynamicKey => {
          // naive logic doesn't include compound classes etc. FIXME

          if (
            remainingSelector &&
            dynamicKey.ifTrueValue &&
            `.${dynamicKey.ifTrueValue.trim()}` === remainingSelector
          ) {
            isDynamic = true;
            css += `\${props => props.${dynamicKey.key} && styled.css\`\n`;
            usedProps.push(dynamicKey.key);
          } else if (
            node.selector &&
            dynamicKey.type &&
            Array.isArray(dynamicKey.type)
          ) {
            const selectorParts = splitCssSelector(node.selector).map(
              selectorPart => selectorPart.replace(/^\./, "")
            );

            const selectorMatchingOptions: EnumOption[] = selectorParts
              .map(selectorPart => {
                const option: EnumOption = (dynamicKey.type as EnumOption[]).find(
                  option => option.value === selectorPart
                );
                return option ? option : undefined;
              })
              .filter(val => !!val);

            if (selectorMatchingOptions.length === 1) {
              conditional.push(
                `props.${dynamicKey.key} === "${
                  selectorMatchingOptions[0].name
                }"`
              );
              usedProps.push(dynamicKey.key);
            } else if (selectorMatchingOptions.length >= 2) {
              const arrayAsString = `[${selectorMatchingOptions
                .map(option => `"${option.name}"`)
                .join(", ")}]`;
              conditional.push(
                // Rendering .indexOf for IE11 compat
                `${arrayAsString}.indexOf(props.${dynamicKey.key}) !== -1`
              );
              usedProps.push(dynamicKey.key);
            }
          }
        });
        if (conditional.length) {
          isDynamic = true;
          css += `\${props => (`;
          css += conditional.join(" || ");
          css += `) && styled.css\`\n`;
        }
      }

      if (node.nodes) {
        css +=
          node.nodes
            .filter(node => {
              return !VENDOR_CSS_PROPERTIES_WITH_GENERIC_NAMES.includes(
                node.prop
              );
            })
            .map(node => {
              if (node.type === "rule") {
                return renderCSS(node);
              }
              return node.toString();
            })
            .map(node => node.trim())
            .join(";\n") + ";\n";
      }

      if (isDynamic) {
        css += "`}\n";
      }

      if (isWrapped) {
        css += "}\n";
      }

      return css.trim();
    };

    const cssNodes = [...cssParser(cssString).nodes];
    let css = cssNodes.map(node => renderCSS(node)).join("\n");

    return {
      scBody: css,
      usedProps: uniq(usedProps)
    };
  };

  onElement = async ({
    tagName,
    attributes,
    css,
    isSelfClosing
  }: OnElement): Promise<string> => {
    if (this.hasChangeEvent(tagName, attributes)) {
      // If this is a form element
      const onChangeDynamicKey: DynamicKey = {
        key: this.registerDynamicKey("onChange", "function", false),
        optional: false,
        type: "function"
      };
      const onChange: TemplateAttribute = {
        key: "onChange",
        dataType: "function",
        value: "",
        dynamicKeys: [onChangeDynamicKey]
      };
      attributes.push(onChange);
    }
    if (this.hasClickEvent(tagName, attributes)) {
      // If this is a form element
      const onClickDynamicKey: DynamicKey = {
        key: this.registerDynamicKey("onClick", "function", false),
        optional: false,
        type: "function"
      };
      const onClick: TemplateAttribute = {
        key: "onClick",
        dataType: "function",
        value: "",
        dynamicKeys: [onClickDynamicKey]
      };
      attributes.push(onClick);
    }

    let tag = tagName; // TODO: escape elementName
    if (this.options.css === "styled-components") {
      const {
        scBody,
        usedProps
      }: StyledComponentsResponse = await this.renderStyledComponentRules(
        css,
        attributes.find(attribute => attribute.key === "class")
      );
      if (scBody.trim().length > 0) {
        tag = simpleUniqueKey(
          `Styled${tag.substring(0, 1).toUpperCase()}${tag.substring(1)}`,
          this.styleKeys
        );
        this.style += `\n\nconst ${tag} = styled.${tagName}`;

        if (this.options.language === "typescript" && usedProps.length > 0) {
          this.style += "<";
          if (usedProps.length > 0) {
            this.style += `Pick<Props, ${usedProps
              .map(usedProp => `"${usedProp}"`)
              .join(" | ")}>`;
          }
          // Because we're wrapping (eg) the <a> tag
          // which takes a "href" we'll need to
          // allow "href" prop too, not just props related
          // to styles.
          // See: https://www.styled-components.com/docs/api#caveat-with-function-components
          this.style += ">";
        }
        this.style += `\`${scBody}\`;\n\n`;
      }
    }

    this.render += `<${tag}`;

    const renderedAttributeKeys = [];

    if (this.options.css === "styled-components") {
      const classAttribute = attributes.find(
        attribute => attribute.key === "class"
      );
      if (classAttribute && classAttribute.dynamicKeys) {
        this.render += classAttribute.dynamicKeys
          .map(dynamicKey => {
            renderedAttributeKeys.push(dynamicKey.key);
            return ` ${dynamicKey.key}={${dynamicKey.key}}`;
          })
          .join("");
      }
    }

    this.render +=
      (attributes
        ? attributes
            .filter(attribute => {
              return !(
                this.options.css === "styled-components" &&
                attribute.key === "class"
              );
            })
            .filter(attribute => !renderedAttributeKeys.includes(attribute.key))
            .map((attribute: TemplateAttribute) =>
              this.renderAttribute(tagName, attribute, this.options)
            )
            .join("")
        : "") +
      (isSelfClosing ? "/" : "") +
      ">";

    return tag; // because Styled-Components usage can change the tag
  };

  onCloseElement = async ({ tagName }: OnCloseElement): Promise<void> => {
    this.render += `</${tagName}>`;
  };

  onText = async ({ text }: OnText): Promise<void> => {
    this.render += text;
  };

  onVariable = async ({ key, defaultValue }: OnVariable): Promise<void> => {
    this.render += `{${key} !== undefined ? ${key} : <React.Fragment>${defaultValue}</React.Fragment>}`;
  };

  onIf = async ({ key }: OnIf): Promise<void> => {
    this.render += `{${key} !== undefined ? <React.Fragment>`;
  };

  onCloseIf = async ({  }: OnCloseIf): Promise<void> => {
    this.render += `</React.Fragment> : ''}`;
  };

  serialize = async ({
    hasMultipleRootNodes
  }: OnSerialize): Promise<Object> => {
    const templateFilename = `${this.dirname}/${this.template.id}.${
      this.options.language === "typescript" ? "tsx" : "js"
    }`;
    const cssFilename = `css/${this.template.id}.css`;
    let files: { [key: string]: string } = {};

    if (this.template.html) {
      files = {
        [templateFilename]: this.renderReactComponent(
          cssFilename,
          hasMultipleRootNodes
        )
      };
    }

    if (
      this.template.css &&
      this.template.css.trim() !== "" &&
      this.options.css === "import-css"
    ) {
      files[cssFilename] = this.template.css;
    }

    return files;
  };

  renderReactComponent = (
    cssFilename: string,
    hasMultipleRootNodes: boolean
  ): string => {
    let code = "";
    if (this.options.language === "javascript") {
      code += "import React from 'react';\n";
    } else if (this.options.language === "typescript") {
      code += "import * as React from 'react';\n";
    }
    if (this.style && this.options.css === "styled-components") {
      if (this.options.language === "javascript") {
        code += "import styled from 'styled-components';\n";
      } else if (this.options.language === "typescript") {
        code += `import * as styled from 'styled-components';\n`;
      }
    } else if (this.options.css === "import-css") {
      if (this.template.css.trim() !== "") {
        code += `import '../${cssFilename}';\n`;
      }
    }
    if (this.imports.length) {
      code += this.imports.join("\n");
    }
    code += "\n";
    if (this.options.language === "typescript") {
      code += "type Props = {\n";
      code += `  ${this.assignedDynamicKeys
        .map(
          key =>
            `${key}${
              this.assignedDynamicDefsByKey[key].optional ? "?" : ""
            }: ${this.renderPropType(key)}`
        )
        .join(";\n  ")}`; // TODO: refine and maybe use React.FunctionComponent<{ thing: any }>
      code += "\n}\n\n";
    }

    // this.style defaults to an empty string so it's harmless to add it
    code += this.style;

    if (Object.keys(this.constants).length !== 0) {
      code += `const constants = ${JSON.stringify(this.constants)};\n\n`;
    }

    // Convert the given template.id into a variable name that's a valid
    // JavaScript variable. ie convert "list-item" to "ListItem".
    const safeName = `${this.template.id
      .substring(0, 1)
      .toUpperCase()}${camelCase(this.template.id.substring(1))}`;

    code += `const ${safeName} = ({ ${this.assignedDynamicKeys.join(", ")} }${
      this.options.language === "typescript" ? ":Props" : ""
    }) => (${hasMultipleRootNodes ? "<React.Fragment>" : ""}`;
    code += this.render;
    code += hasMultipleRootNodes ? "</React.Fragment>" : "";
    code += ");\n";
    code += `${safeName}.props = ${JSON.stringify(
      this.assignedDynamicKeys
    )};\n`;
    code += `export default ${safeName};\n`;

    try {
      code = prettier.format(code, {
        parser: this.options.language === "typescript" ? "typescript" : "babel",
        printWidth: PRETTIER_LINE_WIDTH
      });
    } catch (e) {
      console.log("MetaTemplate React error.\nCode was\n", code, "\n\n");
      throw e;
    }
    return code;
  };

  renderPropType = (key: string): string => {
    let typing: string[];
    let alreadyDefinedTheUndefinedType = false;
    const def = this.assignedDynamicDefsByKey[key];
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
          // string enum
          typing = def.type.map(option => `"${option.name || option}"`);
        } else {
          // TODO: Add Function typing for onChange using React's ChangeEvent
          typing = ["any"];
        }
        break;
      }
    }
    if (def.optional && !alreadyDefinedTheUndefinedType) {
      typing.push("undefined");
    }
    return typing.join(" | ");
  };

  reactKeyTransform = (key: string): string => {
    // React uses JavaScript names not HTML names which can be different
    // such as className="" vs class="" and htmlFor="" vs for="", so we
    // need to convert them...
    const transform = {
      class: "className",
      for: "htmlFor",
      autocomplete: "autoComplete",
      "fill-rule": "fillRule",
      readonly: "readOnly",
      autofocus: "autoFocus",
      srcset: "srcSet",
      crossorigin: "crossOrigin",
      spellcheck: "spellCheck",
      tabindex: "tabIndex"
      // TODO: expand this list... presumably there's an NPM package with these mappings?
    };
    return transform[key] ? transform[key] : key;
  };

  hasChangeEvent = (
    tagName: string,
    attributes: TemplateAttribute[]
  ): boolean => {
    if (tagName === "input") {
      const inputType = attributes.find(attribute => attribute.key === "type");
      return !!(
        inputType && !["file", "submit", "image"].includes(inputType.value)
      );
    }
    return ["textarea", "select"].includes(tagName);
  };

  hasClickEvent = (
    tagName: string,
    attributes: TemplateAttribute[]
  ): boolean => {
    if (tagName === "input") {
      const inputType = attributes.find(attribute => attribute.key === "type");
      return !!(inputType && ["submit", "image"].includes(inputType.value));
    }
    return ["button"].includes(tagName);
  };

  registerDynamicKey = (
    key: string,
    type: DynamicKeyType,
    optional: boolean
  ): string => {
    const assignedKey = simpleUniqueKey(
      this.reactKeyTransform(key),
      this.assignedDynamicKeys
    );
    this.assignedDynamicDefsByKey[assignedKey] = { type, optional };
    return assignedKey;
  };

  getAssignedDynamicKeys = (): string[] => {
    return this.assignedDynamicKeys;
  };

  generateIndex = (filePaths: string[]): Object => {
    filePaths.forEach(filePath => {
      if (!filePath.startsWith(`${this.dirname}/`))
        throw new Error(`Expected "${filePath}" to start with ${this.dirname}`);
    });

    const fileExtension: string =
      this.options.language === "javascript" ? ".js" : ".tsx";

    const lazyImportUsageComment: string =
      "// DEVELOPER NOTE: These components are ready to lazy-load. You may also import components directly.\n\n";
    const lazyImportAllScript: string = filePaths
      .map(filePath => {
        const fileNameWithoutExtension = path.basename(filePath, fileExtension);
        const camelName = camelCase(fileNameWithoutExtension);
        return `export const ${fileNameWithoutExtension} = () => import("./${fileNameWithoutExtension}");\n`;
      })
      .join("");
    const lazyImportAllPath = `${this.dirname}/${camelCase(
      "index"
    )}${fileExtension}`;

    const importUsageComment: string =
      "// DEVELOPER NOTE: This file includes all components so importing this file may be very inefficient. Use carefully! You may prefer to import components directly or use index.js which has import functions, typically treated as a code splitting point.\n\n";
    const importAllScript: string = filePaths
      .map(filePath => {
        const fileNameWithoutExtension = path.basename(filePath, fileExtension);
        return `export { default as ${camelCase(
          fileNameWithoutExtension
        )} } from "./${fileNameWithoutExtension}";\n`;
      })
      .join("");
    const importAllPath = `${this.dirname}/${camelCase(
      "index-not-lazy"
    )}${fileExtension}`;

    return {
      [lazyImportAllPath]: lazyImportUsageComment + lazyImportAllScript,
      [importAllPath]: importUsageComment + importAllScript
    };
  };

  static makeUsageTags = (
    code: TemplateUsages,
    templates: TemplatesById,
    options: UsageOptions
  ): FormatUsageResponse => {
    const imports: string[] = [];
    const tagNameReplacer = options && options.tagNameReplacer;
    const flattenAttributeValues = options && options.flattenAttributeValues;

    const render = (aCode: TemplateUsage | string): string => {
      if (typeof aCode === "string" || aCode instanceof String) {
        return aCode as string;
      }

      const isComponent = aCode.templateId.match(/[A-Z]/); // ie. is a Component reference not HTML

      if (isComponent) {
        // capital letters indicates a Component not HTML
        imports.push(aCode.templateId);
      }

      let t = `<${
        tagNameReplacer ? tagNameReplacer(aCode.templateId) : aCode.templateId
      }`;
      const keys: string[] = Object.keys(aCode.variables);

      const flattenAttribute = (
        attrValue: string,
        isAttribute: boolean
      ): string => {
        if (flattenAttributeValues && isAttribute) {
          // This react-ts-styled-components template format is called by other
          // template-formats to render basic component tags, such as
          // silverstripe-components.
          //
          // If flattenAttributeValues is `true` then this means the template
          // language doesn't support attribute values that are components.
          // For example, this isn't supported in silverstripe-components:
          //   <tag value={<b>bold text</b>} />
          //
          // There isn't a nice way of handling this, so we just throw away
          // any components. This does mean that the above example would come
          // out as,
          //   <tag value="bold text" />
          //
          // which sounds like a good fallback, but what if the tag was,
          //   <tag value={<icon id="bold"/>} />
          //
          // then we'd render,
          //   <tag value="" />
          //
          // So it doesn't seem that there's a nice way of handling this.
          // Any fallback would throw away data. The only way we could handle
          // this would be to have a plaintext serializer on each component, so
          // that each component can choose how it's rendered. That doesn't sound
          // like something MetaTemplate could assist with.
          //
          // So remove all tags...
          // TODO: Use an HTML parser...
          return attrValue.replace(/<[\s\S]*?>/gi, "").trim();
        }
        return attrValue;
      };

      const draw = (key: string, isAttribute: boolean) => {
        const value = aCode.variables[key];
        if (typeof value === "string" || value instanceof String) {
          return `${isAttribute ? '="' : ""}${(value as string).trim()}${
            isAttribute ? '"' : ""
          }`;
        } else if (typeof value === "boolean") {
          if (!isAttribute)
            throw Error(
              "Given a boolean value but not in an attribute. Weird."
            );
          // if true it can be attributeless, otherwise boolean false
          return value ? "" : "={false}";
        } else {
          const openSymbol = flattenAttributeValues ? '"' : "{";
          const closeSymbol = flattenAttributeValues ? '"' : "}";
          let keyValue = `${
            isAttribute ? `=${openSymbol}` : ""
          }${(value as TemplateUsage[])
            .map(render)
            .map(attrValue => flattenAttribute(attrValue, isAttribute))
            .join("")}${isAttribute ? closeSymbol : ""}`;
          return keyValue;
        }
      };

      t += keys
        .filter(key => key !== "children")
        .map(key => ` ${key}${draw(key, true)}`)
        .join("");

      if (keys.includes("children")) {
        t += ">\n";
        t += draw("children", false);
        t += `\n</${
          tagNameReplacer ? tagNameReplacer(aCode.templateId) : aCode.templateId
        }>\n`;
      } else {
        t += "/>\n";
      }

      return t;
    };

    return {
      code: code.map(render).join(""),
      imports: uniq(imports)
    };
  };

  makeUsage = async (
    code: TemplateUsages,
    templates: TemplatesById,
    options?: UsageOptions | undefined
  ): Promise<FormatUsageResponse> => {
    const importPrefix =
      (options && options.importPrefix) || "@govtnz/ds/build/"; // TODO: Refactor this out so it's always config
    let imports: string[] = ["React"];
    let renderImport = options && options.renderImport;

    let response: string = "";
    const useFragmentWrapper = code.length > 1;

    const usageTags: FormatUsageResponse = ReactTsStyledComponents.makeUsageTags(
      code,
      templates,
      options
    );

    imports = imports.concat(usageTags.imports);

    response += imports
      .map(item => {
        const rI = renderImport || this.renderImport;

        const suffix =
          options && options.filenameExtensionOverride[this.dirname];

        const from =
          item === "React"
            ? "react"
            : `${importPrefix}${this.dirname}/${item}${suffix || ""}`;

        const shouldNotHaveStyleFile =
          this.options.css === "styled-components" || item === "React";
        const cssFrom = shouldNotHaveStyleFile
          ? ""
          : `${importPrefix}css/${item}.css`;
        const scssFrom = shouldNotHaveStyleFile
          ? ""
          : `${importPrefix}scss/${item}.scss`;
        return rI(item, from, cssFrom, scssFrom);
      })
      .join("");
    response += "\n";

    switch (this.options.language) {
      case "typescript":
      case "javascript": {
        response += `export default () => ${
          useFragmentWrapper ? "<React.Fragment>" : "("
        }`;
        response += usageTags.code;
        response += useFragmentWrapper ? "</React.Fragment>" : ")";
        break;
      }
      case "component-and-imports": {
        // Wrapping templated code in a fragment in case there's
        // multiple root nodes (including text nodes)
        // Later in the code (after Prettier) we'll remove these
        // fragments
        response += "<>" + usageTags.code + "</>";
        break;
      }
    }

    response = prettier
      .format(response, {
        parser: this.options.language === "typescript" ? "typescript" : "babel",
        printWidth: PRETTIER_LINE_WIDTH
      })
      .replace(/\{"[\s]+?"\}/gi, "");

    if (this.options.language === "component-and-imports") {
      // Remove temporary React fragments added just above
      response = response.replace("<>", ""); //replace first fragment
      response = response.replace(/<\/>[\s\S]+?$/, ""); //replace last fragment
      response = response.trim(); // now with those tags removed, trim any surrounding whitespace
      response = response.replace(/\n  /gi, "\n"); // due to the fragment <> wrapper all tags are indented unnecessarily, so we remove "\n  " to trim each line of two spaces.
    }

    return { code: response, imports: usageTags.imports };
  };

  renderImport = (
    name: string,
    from: string,
    cssFrom: string,
    scssFrom: string
  ) => {
    if (this.options.language === "javascript") {
      return `import ${name} from '${from}';\n${
        cssFrom ? `import '${cssFrom}'; // or ${scssFrom}\n` : ""
      }`;
    } else if (this.options.language === "typescript") {
      return `import * as ${name} from '${from}';\n${
        cssFrom ? `import '${cssFrom}'; // or ${scssFrom}\n` : ""
      }`;
    }
  };
}

type StyledComponentsResponse = {
  scBody: string;
  usedProps: string[];
};

// List of attributes who values must be values. Ie,
//   <textarea rows="8" />
// is invalid as it should be forced to be this,
//   <textarea rows={8} />
const forceAttributeAsRef = {
  rows: "number",
  tabIndex: "number",
  "aria-disabled": "boolean",
  disabled: "boolean",
  open: "boolean"
};

const typeCoersions = {
  type: "any",
  crossOrigin: "any" // Pick<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'crossOrigin'>
};
