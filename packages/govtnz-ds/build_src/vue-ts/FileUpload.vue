<template>
  <div class="g-fileUpload__form-group">
    <label class="g-fileUpload__label" v-bind:for="id">
      Upload a file
    </label>

    <input
      class="g-fileUpload__input"
      v-bind:id="id"
      v-bind:name="name"
      type="file"
      v-bind:required="required"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: String, required: false },
    required: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true }
  },
  computed: {}
});
</script>
<style scoped>
.g-fileUpload__form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fileUpload__form-group {
    margin-bottom: 30px;
  }
}
.g-fileUpload__form-group .g-fileUpload__form-group:last-of-type {
  margin-bottom: 0;
}
.g-fileUpload__form-group--error .g-fileUpload__form-group {
  padding: 0;
  border: 0;
}
.g-fileUpload__input {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: g-theme-color;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-fileUpload__input {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUpload__input {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUpload__input {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUpload__input {
    color: g-theme-print-color;
  }
}
.g-fileUpload__input {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-color;
}
@media print {
  .g-fileUpload__input {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fileUpload__input {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fileUpload__input {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fileUpload__input {
    color: g-theme-print-color;
  }
}
.g-fileUpload__input:focus {
  outline: 3px solid g-theme-focus-ring-color;
  outline-offset: 0;
}
.g-fileUpload__label {
  font-family: var(--g-theme-font-family, Arial, sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: g-theme-color;
  display: block;
  margin-bottom: 5px;
}
@media (min-width: 40.0625em) {
  .g-fileUpload__label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
</style>
