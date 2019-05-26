import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { textareaWithPageHeading: { type: String, required: false } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textareaWithLabelAsPageHeading-form-group"},[_c(\'h1\',{staticClass:"g-textareaWithLabelAsPageHeading-label-wrapper"},[_c(\'label\',{staticClass:"g-textareaWithLabelAsPageHeading-label",attrs:{"for":textareaWithPageHeading}},[_v("\\n\\n      Full address\\n    \\n\\n")])]),_v(" "),_c(\'textarea\',{staticClass:"g-textareaWithLabelAsPageHeading-textarea",attrs:{"id":textareaWithPageHeading,"name":"address","rows":"5"}})])}'
  )
});
