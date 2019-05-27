import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function("with(this){return _m(0)}"),
  staticRenderFns: new Function([
    'with(this){return _c(\'table\',{staticClass:"g-tableTableWithHeadAndCaption-table"},[_c(\'caption\',{staticClass:"g-tableTableWithHeadAndCaption-table__caption g-tableTableWithHeadAndCaption-heading-m"},[_v("\\n\\n    Caption 1: Months and rates\\n  \\n\\n")]),_v(" "),_c(\'thead\',{staticClass:"g-tableTableWithHeadAndCaption-table__head"},[_c(\'tr\',{staticClass:"g-tableTableWithHeadAndCaption-table__row"},[_v("\\n\\n      Month you apply\\n      \\n        Rate for bicycles\\n      \\n      \\n        Rate for vehicles\\n      \\n    \\n\\n")])]),_v(" "),_c(\'tbody\',{staticClass:"g-tableTableWithHeadAndCaption-table__body"},[_c(\'tr\',{staticClass:"g-tableTableWithHeadAndCaption-table__row"},[_v("\\n\\n      January\\n      $85\\n      $95\\n    \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tableTableWithHeadAndCaption-table__row"},[_v("\\n\\n      February\\n      $75\\n      $55\\n    \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tableTableWithHeadAndCaption-table__row"},[_v("\\n\\n      March\\n      $165\\n      $125\\n    \\n\\n")])])])}'
  ])
});
