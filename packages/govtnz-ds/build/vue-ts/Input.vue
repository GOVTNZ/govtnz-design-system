<template>
  <input
    v-bind:aria-describedby="describedBy"
    v-bind:class="computed__class"
    v-bind:id="id"
    v-bind:name="name"
    type="text"
    v-bind:required="required"
    v-bind:disabled="disabled"
    v-bind:readonly="readOnly"
    v-bind:autofocus="autoFocus"
    v-bind:value="value"
    v-bind:spellcheck="spellCheck"
    v-bind:maxlength="maxLength"
    v-bind:autocomplete="autoComplete"
  />
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  width: {
    "2": "g-input--width-2",
    "3": "g-input--width-3",
    "4": "g-input--width-4",
    "5": "g-input--width-5",
    "10": "g-input--width-10",
    "20": "g-input--width-20",
    "30": "g-input--width-30"
  }
};

export default Vue.extend({
  props: {
    width: {
      type: String,
      validator: value => {
        return ["30", "20", "10", "5", "4", "3", "2"].indexOf(value) !== -1;
      },
      required: false
    },
    error: { type: Boolean, default: false, required: false },
    id: { type: String, required: false },
    describedBy: { type: String, required: false },
    required: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    value: { type: String, required: false },
    spellCheck: { type: Boolean, default: false, required: false },
    maxLength: { type: String, required: false },
    autoComplete: { type: String, required: true }
  },
  computed: {
    computed__class() {
      return (
        "g-input " +
        (constants.width[this.width] !== undefined
          ? ` ${constants.width[this.width]}`
          : "") +
        (this.error ? " g-input--error" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-input {
  font-family: g-theme-font-family;
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
  border: 1px solid g-theme-form-border-color;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: g-theme-form-background-color;
  color: g-theme-form-color;
}
.g-input:-webkit-autofill,
.g-input:-webkit-autofill:hover,
.g-input:-webkit-autofill:focus,
.g-input:valid,
.g-input:invalid {
  -webkit-text-fill-color: g-theme-color !important;
  background-color: g-theme-form-background-color;
  color: g-theme-form-color;
  border: 1px solid g-theme-form-border-color;
  box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
  -webkit-box-shadow: 0 0 0px 1000px g-theme-form-background-color inset;
}
@media print {
  .g-input {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-input {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-input {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-input:focus {
  outline: 3px solid g-theme-focus-ring-color;
  outline-offset: 0;
}
.g-input::-webkit-outer-spin-button,
.g-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.g-input--error {
  border: 1px solid g-theme-error-border-color;
}
.g-input--width-30 {
  max-width: 59ex;
}
.g-input--width-20 {
  max-width: 41ex;
}
.g-input--width-10 {
  max-width: 23ex;
}
.g-input--width-5 {
  max-width: 10.8ex;
}
.g-input--width-4 {
  max-width: 9ex;
}
.g-input--width-3 {
  max-width: 7.2ex;
}
.g-input--width-2 {
  max-width: 5.4ex;
}
.g-input-hint > * {
  margin-top: 0px;
}
</style>
