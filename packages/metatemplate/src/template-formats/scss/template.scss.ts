import prettier from "prettier";
import { TemplateInput, emptyTemplate } from "../../index";
import {
  simpleUniqueKey,
  OnElement,
  OnCloseElement,
  OnVariable,
  OnText,
  OnSerialize
} from "../../common";
import { replaceCSSVariables } from "../../style";

export type Options = {
  language: "scss" | "css";
};

const defaultOptions: Options = {
  language: "scss"
};

export default class HTML {
  static isDefaultOption = true;

  static id = "scss";
  public dirname = "scss";

  data: string = "";
  template: TemplateInput;
  assignedDynamicKeys: string[];
  options: Options;

  constructor(
    template: TemplateInput = emptyTemplate,
    options: Options = defaultOptions
  ) {
    this.template = template;
    this.data = "";
    this.assignedDynamicKeys = [];
    this.options = options;
  }

  onElement = async ({ tagName }: OnElement): Promise<string> => {
    return tagName;
  };

  onCloseElement = async ({  }: OnCloseElement): Promise<void> => {};

  onText = async ({  }: OnText): Promise<void> => {};

  serialize = async ({ css }: OnSerialize): Promise<Object> => {
    const templatedCSS = replaceCSSVariables(
      css,
      this.template.cssVariables,
      this.options.language
    );

    const formattedCSS = prettier.format(
      templatedCSS.replace(/}/g, "}\n\n\n"),
      {
        parser: "scss" // use scss regardless of whether we're doing scss or css because css is a subset of scss (afaik)
      }
    );

    return {
      [`${this.dirname}/${this.template.id}${
        this.options.language === "scss" ? ".scss" : ".css"
      }`]: formattedCSS
    };
  };

  registerDynamicKey = (key: string): string => {
    return simpleUniqueKey(key, this.assignedDynamicKeys);
  };

  getAssignedDynamicKeys = (): string[] => {
    return this.assignedDynamicKeys;
  };

  onVariable = async ({ defaultValue }: OnVariable): Promise<void> => {
    // pass
  };

  generateIndex = (filesArr: string[]): Object => {
    let usage: string = "";
    const extension = this.options.language === "scss" ? ".scss" : ".css";
    if (this.options.language === "scss") {
      usage =
        "// This file imports every Sass (SCSS) file.\n// Feel free to fork and modify this file to activate/deactivate particular components.\n\n";
    } else {
      usage =
        "// This file imports every CSS file.\n// Feel free to fork and modify this file to activate/deactivate particular components.\n\n";
    }

    let importStatements = filesArr
      .filter(filePath => filePath.endsWith(extension))
      .map(
        importName =>
          `@import "${importName
            .replace(extension, "") // remove trailing extension
            .replace(`${this.dirname}/`, "./")}";`
      )
      .join("\n");

    let variables = {};

    if (this.template.cssVariables && this.options.language === "scss") {
      // Only SCSS needs a _settings.scss file with SCSS Variables.
      importStatements = `// Configure settings\n@import "./settings";\n\n${importStatements}`;
      const scssData =
        "// Sass Variables\n\n" +
        this.template.cssVariables
          .map(cssVariable => {
            return `$${cssVariable.id}: ${cssVariable.defaultValue};`;
          })
          .join("\n") +
        "\n";
      variables[`${this.dirname}/_settings.scss`] = scssData;
    }

    if (this.template.cssVariables) {
      // CSS and SCSS might both benefit from a JSON file indicating
      // the CSS Variables (not SCSS Variables)
      const jsonData = JSON.stringify(
        this.template.cssVariables.map(cssVariablePattern => {
          return {
            id: cssVariablePattern.id,
            defaultValue: cssVariablePattern.defaultValue
          };
        })
      );
      variables[`${this.dirname}/_settings.json`] = jsonData;

      let md = "# Settings\n\n";
      if (this.options.language === "scss") {
        md += `The \`_settings.scss\` file is for SCSS.\n\n`;
      }
      md += `The \`_settings.json\` file is to assist 3rd-party integrations (ie. CMS) to know which variables are being used.`;
      variables[`${this.dirname}/_settings.md`] = md;
    }

    return {
      [`${this.dirname}/index${extension}`]: `${usage}${importStatements}`,
      ...variables
    };
  };
}
