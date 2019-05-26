<template>
  <div class="g-textareaWithCustomRows-form-group">
    <label class="g-textareaWithCustomRows-label" v-bind:for="fullAddress">
      Full address
    </label>

    <textarea
      class="g-textareaWithCustomRows-textarea"
      v-bind:id="fullAddress"
      name="address"
      rows="8"
    />
  </div> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { fullAddress: { type: String, required: false } },
  computed: {}
});</script
><style scoped>
.g-textareaWithCustomRows-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textareaWithCustomRows-form-group {
    margin-bottom: 30px;
  }
}
.g-textareaWithCustomRows-form-group
  .g-textareaWithCustomRows-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textareaWithCustomRows-form-group--error
  .g-textareaWithCustomRows-form-group {
  padding: 0;
  border: 0;
}
.g-textareaWithCustomRows-label {
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
  .g-textareaWithCustomRows-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithCustomRows-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaWithCustomRows-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textareaWithCustomRows-label {
    color: #000000;
  }
}
.g-textareaWithCustomRows-character-count .g-textareaWithCustomRows-textarea {
  margin-bottom: 5px;
}
.g-textareaWithCustomRows-textarea {
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
  .g-textareaWithCustomRows-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithCustomRows-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textareaWithCustomRows-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textareaWithCustomRows-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaWithCustomRows-textarea {
    margin-bottom: 30px;
  }
}
</style>
