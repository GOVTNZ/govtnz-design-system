<template>
  <div
    class="g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"
  >
    <fieldset
      v-bind:aria-describedby="computed__ariaDescribedby"
      class="g-fieldset"
    >
      <legend class="g-fieldset__legend">
        <slot name="legend"></slot>
      </legend>

      <div class="g-fieldsetBlockWithError-hint" v-bind:id="hintId">
        <slot name="hint"></slot>
      </div>

      <div class="g-fieldsetBlockWithError-error-message" v-bind:id="errorId">
        <span class="g-fieldsetBlockWithError-visually-hidden">
          Error:
        </span>

        <slot name="error"></slot>
      </div>

      <div class="g-fieldsetBlockWithError-children">
        <slot></slot>
      </div>
    </fieldset>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    hintId: { type: String, required: false },
    errorId: { type: String, required: false },
    legend: { required: false, default: "Legend text" },
    hint: { required: false, default: "Hint text" },
    error: { required: false, default: "Error text" },
    children: { required: false, default: "Fieldset contents" }
  },
  computed: {
    computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    }
  }
});
</script>
<style scoped>
.g-fieldsetBlockWithError-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlockWithError-form-group {
    margin-bottom: 30px;
  }
}
.g-fieldsetBlockWithError-form-group
  .g-fieldsetBlockWithError-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fieldsetBlockWithError-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-fieldsetBlockWithError-form-group--error
  .g-fieldsetBlockWithError-form-group {
  padding: 0;
  border: 0;
}
.g-fieldsetBlockWithError-error-message {
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
  .g-fieldsetBlockWithError-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlockWithError-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetBlockWithError-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
.g-fieldset:after {
  content: "";
  display: block;
  clear: both;
}
.g-fieldset__legend {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 0px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
}
@media print {
  .g-fieldset__legend {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldset__legend {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldset__legend {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-fieldset__legend {
    color: #000000;
  }
}
.g-fieldsetBlockWithError-hint {
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
  .g-fieldsetBlockWithError-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetBlockWithError-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetBlockWithError-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset__legend + .g-fieldsetBlockWithError-hint {
  margin-top: -5px;
}
.g-fieldsetBlockWithError-character-count .g-fieldsetBlockWithError-form-group {
  margin-bottom: 5px;
}
.g-fieldsetBlockWithError-visually-hidden {
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
.g-fieldsetBlockWithError-hint > * {
  margin-top: 0px;
}
</style>
