<template>
  <textarea
    v-bind:aria-describedby="describedById"
    class="g-textarea"
    v-bind:id="id"
    v-bind:name="name"
    v-bind:rows="rows"
    v-bind:required="required"
    v-bind:disabled="disabled"
    v-bind:readonly="readOnly"
    v-bind:cols="cols"
    v-bind:autofocus="autoFocus"
    v-bind:spellcheck="spellCheck"
    v-bind:autocomplete="autoComplete"
    v-bind:maxlength="maxLength"
    v-bind:value="value"
  />
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: String, required: false },
    describedById: { type: String, required: false },
    name: { type: String, required: true },
    required: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    rows: { type: String, required: false },
    cols: { type: String, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    spellCheck: { type: Boolean, default: false, required: false },
    autoComplete: { type: String, required: true },
    maxLength: { type: String, required: false },
    value: { type: String, required: false }
  },
  computed: {}
});
</script>
<style scoped>
.g-textarea-character-count .g-textarea {
  margin-bottom: 5px;
}
.g-textarea {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 40px;
  margin-bottom: 20px;
  padding: 5px;
  resize: vertical;
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  background-color: g-theme-form-background-color;
  color: g-theme-form-color;
}
.g-textarea:-webkit-autofill,
.g-textarea:-webkit-autofill:hover,
.g-textarea:-webkit-autofill:focus,
.g-textarea:valid,
.g-textarea:invalid {
  background-color: g-theme-form-background-color;
  -webkit-text-fill-color: g-theme-color !important;
  color: g-theme-color;
  border: 1px solid g-theme-form-border-color;
  box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
  -webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
}
@media print {
  .g-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textarea:focus {
  outline: 3px solid g-theme-focus-ring-color;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textarea {
    margin-bottom: 30px;
  }
}
.g-textarea-hint > * {
  margin-top: 0px;
}
</style>
