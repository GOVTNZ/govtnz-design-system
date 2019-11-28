<template>
  <div class="g-fileUploadWithHintText-form-group">
    <label class="g-fileUploadWithHintText-label" v-bind:for="fileUpload2">
      Upload your photo
    </label>

    <span class="g-fileUploadWithHintText-hint" v-bind:id="fileUpload2Hint">
      Your photo may be in your Pictures, Photos, Downloads or Desktop folder.
      Or in an app like iPhoto.
    </span>

    <input
      v-bind:aria-describedby="fileUpload2Hint"
      class="g-fileUploadWithHintText-file-upload"
      v-bind:id="fileUpload2"
      v-bind:name="name"
      type="file"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
    />
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    fileUpload2: { type: String, required: false },
    fileUpload2Hint: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false }
  },
  computed: {}
});
</script>
<style scoped>
.g-fileUploadWithHintText-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithHintText-form-group {
    margin-bottom: 30px;
  }
}
.g-fileUploadWithHintText-form-group
  .g-fileUploadWithHintText-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fileUploadWithHintText-form-group--error
  .g-fileUploadWithHintText-form-group {
  padding: 0;
  border: 0;
}
.g-fileUploadWithHintText-hint {
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
  .g-fileUploadWithHintText-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithHintText-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithHintText-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fileUploadWithHintText-fieldset__legend + .g-fileUploadWithHintText-hint {
  margin-top: -5px;
}
.g-fileUploadWithHintText-label {
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
  .g-fileUploadWithHintText-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithHintText-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithHintText-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUploadWithHintText-label {
    color: #000000;
  }
}
.g-fileUploadWithHintText-character-count .g-fileUploadWithHintText-form-group {
  margin-bottom: 5px;
}
.g-fileUploadWithHintText-file-upload {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
}
@media print {
  .g-fileUploadWithHintText-file-upload {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUploadWithHintText-file-upload {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUploadWithHintText-file-upload {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUploadWithHintText-file-upload {
    color: #000000;
  }
}
.g-fileUploadWithHintText-file-upload:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-fileUploadWithHintText-hint > * {
  margin-top: 0px;
}
</style>
