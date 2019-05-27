import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { children: { required: false, default: "Legend text" } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'legend\',{staticClass:"g-fieldset__legend"},[_t("default")],2)}'
  )
});
