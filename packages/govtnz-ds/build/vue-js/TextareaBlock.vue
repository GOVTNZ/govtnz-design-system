<template>
  <div class="g-textareaBlock-form-group">
    <label class="g-textareaBlock-label" v-bind:for="id">
      <slot name="label"></slot>
    </label>

    <span class="g-textareaBlock-hint" v-bind:id="hintId">
      <slot name="hint"></slot>
    </span>

    <textarea
      v-bind:aria-describedby="hintId"
      class="g-textareaBlock-textarea"
      v-bind:id="id"
      v-bind:name="name"
      v-bind:rows="rows"
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
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: String, required: false },
    label: { required: false },
    hintId: { type: String, required: false },
    hint: { required: false },
    name: { type: String, required: true },
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
  computed: {}
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
.g-textareaBlock-form-group--error .g-textareaBlock-form-group {
  padding: 0;
  border: 0;
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
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaBlock-hint {
    font-size: 14pt;
    line-height: 1.15;
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
  }
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaBlock-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textareaBlock-label {
    color: #000000;
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
  border: 2px solid #0b0c0c;
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
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaBlock-textarea {
    margin-bottom: 30px;
  }
}
.g-textareaBlock-hint > * {
  margin-top: 0px;
}
</style>
