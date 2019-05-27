import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    inline: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Radio components" }
  },
  computed: {
    computed__class() {
      return "g-radios" + (this.inline ? " g-radios--inline" : "");
    }
  },
  render: new Function(
    "with(this){return _c('div',{class:computed__class},[_t(\"default\")],2)}"
  )
});
