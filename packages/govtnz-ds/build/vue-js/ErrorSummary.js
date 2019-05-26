import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    errorSummaryTitle: { type: String, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2() {
      return constants[this.target2] !== undefined
        ? constants[this.target2]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-error-summary optional-extra-class",attrs:{"aria-labelledby":errorSummaryTitle,"data-module":"error-summary","role":"alert","tabindex":"-1"}},[_c(\'h2\',{staticClass:"g-error-summary__title",attrs:{"id":errorSummaryTitle}},[_v("\\n\\n    Message to alert the user to a problem goes here\\n  \\n\\n")]),_v(" "),_c(\'div\',{staticClass:"g-error-summary__body"},[_c(\'p\',[_v("\\n\\n      Optional description of the errors and how to correct them\\n    \\n\\n")]),_v(" "),_c(\'ul\',{staticClass:"g-errorSummary-list g-error-summary__list"},[_c(\'li\',[_c(\'a\',{attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\nDescriptive link to the question with an error\\n\\n")])]),_v(" "),_c(\'li\',[_c(\'a\',{attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\nDescriptive link to the question with an error\\n\\n")])])])])])}'
  )
});
