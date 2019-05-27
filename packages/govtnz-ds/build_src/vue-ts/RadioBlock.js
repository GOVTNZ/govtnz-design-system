import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    fakeFocus: { type: Boolean, default: false, required: false },
    radioId: { type: String, required: false },
    hintId: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false },
    label: { required: false, default: "Label text" }
  },
  computed: {
    computed__class() {
      return "g-radios__input" + (this.fakeFocus ? " :focus" : "");
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-radios__item"},[_c(\'input\',{class:computed__class,attrs:{"aria-describedby":hintId,"id":radioId,"name":name,"type":"radio","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus},domProps:{"value":value,"checked":checked}}),_v(" "),_c(\'label\',{staticClass:"g-radios-label g-radios__label",attrs:{"for":radioId}},[_t("label")],2)])}'
  )
});
