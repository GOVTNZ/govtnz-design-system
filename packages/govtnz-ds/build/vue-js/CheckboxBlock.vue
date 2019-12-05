<template>
  <div v-bind:class="computed__class">
    <input
      v-bind:aria-describedby="hintId"
      class="g-checkboxes__input"
      v-bind:id="id"
      type="checkbox"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
      v-bind:name="name"
      v-bind:value="value"
      v-bind:checked="checked"
    />

    <label class="g-checkboxBlock-label g-checkboxes__label" v-bind:for="id">
      <slot name="label"></slot>
    </label>

    <div class="g-checkboxBlock-hint g-checkboxes__hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </div>

    <div class="g-checkboxBlock-error-message" v-bind:id="errorId">
      <span class="g-checkboxBlock-visually-hidden">
        Error:
      </span>

      <slot name="error"></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    errorId: { type: String, required: false },
    id: { type: String, required: false },
    hintId: { type: String, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false },
    label: { required: false, default: "Label text" },
    hint: { required: false, default: "Hint text" },
    error: { required: false, default: "Error text" }
  },
  computed: {
    computed__class() {
      return (
        "g-checkboxes__item" +
        (this.errorId ? " g-checkboxBlock-form-group--error" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-checkboxBlock-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-checkboxBlock-error-message {
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
  .g-checkboxBlock-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-checkboxBlock-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-checkboxBlock-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-checkboxBlock-hint {
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
  .g-checkboxBlock-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-checkboxBlock-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-checkboxBlock-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset__legend + .g-checkboxBlock-hint {
  margin-top: -5px;
}
.g-checkboxBlock-label {
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
  .g-checkboxBlock-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-checkboxBlock-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-checkboxBlock-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-checkboxBlock-label {
    color: #000000;
  }
}
.g-checkboxes__item {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 16px;
  padding: 0 0 0 40px;
  clear: left;
}
@media print {
  .g-checkboxes__item {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-checkboxes__item {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-checkboxes__item {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-checkboxes__item:last-child,
.g-checkboxes__item:last-of-type {
  margin-bottom: 0;
}
.g-checkboxes__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
}
.g-checkboxes__label {
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
.g-checkboxes__hint {
  display: block;
  padding-right: 15px;
  padding-left: 15px;
}
.g-checkboxes__input + .g-checkboxes__label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  background: transparent;
}
.g-checkboxes__input + .g-checkboxes__label::after {
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.g-checkboxes__input:focus + .g-checkboxes__label::before,
.g-checkboxes__input.\:focus + .g-checkboxes__label::before {
  outline: 3px solid transparent;
  outline-offset: 3px;
  box-shadow: 0 0 0 3px #ffbf47;
}
.g-checkboxes__input:checked + .g-checkboxes__label::after,
.g-checkboxes__input.\:checked + .g-checkboxes__label::after {
  opacity: 1;
}
.g-checkboxes__input:disabled + .g-checkboxes__label,
.g-checkboxes__input.\:disabled + .g-checkboxes__label {
  cursor: default;
}
.g-checkboxes__input:disabled + .g-checkboxes__label,
.g-checkboxes__input.\:disabled + .g-checkboxes__label {
  opacity: 0.5;
}
.g-checkboxBlock-visually-hidden {
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
.g-checkboxBlock-hint > * {
  margin-top: 0px;
}
</style>
