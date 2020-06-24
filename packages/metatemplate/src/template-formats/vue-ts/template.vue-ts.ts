import prettier from "prettier";
import * as VueTemplateCompiler from "vue-template-compiler";
import { TemplateFormat } from "../template-format";
import {
  TemplateInput,
  emptyTemplate,
  TemplateUsages,
  TemplatesById,
  PRETTIER_LINE_WIDTH,
  FormatUsageResponse,
  UsageOptions,
} from "../../index";
import {
  TemplateAttribute,
  DynamicKey,
  DynamicKeyType,
  simpleUniqueKey,
  EnumOption,
  OnElement,
  OnCloseElement,
  OnVariable,
  // OnIf,
  // OnCloseIf,
  OnText,
  OnSerialize,
} from "../../common";
import ReactTsStyledComponents from "../react-ts-styled-components/template.react-ts-styled-components";
import { uniq, kebabCase, camelCase } from "lodash";
import { isArray } from "util";

export type Options = {
  language: "javascript" | "typescript";
  css: "style-tags" | "none";
};

const defaultOptions: Options = {
  language: "typescript",
  css: "style-tags",
};

let suppressUsageErrors = false;

export default class VueTs implements TemplateFormat {
  static id = "vue-ts";
  public dirname = "vue-ts";
  static isDefaultOption = true;

  template: string;
  script: string;
  style: string;
  _template: TemplateInput;
  constants: { [key: string]: any }; // Output code for any enumerations (friendly name to value mappings).
  computed: { [key: string]: string }; // function code for any computed values
  defaultProps: { [key: string]: string }; // defaults for any props
  propTypes: { [key: string]: DynamicKey };
  assignedDynamicKeys: TemplateFormat["assignedDynamicKeys"];
  computedKeys: string[];
  imports: string[];
  options: Options;

  constructor(
    template: TemplateInput = emptyTemplate,
    options: Options = defaultOptions
  ) {
    this._template = template;
    this.options = options;
    this.assignedDynamicKeys = {};
    this.computedKeys = [];
    this.defaultProps = {};
    this.constants = {};
    this.propTypes = {};
    this.computed = {};
    this.template = "";
    this.imports = [];
    this.script = "";
    this.style = "";
  }

  onElement = async ({
    tagName,
    attributes,
    isSelfClosing,
  }: OnElement): Promise<string> => {
    this.template +=
      `\n<${tagName}` + // TODO: escape elementName?
      (attributes && attributes.length > 0
        ? " " +
          attributes
            .map(
              // TODO: escape attributes?
              (attribute: TemplateAttribute) => this.renderAttribute(attribute)
            )
            .join(" ")
        : "") +
      (isSelfClosing ? "/" : "") +
      ">\n"; // DEV NOTE: trailing whitespace to help Prettier linewrap
    return tagName;
  };

