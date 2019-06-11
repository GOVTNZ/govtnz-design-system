import Vue from "vue";

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" },
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    disabled: { type: Boolean, default: false, required: false },
    level: {
      type: String,
      validator: value => {
        return ["secondary", "warning"].indexOf(value) !== -1;
      },
      required: true
    },
    name: { type: String, required: false },
    type: {
      type: String,
      validator: value => {
        return ["Submit", "Reset", "Button"].indexOf(value) !== -1;
      },
      required: false
    },
    children: {
      required: false,
      default: "\n            Example text\n          "
    }
  },
  computed: {
    computed__ariaDisabled() {
      return this.disabled ? "true" : "";
    },
    computed__class() {
      return (
        "g-button" +
        (this.disabled ? " g-button--disabled" : "") +
        (constants[this.level] !== undefined ? ` ${constants[this.level]}` : "")
      );
    },
    computed__disabled() {
      return this.disabled ? "true" : "";
    },
    computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'button\',{class:computed__class,attrs:{"aria-disabled":computed__ariaDisabled,"disabled":computed__disabled,"type":computed__type,"name":name}},[_t("default")],2)}'
  )
});
