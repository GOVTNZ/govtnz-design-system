import Vue from "vue";

const constants = {
  width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    width: {
      type: String,
      validator: value => {
        return ["fixed", "fluid"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: "Rows..." }
  },
  computed: {
    computed__class() {
      return constants[this.width] !== undefined ? constants[this.width] : "";
    }
  },
  render: new Function(
    "with(this){return _c('div',{class:computed__class},[_t(\"default\")],2)}"
  )
});
