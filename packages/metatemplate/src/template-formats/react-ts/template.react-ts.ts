import { TemplateInput, emptyTemplate } from "../../index";
import ReactTsStyledComponents from "../react-ts-styled-components/template.react-ts-styled-components";

export default class ReactTs extends ReactTsStyledComponents {
  static id = "react-ts";
  public dirname = "react-ts";
  static isDefaultOption = true;

  constructor(template: TemplateInput = emptyTemplate) {
    super(template, {
      language: "typescript",
      css: "none"
    });
  }
}
