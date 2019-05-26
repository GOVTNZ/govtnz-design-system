import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { children: { required: false, default: "Example Text" } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-radios-form-divider"},[_t("default")],2)}'
  )
});
