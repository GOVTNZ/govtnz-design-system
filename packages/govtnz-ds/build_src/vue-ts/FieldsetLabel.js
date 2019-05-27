import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    hintId: { type: String, required: false },
    hint: { required: false, default: "Hint text" }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fieldsetLabel-hint",attrs:{"id":hintId}},[_t("hint")],2)}'
  )
});
