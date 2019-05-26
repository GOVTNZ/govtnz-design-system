import SCSS from "../scss/template.scss";
import { TemplateInput, emptyTemplate } from "../../index";

export default class CSS extends SCSS {
  static isDefaultOption = true;

  static id = "css";
  public dirname = "css";

  constructor(template: TemplateInput = emptyTemplate) {
    super(template, {
      language: "css"
    });
  }
}
