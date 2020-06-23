<template>
  <div v-bind:class="computed__class">
    <label class="g-textareaBlock-label" v-bind:for="id">
      <slot name="label"></slot>
    </label>

    <div class="g-textareaBlock-hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </div>

    <div class="g-textareaBlock-error-message" v-bind:id="errorId">
      <span class="g-textareaBlock-visually-hidden">
        Error:
      </span>

      <slot name="error"></slot>
    </div>

    <textarea
      v-bind:aria-describedby="computed__ariaDescribedby"
      class="g-textareaBlock-textarea"
      v-bind:id="id"
      v-bind:name="name"
      v-bind:rows="rows"
      v-bind:required="required"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:cols="cols"
      v-bind:autofocus="autoFocus"
      v-bind:spellcheck="spellCheck"
      v-bind:autocomplete="autoComplete"
      v-bind:maxlength="maxLength"
      v-bind:value="value"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    errorId: { type: String, required: false },
    id: { type: String, required: false },
    label: { required: false, default: "Label text" },
    hintId: { type: String, required: false },
    hint: { required: false, default: "Hint text" },
    error: { required: false, default: "Error text" },
    name: { type: String, required: true },
    required: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    rows: { type: String, required: false },
    cols: { type: String, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    spellCheck: { type: Boolean, default: false, required: false },
    autoComplete: { type: String, required: true },
    maxLength: { type: String, required: false },
    value: { type: String, required: false }
  },
  computed: {
    computed__class() {
      return (
        "g-textareaBlock-form-group " +
        (this.errorId ? " g-textareaBlock-form-group--error" : "")
      );
    },
    computed__ariaDescribedby() {
      return this.hintId + this.errorId;
    }
  }
});
</script>
<style scoped>
.g-textareaBlock-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-form-group {
    margin-bottom: 30px;
  }
}
.g-textareaBlock-form-group .g-textareaBlock-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textareaBlock-form-group--error {
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
}
.g-textareaBlock-form-group--error .g-textareaBlock-form-group {
  padding: 0;
  border: 0;
}
.g-textareaBlock-error-message {
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
  .g-textareaBlock-error-message {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
.g-textareaBlock-hint {
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
  .g-textareaBlock-hint {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
.g-fieldset__legend + .g-textareaBlock-hint {
  margin-top: -5px;
}
.g-textareaBlock-label {
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
  .g-textareaBlock-label {
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
.g-textareaBlock-character-count .g-textareaBlock-textarea {
  margin-bottom: 5px;
}
.g-textareaBlock-textarea {
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
  border: 1px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
}
@media print {
  .g-textareaBlock-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textareaBlock-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textareaBlock-textarea:focus {
  outline: 3px solid #b53cde;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-textarea {
    margin-bottom: 30px;
  }
}
.g-textareaBlock-visually-hidden {
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
.g-textareaBlock-hint > * {
  margin-top: 0px;
}
</style>
