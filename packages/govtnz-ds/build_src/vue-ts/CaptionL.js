import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { children: { required: false, default: "Example text" } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'span\',{staticClass:"g-caption-l"},[_t("default")],2)}'
  )
});
