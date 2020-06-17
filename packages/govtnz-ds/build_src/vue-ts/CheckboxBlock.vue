<template>
  <div v-bind:class="computed__class">
    <input
      v-bind:aria-describedby="hintId"
      class="g-checkboxes__input"
      v-bind:id="id"
      type="checkbox"
      v-bind:required="required"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
      v-bind:name="name"
      v-bind:value="value"
      v-bind:checked="checked"
    />

    <label class="g-checkboxes__label" v-bind:for="id">
      <slot name="label"></slot>
    </label>

    <div class="g-checkboxes__hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </div>

    <div class="g-error-message" v-bind:id="errorId">
      <span class="g-visually-hidden">
        Error:
      </span>

      <slot name="error"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    errorId: { type: String, required: false },
    id: { type: String, required: false },
    hintId: { type: String, required: false },
    required: { type: Boolean, default: false, required: false },
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
        "g-checkboxes__item " + (this.errorId ? " g-form-group--error" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-checkboxes__hint {
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
  .g-checkboxes__hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-checkboxes__hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-checkboxes__hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset__legend + .g-checkboxes__hint {
  margin-top: -5px;
}
.g-checkboxes__label {
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
  .g-checkboxes__label {
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
  box-shadow: 0 0 0 3px #b53cde;
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
.g-checkboxes__hint > * {
  margin-top: 0px;
}
</style>
