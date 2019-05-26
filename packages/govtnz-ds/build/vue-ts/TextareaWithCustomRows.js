import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { fullAddress: { type: String, required: false } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textareaWithCustomRows-form-group"},[_c(\'label\',{staticClass:"g-textareaWithCustomRows-label",attrs:{"for":fullAddress}},[_v("\\n\\n    Full address\\n  \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-textareaWithCustomRows-textarea",attrs:{"id":fullAddress,"name":"address","rows":"8"}})])}'
  )
});
