import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    hintId: { type: String, required: false },
    errorId: { type: String, required: false },
    legend: { required: false, default: "Legend text" },
    hint: { required: false, default: "Hint text" },
    error: { required: false, default: "Error text" },
    children: { required: false, default: "Fieldset contents" }
  },
  computed: {
    computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"},[_c(\'fieldset\',{staticClass:"g-fieldset",attrs:{"aria-describedby":computed__ariaDescribedby}},[_c(\'legend\',{staticClass:"g-fieldset__legend"},[_t("legend")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-hint",attrs:{"id":hintId}},[_t("hint")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-error-message",attrs:{"id":errorId}},[_t("error")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-children"},[_t("default")],2)])])}'
  )
});
