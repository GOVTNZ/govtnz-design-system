import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    fileUpload3: { type: String, required: false },
    fileUpload3Hint: { type: String, required: false },
    fileUpload3Error: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false }
  },
  computed: {
    computed__ariaDescribedby() {
      return +this.fileUpload3Hint + +this.fileUpload3Error;
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"},[_c(\'label\',{staticClass:"g-fileUploadWithErrorMessage-label",attrs:{"for":fileUpload3}},[_v("\\n\\n    Upload a file\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-fileUploadWithErrorMessage-hint",attrs:{"id":fileUpload3Hint}},[_v("\\n\\n    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or\\n    in an app like iPhoto.\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-fileUploadWithErrorMessage-error-message",attrs:{"id":fileUpload3Error}},[_v("\\n\\n    Error message goes here\\n  \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error",attrs:{"aria-describedby":computed__ariaDescribedby,"id":fileUpload3,"name":name,"type":"file","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus}})])}'
  )
});
