import Vue from "vue";

const constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return (
          ["xlarge", "large", "medium", "small", "xsmall", "xxsmall"].indexOf(
            value
          ) !== -1
        );
      },
      required: true
    },
    marginBottom8: { type: Boolean, default: false, required: false },
    id: { type: String, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return (
        (constants[this.styleSize] !== undefined
          ? ` ${constants[this.styleSize]}`
          : "") + (this.marginBottom8 ? " g-heading-mb-8" : "")
      );
    }
  },
  render: new Function(
    'with(this){return _c(\'h6\',{class:computed__class,attrs:{"id":id}},[_t("default")],2)}'
  )
});
