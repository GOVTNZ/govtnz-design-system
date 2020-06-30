<template>
  <div v-bind:class="computed__class">
    <fieldset
      v-bind:aria-describedby="computed__ariaDescribedby"
      class="g-fieldsetBlock-fieldset"
    >
      <legend class="g-fieldsetBlock-fieldset__legend">
        <slot name="legend"></slot>
      </legend>

      <div class="g-fieldsetBlock-hint" v-bind:id="hintId">
        <slot name="hint"></slot>
      </div>

      <div class="g-fieldsetBlock-error-message" v-bind:id="errorId">
        <span class="g-fieldsetBlock-visually-hidden">
          Error:
        </span>

        <slot name="error"></slot>
      </div>

      <div>
        <slot></slot>
      </div>
    </fieldset>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    errorId: { type: String, required: false },
    hintId: { type: String, required: false },
    legend: { required: false, default: "Legend text" },
    hint: { required: false, default: "Hint text" },
    error: { required: false, default: "Error text" },
    children: { required: false, default: "Fieldset contents" }
  },
  computed: {
    computed__class() {
      return (
        "g-fieldsetBlock-form-group " +
        (this.errorId ? " g-fieldsetBlock-form-group--error" : "")
      );
    },
    computed__ariaDescribedby() {
      return this.hintId + this.errorId;
    }
  }
});
</script>
<style scoped>
.g-fieldsetBlock-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlock-form-group {
    margin-bottom: 30px;
  }
}
.g-fieldsetBlock-form-group .g-fieldsetBlock-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fieldsetBlock-form-group--error {
  padding-left: 15px;
  border-left: 5px solid g-theme-error-border-color;
}
.g-fieldsetBlock-form-group--error .g-fieldsetBlock-form-group {
  padding: 0;
  border: 0;
}
.g-fieldsetBlock-error-message {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: g-theme-error-color;
}
@media print {
  .g-fieldsetBlock-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlock-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetBlock-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldsetBlock-fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
.g-fieldsetBlock-fieldset:after {
  content: "";
  display: block;
  clear: both;
}
.g-fieldsetBlock-fieldset__legend {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-legend-color;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 24px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
}
@media print {
  .g-fieldsetBlock-fieldset__legend {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlock-fieldset__legend {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetBlock-fieldset__legend {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fieldsetBlock-fieldset__legend {
    color: g-theme-print-color;
  }
}
.g-fieldsetBlock-hint {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: g-theme-hint-color;
}
.g-fieldsetBlock-fieldset__legend + .g-fieldsetBlock-hint {
  margin-top: -16px;
}
@media print {
  .g-fieldsetBlock-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlock-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetBlock-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldsetBlock-visually-hidden {
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
.g-fieldsetBlock-hint > * {
  margin-top: 0px;
}
</style>
