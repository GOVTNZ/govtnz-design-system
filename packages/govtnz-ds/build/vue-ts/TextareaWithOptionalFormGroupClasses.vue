<template>
  <div class="g-textareaWithOptionalFormGroupClasses-form-group extra-class">
    <label
      class="g-textareaWithOptionalFormGroupClasses-label"
      v-bind:for="textareaWithPageHeading"
    >
      Full address
    </label>

    <textarea
      class="g-textareaWithOptionalFormGroupClasses-textarea"
      v-bind:id="textareaWithPageHeading"
      name="address"
      rows="5"
    />
  </div> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { textareaWithPageHeading: { type: String, required: false } },
  computed: {}
});</script
><style scoped>
.g-textareaWithOptionalFormGroupClasses-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textareaWithOptionalFormGroupClasses-form-group {
    margin-bottom: 30px;
  }
}
.g-textareaWithOptionalFormGroupClasses-form-group
  .g-textareaWithOptionalFormGroupClasses-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textareaWithOptionalFormGroupClasses-form-group--error
  .g-textareaWithOptionalFormGroupClasses-form-group {
  padding: 0;
  border: 0;
}
.g-textareaWithOptionalFormGroupClasses-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-textareaWithOptionalFormGroupClasses-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithOptionalFormGroupClasses-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaWithOptionalFormGroupClasses-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textareaWithOptionalFormGroupClasses-label {
    color: #000000;
  }
}
.g-textareaWithOptionalFormGroupClasses-character-count
  .g-textareaWithOptionalFormGroupClasses-textarea {
  margin-bottom: 5px;
}
.g-textareaWithOptionalFormGroupClasses-textarea {
  font-family: Arial, sans-serif;
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
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
}
@media print {
  .g-textareaWithOptionalFormGroupClasses-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithOptionalFormGroupClasses-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textareaWithOptionalFormGroupClasses-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textareaWithOptionalFormGroupClasses-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaWithOptionalFormGroupClasses-textarea {
    margin-bottom: 30px;
  }
}
</style>
