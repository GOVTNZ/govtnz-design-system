import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    fakeFocus: { type: Boolean, default: false, required: false },
    gov1: { type: String, required: false },
    hintId: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false }
  },
  computed: {
    computed__class() {
      return "g-radios__input" + (this.fakeFocus ? " :focus" : "");
    }
  },
  render: new Function(
    'with(this){return _c(\'input\',{class:computed__class,attrs:{"aria-describedby":hintId,"id":gov1,"name":name,"type":"radio","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus},domProps:{"value":value,"checked":checked}})}'
  )
});
