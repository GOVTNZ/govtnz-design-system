<template>
  <div
    class="g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"
  >
    <label class="g-fileUploadWithErrorMessage-label" v-bind:for="fileUpload3">
      Upload a file
    </label>

    <span class="g-fileUploadWithErrorMessage-hint" v-bind:id="fileUpload3Hint">
      Your photo may be in your Pictures, Photos, Downloads or Desktop folder.
      Or in an app like iPhoto.
    </span>

    <span
      class="g-fileUploadWithErrorMessage-error-message"
      v-bind:id="fileUpload3Error"
    >
      Error message goes here
    </span>

    <input
      v-bind:aria-describedby="computed__ariaDescribedby"
      class="g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error"
      v-bind:id="fileUpload3"
      v-bind:name="name"
      type="file"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
    />
  </div> </template
><script lang="ts">
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
  }
});</script
><style scoped>
.g-fileUploadWithErrorMessage-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithErrorMessage-form-group {
    margin-bottom: 30px;
  }
}
.g-fileUploadWithErrorMessage-form-group
  .g-fileUploadWithErrorMessage-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fileUploadWithErrorMessage-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-fileUploadWithErrorMessage-form-group--error
  .g-fileUploadWithErrorMessage-form-group {
  padding: 0;
  border: 0;
}
.g-fileUploadWithErrorMessage-error-message {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: #b10e1e;
}
@media print {
  .g-fileUploadWithErrorMessage-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithErrorMessage-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fileUploadWithErrorMessage-hint {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
}
@media print {
  .g-fileUploadWithErrorMessage-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithErrorMessage-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fileUploadWithErrorMessage-fieldset__legend
  + .g-fileUploadWithErrorMessage-hint {
  margin-top: -5px;
}
.g-fileUploadWithErrorMessage-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-fileUploadWithErrorMessage-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithErrorMessage-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-label {
    color: #000000;
  }
}
.g-fileUploadWithErrorMessage-character-count
  .g-fileUploadWithErrorMessage-form-group {
  margin-bottom: 5px;
}
.g-fileUploadWithErrorMessage-file-upload {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
}
@media print {
  .g-fileUploadWithErrorMessage-file-upload {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithErrorMessage-file-upload {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-file-upload {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUploadWithErrorMessage-file-upload {
    color: #000000;
  }
}
.g-fileUploadWithErrorMessage-file-upload:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-fileUploadWithErrorMessage-file-upload--error {
  border: 4px solid #b10e1e;
}
.g-fileUploadWithErrorMessage-hint > * {
  margin-top: 0px;
}
</style>
