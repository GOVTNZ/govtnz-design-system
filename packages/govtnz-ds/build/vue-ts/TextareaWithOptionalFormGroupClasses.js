import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { textareaWithPageHeading: { type: String, required: false } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textareaWithOptionalFormGroupClasses-form-group extra-class"},[_c(\'label\',{staticClass:"g-textareaWithOptionalFormGroupClasses-label",attrs:{"for":textareaWithPageHeading}},[_v("\\n\\n    Full address\\n  \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-textareaWithOptionalFormGroupClasses-textarea",attrs:{"id":textareaWithPageHeading,"name":"address","rows":"5"}})])}'
  )
});
