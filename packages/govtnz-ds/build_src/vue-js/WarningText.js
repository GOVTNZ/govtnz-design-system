import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function("with(this){return _m(0)}"),
  staticRenderFns: new Function([
    'with(this){return _c(\'div\',{staticClass:"g-warning-text"},[_c(\'span\',{staticClass:"g-warning-text__icon",attrs:{"aria-hidden":"true"}},[_v("\\n!\\n\\n")]),_v(" "),_c(\'strong\',{staticClass:"g-warning-text__text"},[_c(\'span\',{staticClass:"g-warning-text__assistive"},[_v("\\nWarning\\n\\n")]),_v("\\n\\n\\n    You can be fined up to $5,000 if you don’t register.\\n  \\n\\n")])])}'
  ])
});
