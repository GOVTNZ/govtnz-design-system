import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    select1: { type: String, required: false },
    name: { type: String, required: true },
    multiple: { type: Boolean, default: false, required: false },
    selected: { type: Boolean, default: false, required: false },
    selected2: { type: Boolean, default: false, required: false },
    selected3: { type: Boolean, default: false, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-selectWithFullWidthOverride-form-group"},[_c(\'label\',{staticClass:"g-selectWithFullWidthOverride-label",attrs:{"for":select1}},[_v("\\n\\n    Label text goes here\\n  \\n\\n")]),_v(" "),_c(\'select\',{staticClass:"g-selectWithFullWidthOverride-select g-!-width-full",attrs:{"id":select1,"name":name,"multiple":multiple}},[_c(\'option\',{attrs:{"value":"1"},domProps:{"selected":selected}},[_v("\\nGovt.NZ frontend option 1\\n\\n")]),_v(" "),_c(\'option\',{attrs:{"value":"2"},domProps:{"selected":selected2}},[_v("\\nGovt.NZ frontend option 2\\n\\n")]),_v(" "),_c(\'option\',{attrs:{"disabled":"","value":"3"},domProps:{"selected":selected3}},[_v("\\nGovt.NZ frontend option 3\\n\\n")])])])}'
  )
});
