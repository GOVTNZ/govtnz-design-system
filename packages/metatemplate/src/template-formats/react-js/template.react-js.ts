import { TemplateInput, emptyTemplate } from "../../index";
import ReactTsStyledComponents from "../react-ts-styled-components/template.react-ts-styled-components";

export default class ReactJs extends ReactTsStyledComponents {
  static id = "react-js";
  public dirname = "react-js";
  static isDefaultOption = true;

  constructor(template: TemplateInput = emptyTemplate) {
    super(template, {
      language: "javascript",
      css: "none"
    });
  }
}
