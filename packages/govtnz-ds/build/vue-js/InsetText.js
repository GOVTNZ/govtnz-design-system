import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-inset-text"},[_v("\\n\\n  It can take up to 8 weeks to register a lasting power of attorney if there are\\n  no mistakes in the application.\\n\\n\\n")])}'
  )
});
