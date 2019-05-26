import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'a\',{staticClass:"g-backLinkWithCustomText-back-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_t("default")],2)}'
  )
});
