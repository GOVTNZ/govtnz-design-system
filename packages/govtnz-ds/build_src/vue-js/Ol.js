import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    numbered: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-ol-list" + (this.numbered ? " g-ol-list--number" : "");
    }
  },
  render: new Function(
    "with(this){return _c('ol',{class:computed__class},[_t(\"default\")],2)}"
  )
});
