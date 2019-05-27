import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    selectId: { type: String, required: false },
    name: { type: String, required: true },
    multiple: { type: Boolean, default: false, required: false },
    children: { required: false, default: "<option>Options</option>" }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'select\',{staticClass:"g-select",attrs:{"id":selectId,"name":name,"multiple":multiple}},[_t("default")],2)}'
  )
});
