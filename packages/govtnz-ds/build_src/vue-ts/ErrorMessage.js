import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function(
    'with(this){return _c(\'span\',{staticClass:"g-error-message"},[_v("\\n\\n  Error message about full name goes here\\n\\n\\n")])}'
  )
});
