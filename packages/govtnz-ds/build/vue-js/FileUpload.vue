<template>
  <div class="g-fileUpload-form-group">
    <label class="g-fileUpload-label" v-bind:for="fileUpload1">
      Upload a file
    </label>

    <input
      class="g-file-upload"
      v-bind:id="fileUpload1"
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
    fileUpload1: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false }
  },
  computed: {}
});
</script>
<style scoped>
.g-fileUpload-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fileUpload-form-group {
    margin-bottom: 30px;
  }
}
.g-fileUpload-form-group .g-fileUpload-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fileUpload-form-group--error .g-fileUpload-form-group {
  padding: 0;
  border: 0;
}
.g-fileUpload-label {
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
  .g-fileUpload-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUpload-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUpload-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUpload-label {
    color: #000000;
  }
}
.g-fileUpload-character-count .g-fileUpload-form-group {
  margin-bottom: 5px;
}
.g-file-upload {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
}
@media print {
  .g-file-upload {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-file-upload {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-file-upload {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-file-upload {
    color: #000000;
  }
}
.g-file-upload:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-fileUpload-hint > * {
  margin-top: 0px;
}
</style>
