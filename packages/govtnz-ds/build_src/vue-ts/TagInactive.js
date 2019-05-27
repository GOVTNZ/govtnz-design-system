import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {},
  render: new Function(
    'with(this){return _c(\'strong\',{staticClass:"g-tagInactive-tag g-tagInactive-tag--inactive"},[_v("\\n\\n  alpha\\n\\n\\n")])}'
  )
});
