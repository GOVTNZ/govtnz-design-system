<template>
  <div v-bind:class="computed__class">
    <input
      v-bind:aria-describedby="hintId"
      class="g-radios__input"
      v-bind:id="id"
      v-bind:name="name"
      type="radio"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
      v-bind:value="value"
      v-bind:checked="checked"
    />

    <label class="g-label g-radios__label" v-bind:for="id">
      <slot name="label"></slot>
    </label>

    <div class="g-hint g-checkboxes__hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    errorId: { type: Boolean, default: false, required: false },
    id: { type: String, required: false },
    hintId: { type: String, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false },
    label: { required: false, default: "Label text" },
    hint: { required: false, default: "Hint text" }
  },
  computed: {
    computed__class() {
      return "g-radios__item" + (this.errorId ? " g-form-group--error" : "");
    }
  }
});
</script>
<style scoped>
.g-checkboxes__hint {
  display: block;
  padding-right: 15px;
  padding-left: 15px;
}
.g-radios__item {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding: 0 0 0 40px;
  clear: left;
}
@media print {
  .g-radios__item {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-radios__item {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-radios__item {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-radios__item:last-child,
.g-radios__item:last-of-type {
  margin-bottom: 0;
}
.g-radios__input {
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
.g-radios__label {
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
.g-radios__input + .g-radios__label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  border-radius: 50%;
  background: transparent;
}
.g-radios__input + .g-radios__label::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 0;
  height: 0;
  border: 10px solid currentColor;
  border-radius: 50%;
  opacity: 0;
  background: currentColor;
}
.g-radios__input:focus + .g-radios__label::before,
.g-radios__input.\:focus + .g-radios__label::before {
  outline: 3px solid transparent;
  outline-offset: 3px;
  box-shadow: 0 0 0 4px #ffbf47;
}
.g-radios__input:checked + .g-radios__label::after,
.g-radios__input.\:checked + .g-radios__label::after {
  opacity: 1;
}
.g-radios__input:disabled + .g-radios__label,
.g-radios__input.\:disabled + .g-radios__label {
  cursor: default;
}
.g-radios__input:disabled + .g-radios__label,
.g-radios__input.\:disabled + .g-radios__label {
  opacity: 0.5;
}
@media (min-width: 40.0625em) {
  .g-radios--inline .g-radios__item {
    margin-right: 20px;
    float: left;
    clear: none;
  }
}
.g-radios--inline.g-radios--conditional .g-radios__item {
  margin-right: 0;
  float: none;
}
.g-radioBlock-hint > * {
  margin-top: 0px;
}
</style>
