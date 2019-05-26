import { TemplateInput, emptyTemplate } from "../../index";
import ReactTsStyledComponents from "../react-ts-styled-components/template.react-ts-styled-components";

export default class ReactJsStyledComponents extends ReactTsStyledComponents {
  static id = "react-js-styled-components";
  public dirname = "react-js-styled-components";
  static isDefaultOption = true;

  constructor(template: TemplateInput = emptyTemplate) {
    super(template, {
      language: "javascript",
      css: "styled-components"
    });
  }
}
