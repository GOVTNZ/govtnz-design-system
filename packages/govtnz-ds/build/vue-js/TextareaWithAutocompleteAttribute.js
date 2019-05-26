import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    textareaWithAutocompleteAttribute: { type: String, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textareaWithAutocompleteAttribute-form-group"},[_c(\'label\',{staticClass:"g-textareaWithAutocompleteAttribute-label",attrs:{"for":textareaWithAutocompleteAttribute}},[_v("\\n\\n    Full address\\n  \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-textareaWithAutocompleteAttribute-textarea",attrs:{"autocomplete":"street-address","id":textareaWithAutocompleteAttribute,"name":"address","rows":"5"}})])}'
  )
});
