import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    bulleted: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-ul-list" + (this.bulleted ? " g-ul-list--bullet" : "");
    }
  },
  render: new Function(
    "with(this){return _c('ul',{class:computed__class},[_t(\"default\")],2)}"
  )
});
