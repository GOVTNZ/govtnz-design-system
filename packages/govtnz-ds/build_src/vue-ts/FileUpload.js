import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    fileUpload1: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fileUpload-form-group"},[_c(\'label\',{staticClass:"g-fileUpload-label",attrs:{"for":fileUpload1}},[_v("\\n\\n    Upload a file\\n  \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-file-upload",attrs:{"id":fileUpload1,"name":name,"type":"file","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus}})])}'
  )
});