  renderAttribute = (attribute: TemplateAttribute) => {
    let attr: string = "";

    if (attribute.dynamicKeys && attribute.dynamicKeys.length) {
      if (
        // if it's a single value that's a direct binding then no need to have a computed value
        !attribute.value &&
        attribute.dynamicKeys.length === 1 &&
        !attribute.dynamicKeys[0].ifTrueValue && // if there's no mapping required
        !Array.isArray(attribute.dynamicKeys[0].type) // if it's not an enumeration
      ) {
        this.propTypes[attribute.dynamicKeys[0].key] = attribute.dynamicKeys[0];
        attr = `v-bind:${attribute.key}="${attribute.dynamicKeys[0].key}"`;
      } else {
        const computedName = this.registerComputedKey(attribute.key);
        attr = `v-bind:${attribute.key}="${computedName}"`;

        let val = "";

        if (attribute.value) {
          val += `"${attribute.value}${attribute.key === "class" ? " " : ""}"`;

          if (attribute.dynamicKeys && attribute.dynamicKeys.length > 0) {
            val += " + ";
          }
        }

        const shouldHavePrecedingWhitespace =
          attribute.dynamicKeys.length > 1 || attribute.value;

        val += attribute.dynamicKeys
          .map((dynamicKey: DynamicKey): string => {
            this.propTypes[dynamicKey.key] = dynamicKey;
            if (dynamicKey.defaultValue) {
              return `"${dynamicKey.defaultValue}"`;
            }

            if (Array.isArray(dynamicKey.type)) {
              this.constants[dynamicKey.key] = {};
              dynamicKey.type.forEach((option) => {
                this.constants[dynamicKey.key][option.name] = option.value;
              });
              // Return whitespace before values where there might be a list of
              // attribute values ie `class="val1 val2"` with spacing.
              // BUT if there's just a single dynamicKey then don't add whitespace.

              return `(constants.${dynamicKey.key}[this.${
                dynamicKey.key
              }] !== undefined ? ${
                shouldHavePrecedingWhitespace
                  ? `\` \${constants.${dynamicKey.key}[this.${dynamicKey.key}]}\``
                  : `constants.${dynamicKey.key}[this.${dynamicKey.key}]`
              } : '')`;
            }

            if (dynamicKey.ifTrueValue) {
              return `(this.${dynamicKey.key} ? "${
                shouldHavePrecedingWhitespace ? " " : ""
              }${dynamicKey.ifTrueValue}" : '')`;
            }

            // There can be dynamicKeys that don't match above conditions
            // such as {"key":"id","type":"string","optional":false}
            // and in such cases we'll just use the string "example"
            return ` this.${dynamicKey.key}`;
          })
          .join(" + ");

        this.computed[computedName] = val;
      }
    } else {
      attr += `${attribute.key}`;
      if (attribute.value) {
        attr += `="${attribute.value}"`;
      }
    }
    return attr;
  };

  onCloseElement = async ({ tagName }: OnCloseElement): Promise<void> => {
    this.template += `\n\n</${tagName}>\n\n`; // DEV NOTE: leading and trailing whitespace to help Prettier linewrap
  };

  // onIf = async ({ key }: OnIf): Promise<void> => {
  //   console.warn("'onIf' not yet supported for Vue");
  // };

  // onCloseIf = async ({  }: OnCloseIf): Promise<void> => {};

  onText = async ({ text }: OnText): Promise<void> => {
    this.template += text;
  };

  onVariable = async ({ key, defaultValue }: OnVariable): Promise<void> => {
    this.defaultProps[key] = defaultValue;
    this.template += `<slot${
      key !== "children" ? ` name="${key}"` : ""
    }></slot>`;
  };

  serialize = async ({ css }: OnSerialize): Promise<Object> => {
    const END_OF_SCRIPT = "});";
    const imports = uniq(this.imports);
    // "single" variable is https://vuejs.org/v2/guide/single-file-components.html
    let single = `<template>\n\n ${this.template} \n\n</template>`; // DEV NOTE: extra whitespace here to help tell Prettier to linewrap as is appropriate

    let script = "";
    if (Object.keys(this.constants).length > 0) {
      script += `const constants = ${JSON.stringify(this.constants)};\n\n`;
    }

    let props = "";
    props += Object.keys(this.assignedDynamicKeys)
      .map((key) => {
        let val = `${key}: { `;
        if (this.propTypes[key]) {
          if (isArray(this.propTypes[key].type)) {
            val += "type: String, validator: (value) => {";
            val += ` return ${JSON.stringify(
              (this.propTypes[key].type as EnumOption[]).map(
                (enumOption: EnumOption) => enumOption.name
              )
            )}.indexOf(value) !== -1;`;
            val += "}";
          } else if (this.propTypes[key].type === "boolean") {
            val += "type: Boolean, default: false";
          } else {
            val += "type: String";
          }
          val += `, required: ${!this.propTypes[key].optional}`;
        } else {
          // No typing available. Probably from onVariable().
          val += "required: false";
        }

        if (this.defaultProps[key]) {
          val += `, default: ${JSON.stringify(this.defaultProps[key])}`;
        } else {
        }
        val += " }";
        return val;
      })
      .join(", ");

    script += `export default Vue.extend({\n
        props: { ${props} },
        computed: {
            ${Object.keys(this.computed)
              .map((key) => {
                let fn = `${key}()`;
                if (this.options.language === "typescript") {
                  // Not sure how to make Prettier support Single File Components
                  // that have TYPESCRIPT, so that feature is disabled for now.
                  //
                  // fn += ": string";
                }
                fn += " {\n  return ";
                fn += this.computed[key];
                fn += "\n}";
                return fn;
              })
              .join(",")}
        }`;
    single += "<script";
    if (this.options.language === "typescript") {
      single += ' lang="ts"';
    }
    single += ">";
    script = `import Vue from "vue";\n${imports.join("")}\n\n${script}`;

    single += script + `${END_OF_SCRIPT} </script>`;

    if (css.trim()) {
      single += `<style scoped>\n\n${css}\n</style>`;
    }

    let formattedSingle;
    try {
      formattedSingle = prettier.format(single, {
        parser: "vue",
      });
    } catch (e) {
      console.error(
        `MetaTemplate internal problem: Vue codegen problem, unable to Prettier #${this._template.id} this code:`
      );
      console.error(e);
      formattedSingle = single;
    }

    const pathPrefix = `${this.dirname}/${this._template.id}`;

    const compiled = VueTemplateCompiler.compile(this.template);

    let js = `${script} ${script.length ? ", " : ""}`;
    if (compiled.render) {
      js += `render: new Function(${
        // compiled.render is a string, but it has " characters so
        // we want to escape them and we'll use JSON.stringify for that
        JSON.stringify(compiled.render)
      }),`;
    }
    if (compiled.staticRenderFns && compiled.staticRenderFns.length > 0) {
      js += `staticRenderFns: new Function(${JSON.stringify(
        compiled.staticRenderFns
      )}),`;
    }
    js += ` ${END_OF_SCRIPT}`;

    return {
      [`${pathPrefix}.vue`]: formattedSingle,
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

  registerComputedKey = (key: string): string => {
    return simpleUniqueKey(
      // camelCase because of keys like "aria-describedBy"
      // which aren't valid function names
      `${COMPUTED_PREFIX}${camelCase(key)}`,
      this.computedKeys
    );
  };

  generateIndex = (filesArr: string[]): Object => {
    return {};
  };

  makeUsage = async (
    code: TemplateUsages,
    templates: TemplatesById
  ): Promise<FormatUsageResponse> => {
    const imports: string[] = ["import Vue from 'vue';"];

    // Vue apparently requires a hyphen in component names
    // So "c-" as a prefix, because c = component...had to choose something and didn't want a vanity "mt-" prefix
    const VUE_PREFIX = "c-";

    const componentNameMapping = {};

    const tagNameReplacer = (tagName) => {
      if (!componentNameMapping[tagName]) {
        if (tagName.match(/[A-Z]/)) {
          let newName = kebabCase(tagName).replace(
            /-([1-6])/,
            (match, level) => {
              return level;
            }
          );
          if (!newName.includes("-")) {
            newName = VUE_PREFIX + tagName.toLowerCase();
          }
          componentNameMapping[tagName] = newName;
        } else {
          componentNameMapping[tagName] = tagName;
        }
      }
      return componentNameMapping[tagName];
    };
    const options: UsageOptions = {
      tagNameReplacer,
      flattenAttributeValues: true,
    };
    const usageTags: FormatUsageResponse = ReactTsStyledComponents.makeUsageTags(
      code,
      templates,
      options
    );

    usageTags.imports.forEach((item) => {
      imports.push(
        `import ${item} from '@govtnz/ds/build/${this.dirname}/${item}.vue';`
      );
    });

    const usage = `<template>\n\n ${usageTags.code} \n\n</template>\n<script${
      this.options.language === "typescript" ? ' lang="ts"' : ""
    }>\n${imports.join(
      "\n"
    )}\n\n export default { components: { ${usageTags.imports
      .map((anImport) => `'${tagNameReplacer(anImport)}': ${anImport}`)
      .join(",")} } }\n</script>\n`;

    let response = usage;
    try {
      response = prettier.format(usage, {
        parser: "vue",
        printWidth: PRETTIER_LINE_WIDTH,
      });
    } catch (e) {
      // will fail on <Radio label={<h1>hello</h1>}> children </Radio>
      // where HTML and other components are attributes.
      // I'm not sure how to map this to Vue.
      //
      // Vue has the ':is' for dynamic components, and there are docs
      // on pass various object types but not a thing that might be
      // HTML or might be a component.

      if (suppressUsageErrors === false) {
        console.error("\nMetaTemplate: Vue usage generator failure");
        console.error(
          "This is known to be caused by (this example is expressed as React JSX) code such as\n\t<Radio label={<h1>hello</h1>} />\nwhere attribute values are tags as we don't know how to express that in Vue. Can it be expressed? Submit a patch!"
        );
        console.error("Actual error message: ", e.toString());
        console.info(
          "NOTE: Any further errors from MetaTemplate:Vue will be suppressed."
        );
        console.log("\n");
        suppressUsageErrors = true;
      }
    }

    return {
      code: response,
    };
  };
}

const COMPUTED_PREFIX = "computed__";
