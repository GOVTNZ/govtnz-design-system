import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    hintId: { type: String, required: false },
    children: {
      required: false,
      default: "Legend and other fieldset contents..."
    }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fieldset-form-group"},[_c(\'fieldset\',{staticClass:"g-fieldset",attrs:{"aria-describedby":hintId}},[_t("default")],2)])}'
  )
});
