import { TemplateInput, emptyTemplate } from "../../index";
import VueTs from "../vue-ts/template.vue-ts";

export default class VueJs extends VueTs {
  static id = "vue-js";
  public dirname = "vue-js";
  static isDefaultOption = true;

  constructor(template: TemplateInput = emptyTemplate) {
    super(template, {
      language: "javascript",
      css: "style-tags"
    });
  }
}
