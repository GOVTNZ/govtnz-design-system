import Vue from "vue";

const constants = {
  alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
  alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
  alignMd: { start: "start-md", center: "center-md", end: "end-md" },
  alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    alignXs: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignSm: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignMd: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignLg: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    isReversed: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Columns..." }
  },
  computed: {
    computed__class() {
      return (
        "g-flex-row" +
        (constants[this.alignXs] !== undefined
          ? ` ${constants[this.alignXs]}`
          : "") +
        (constants[this.alignSm] !== undefined
          ? ` ${constants[this.alignSm]}`
          : "") +
        (constants[this.alignMd] !== undefined
          ? ` ${constants[this.alignMd]}`
          : "") +
        (constants[this.alignLg] !== undefined
          ? ` ${constants[this.alignLg]}`
          : "") +
        (this.isReversed ? " g-flex-reverse" : "")
      );
    }
  },
  render: new Function(
    "with(this){return _c('div',{class:computed__class},[_t(\"default\")],2)}"
  )
});
