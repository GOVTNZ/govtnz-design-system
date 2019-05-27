import Vue from "vue";

const constants = {
  styleSize: {
    large: "g-p-body-l",
    medium: "g-p-body-m",
    small: "g-p-body-s",
    "x-small": "g-p-body-xs"
  }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return constants[this.styleSize] !== undefined
        ? constants[this.styleSize]
        : "";
    }
  },
  render: new Function(
    "with(this){return _c('p',{class:computed__class},[_t(\"default\")],2)}"
  )
});
