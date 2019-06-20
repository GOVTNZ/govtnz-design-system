<template>
  <div class="g-selectWithFullWidthOverride-form-group">
    <label class="g-selectWithFullWidthOverride-label" v-bind:for="select1">
      Label text goes here
    </label>

    <select
      class="g-selectWithFullWidthOverride-select g-!-width-full"
      v-bind:id="select1"
      v-bind:name="name"
      v-bind:multiple="multiple"
    >
      <option value="1" v-bind:selected="selected">
        Govt.NZ frontend option 1
      </option>

      <option v-bind:selected="selected2" value="2">
        Govt.NZ frontend option 2
      </option>

      <option disabled value="3" v-bind:selected="selected3">
        Govt.NZ frontend option 3
      </option>
    </select>
  </div> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    select1: { type: String, required: false },
    name: { type: String, required: true },
    multiple: { type: Boolean, default: false, required: false },
    selected: { type: Boolean, default: false, required: false },
    selected2: { type: Boolean, default: false, required: false },
    selected3: { type: Boolean, default: false, required: false }
  },
  computed: {}
});</script
><style scoped>
.g-selectWithFullWidthOverride-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-selectWithFullWidthOverride-form-group {
    margin-bottom: 30px;
  }
}
.g-selectWithFullWidthOverride-form-group
  .g-selectWithFullWidthOverride-form-group:last-of-type {
  margin-bottom: 0;
}
.g-selectWithFullWidthOverride-form-group--error
  .g-selectWithFullWidthOverride-form-group {
  padding: 0;
  border: 0;
}
.g-selectWithFullWidthOverride-label {
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
  .g-selectWithFullWidthOverride-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithFullWidthOverride-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-selectWithFullWidthOverride-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-selectWithFullWidthOverride-label {
    color: #000000;
  }
}
.g-selectWithFullWidthOverride-character-count
  .g-selectWithFullWidthOverride-form-group {
  margin-bottom: 5px;
}
.g-selectWithFullWidthOverride-select {
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
  .g-selectWithFullWidthOverride-select {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-selectWithFullWidthOverride-select {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-selectWithFullWidthOverride-select {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-selectWithFullWidthOverride-select:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-selectWithFullWidthOverride-select option:active,
.g-selectWithFullWidthOverride-select option:checked {
  color: #ffffff;
  background-color: #005ea5;
}
.g-\!-width-full {
  width: 100% !important;
}
.g-selectWithFullWidthOverride-select::-ms-expand {
  display: none;
}
.g-selectWithFullWidthOverride-hint > * {
  margin-top: 0px;
}
</style>
