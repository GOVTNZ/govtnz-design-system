<template>
  <div
    class="g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error"
  >
    <label
      class="g-selectWithHintTextAndErrorMessage-label"
      v-bind:for="select2"
    >
      Label text goes here
    </label>

    <span
      class="g-selectWithHintTextAndErrorMessage-hint"
      v-bind:id="select2Hint"
    >
      Hint text goes here
    </span>

    <span
      class="g-selectWithHintTextAndErrorMessage-error-message"
      v-bind:id="select2Error"
    >
      Error message goes here
    </span>

    <select
      v-bind:aria-describedby="computed__ariaDescribedby"
      class="g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error"
      v-bind:id="select2"
      v-bind:name="name"
      v-bind:multiple="multiple"
    >
      Govt.NZ frontend option 1 Govt.NZ frontend option 2 Govt.NZ frontend
      option 3
    </select>
  </div> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    select2: { type: String, required: false },
    select2Hint: { type: String, required: false },
    select2Error: { type: String, required: false },
    name: { type: String, required: true },
    multiple: { type: Boolean, default: false, required: false }
  },
  computed: {
    computed__ariaDescribedby() {
      return +this.select2Hint + +this.select2Error;
    }
  }
});</script
><style scoped>
.g-selectWithHintTextAndErrorMessage-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-selectWithHintTextAndErrorMessage-form-group {
    margin-bottom: 30px;
  }
}
.g-selectWithHintTextAndErrorMessage-form-group
  .g-selectWithHintTextAndErrorMessage-form-group:last-of-type {
  margin-bottom: 0;
}
.g-selectWithHintTextAndErrorMessage-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-selectWithHintTextAndErrorMessage-form-group--error
  .g-selectWithHintTextAndErrorMessage-form-group {
  padding: 0;
  border: 0;
}
.g-selectWithHintTextAndErrorMessage-error-message {
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
  .g-selectWithHintTextAndErrorMessage-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithHintTextAndErrorMessage-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-selectWithHintTextAndErrorMessage-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-selectWithHintTextAndErrorMessage-hint {
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
  .g-selectWithHintTextAndErrorMessage-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithHintTextAndErrorMessage-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-selectWithHintTextAndErrorMessage-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-selectWithHintTextAndErrorMessage-fieldset__legend
  + .g-selectWithHintTextAndErrorMessage-hint {
  margin-top: -5px;
}
.g-selectWithHintTextAndErrorMessage-label {
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
  .g-selectWithHintTextAndErrorMessage-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithHintTextAndErrorMessage-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-selectWithHintTextAndErrorMessage-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-selectWithHintTextAndErrorMessage-label {
    color: #000000;
  }
}
.g-selectWithHintTextAndErrorMessage-character-count
  .g-selectWithHintTextAndErrorMessage-form-group {
  margin-bottom: 5px;
}
.g-selectWithHintTextAndErrorMessage-select {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  padding: 0.4rem 2.5rem 0.5rem 0.6rem;
  border: 1px solid #000000;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  border-radius: 0;
  background-position: right 0.7em top 50%;
  background-size: 1rem auto;
  background-image: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E");
}
@media print {
  .g-selectWithHintTextAndErrorMessage-select {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithHintTextAndErrorMessage-select {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-selectWithHintTextAndErrorMessage-select {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-selectWithHintTextAndErrorMessage-select:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-selectWithHintTextAndErrorMessage-select:focus::-ms-value {
  color: #ffffff;
  background-color: #005ea5;
}
.g-selectWithHintTextAndErrorMessage-select--error {
  border: 1px solid #b10e1e;
}
.g-selectWithHintTextAndErrorMessage-select::-ms-expand {
  display: none;
}
</style>
