<template>
  <div class="g-textareaWithDefaultValue-form-group">
    <label class="g-textareaWithDefaultValue-label" v-bind:for="fullAddress">
      Full address
    </label>

    <textarea
      class="g-textareaWithDefaultValue-textarea"
      v-bind:id="fullAddress"
      name="address"
      rows="5"
    >
221B Baker Street
London
NW1 6XE


</textarea
    >
  </div> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { fullAddress: { type: String, required: false } },
  computed: {}
});</script
><style scoped>
.g-textareaWithDefaultValue-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textareaWithDefaultValue-form-group {
    margin-bottom: 30px;
  }
}
.g-textareaWithDefaultValue-form-group
  .g-textareaWithDefaultValue-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textareaWithDefaultValue-form-group--error
  .g-textareaWithDefaultValue-form-group {
  padding: 0;
  border: 0;
}
.g-textareaWithDefaultValue-label {
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
  .g-textareaWithDefaultValue-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithDefaultValue-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaWithDefaultValue-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textareaWithDefaultValue-label {
    color: #000000;
  }
}
.g-textareaWithDefaultValue-character-count
  .g-textareaWithDefaultValue-textarea {
  margin-bottom: 5px;
}
.g-textareaWithDefaultValue-textarea {
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
  .g-textareaWithDefaultValue-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithDefaultValue-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textareaWithDefaultValue-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textareaWithDefaultValue-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaWithDefaultValue-textarea {
    margin-bottom: 30px;
  }
}
</style>
