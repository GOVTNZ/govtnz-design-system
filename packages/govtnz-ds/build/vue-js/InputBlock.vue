<template>
  <div v-bind:class="computed__class">
    <label class="g-inputBlock-label" v-bind:for="inputId">
      <slot name="label"></slot>
    </label>

    <div class="g-inputBlock-hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </div>

    <div class="g-inputBlock-error-message" v-bind:id="errorId">
      <span class="g-inputBlock-visually-hidden">
        Error:
      </span>

      <slot name="error"></slot>
    </div>

    <input
      v-bind:aria-describedby="computed__ariaDescribedby"
      v-bind:class="computed__class2"
      v-bind:id="inputId"
      v-bind:name="name"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
      v-bind:value="value"
      v-bind:min="min"
      v-bind:max="max"
      v-bind:type="type"
      v-bind:spellcheck="spellCheck"
      v-bind:maxlength="maxLength"
      v-bind:autocomplete="autoComplete"
    />
  </div>
</template>
<script>
import Vue from "vue";

const constants = {
  width: {
    "2": "g-inputBlock-input--width-2",
    "3": "g-inputBlock-input--width-3",
    "4": "g-inputBlock-input--width-4",
    "5": "g-inputBlock-input--width-5",
    "10": "g-inputBlock-input--width-10",
    "20": "g-inputBlock-input--width-20",
    "30": "g-inputBlock-input--width-30"
  }
};

export default Vue.extend({
  props: {
    error: {
      type: Boolean,
      default: false,
      required: false,
      default: "Example text"
    },
    inputId: { type: String, required: false },
    label: { required: false, default: "Example text" },
    hint: { required: false, default: "Example text" },
    hintId: { type: String, required: false },
    errorId: { type: String, required: false },
    width: {
      type: String,
      validator: value => {
        return ["30", "20", "10", "5", "4", "3", "2"].indexOf(value) !== -1;
      },
      required: false
    },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    value: { type: String, required: false },
    min: { type: String, required: false },
    max: { type: String, required: false },
    type: { type: String, required: true },
    spellCheck: { type: Boolean, default: false, required: false },
    maxLength: { type: String, required: false },
    autoComplete: { type: String, required: true }
  },
  computed: {
    computed__class() {
      return (
        "g-inputBlock-form-group" +
        (this.error ? " g-inputBlock-form-group--error" : "")
      );
    },
    computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    },
    computed__class2() {
      return (
        "g-inputBlock-input" +
        (constants.width[this.width] !== undefined
          ? ` ${constants.width[this.width]}`
          : "") +
        (this.error ? " g-inputBlock-input--error" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-inputBlock-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-inputBlock-form-group {
    margin-bottom: 30px;
  }
}
.g-inputBlock-form-group .g-inputBlock-form-group:last-of-type {
  margin-bottom: 0;
}
.g-inputBlock-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-inputBlock-form-group--error .g-inputBlock-form-group {
  padding: 0;
  border: 0;
}
.g-inputBlock-error-message {
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
  .g-inputBlock-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-inputBlock-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-inputBlock-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-inputBlock-hint {
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
  .g-inputBlock-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-inputBlock-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-inputBlock-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset__legend + .g-inputBlock-hint {
  margin-top: -5px;
}
.g-inputBlock-label {
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
  .g-inputBlock-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-inputBlock-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-inputBlock-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-inputBlock-label {
    color: #000000;
  }
}
.g-inputBlock-character-count .g-inputBlock-form-group {
  margin-bottom: 5px;
}
.g-inputBlock-input {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-top: 0;
  padding: 0.5rem;
  border: 1px solid #2a2a2a;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media print {
  .g-inputBlock-input {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-inputBlock-input {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-inputBlock-input {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-inputBlock-input:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-inputBlock-input::-webkit-outer-spin-button,
.g-inputBlock-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.g-inputBlock-input--error {
  border: 1px solid #b10e1e;
}
.g-inputBlock-input--width-30 {
  max-width: 59ex;
}
.g-inputBlock-input--width-20 {
  max-width: 41ex;
}
.g-inputBlock-input--width-10 {
  max-width: 23ex;
}
.g-inputBlock-input--width-5 {
  max-width: 10.8ex;
}
.g-inputBlock-input--width-4 {
  max-width: 9ex;
}
.g-inputBlock-input--width-3 {
  max-width: 7.2ex;
}
.g-inputBlock-input--width-2 {
  max-width: 5.4ex;
}
.g-inputBlock-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
}
.g-inputBlock-hint > * {
  margin-top: 0px;
}
</style>
