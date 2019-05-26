import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function("with(this){return _m(0)}"),
  staticRenderFns: new Function([
    'with(this){return _c(\'table\',{staticClass:"g-table"},[_c(\'tbody\',{staticClass:"g-table__body"},[_c(\'tr\',{staticClass:"g-table__row"},[_v("\\n\\n      January\\n      $85\\n      $95\\n    \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-table__row"},[_v("\\n\\n      February\\n      $75\\n      $55\\n    \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-table__row"},[_v("\\n\\n      March\\n      $165\\n      $125\\n    \\n\\n")])])])}'
  ])
});
