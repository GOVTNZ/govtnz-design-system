import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    customRows: { type: String, required: false },
    customRowsInfo: { type: String, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-characterCountWithCustomRows-character-count",attrs:{"data-maxlength":"10","data-module":"character-count"}},[_c(\'div\',{staticClass:"g-characterCountWithCustomRows-form-group"},[_c(\'label\',{staticClass:"g-characterCountWithCustomRows-label",attrs:{"for":customRows}},[_v("\\n\\n      Full address\\n    \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-characterCountWithCustomRows-textarea js-character-count",attrs:{"id":customRows,"name":"custom","rows":"8"}}),_v(" "),_c(\'span\',{staticClass:"g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message",attrs:{"aria-live":"polite","id":customRowsInfo}},[_v("\\nYou have 10 characters remaining\\n\\n")])])])}'
  )
});
