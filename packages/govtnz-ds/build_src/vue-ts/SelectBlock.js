import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    selectId: { type: String, required: false },
    label: { required: false, default: "Example label text" },
    hasError: { type: Boolean, default: false, required: true },
    name: { type: String, required: true },
    multiple: { type: Boolean, default: false, required: false },
    children: { required: false, default: "<option>Options</option>" }
  },
  computed: {
    computed__class() {
      return (
        "g-selectBlock-select" +
        (this.hasError ? " g-selectBlock-select--error" : "")
      );
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',[_c(\'label\',{staticClass:"g-selectBlock-label",attrs:{"for":selectId}},[_t("label")],2),_v(" "),_c(\'select\',{class:computed__class,attrs:{"id":selectId,"name":name,"multiple":multiple}},[_t("default")],2)])}'
  )
});
