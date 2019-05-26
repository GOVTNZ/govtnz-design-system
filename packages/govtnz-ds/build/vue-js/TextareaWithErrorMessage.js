import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    noNiReason: { type: String, required: false },
    noNiReasonError: { type: String, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textareaWithErrorMessage-form-group g-textareaWithErrorMessage-form-group--error"},[_c(\'label\',{staticClass:"g-textareaWithErrorMessage-label",attrs:{"for":noNiReason}},[_v("\\n\\n    Why can\'t you provide a National Insurance number?\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-textareaWithErrorMessage-error-message",attrs:{"id":noNiReasonError}},[_v("\\n\\n    You must provide an explanation\\n  \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-textareaWithErrorMessage-textarea g-textareaWithErrorMessage-textarea--error",attrs:{"aria-describedby":noNiReasonError,"id":noNiReason,"name":"no-ni-reason","rows":"5"}})])}'
  )
});
