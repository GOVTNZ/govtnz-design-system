<template>
  <div
    class="g-characterCountWithCustomRows-character-count"
    data-maxlength="10"
    data-module="character-count"
  >
    <div class="g-characterCountWithCustomRows-form-group">
      <label
        class="g-characterCountWithCustomRows-label"
        v-bind:for="customRows"
      >
        Full address
      </label>

      <textarea
        class="g-characterCountWithCustomRows-textarea js-character-count"
        v-bind:id="customRows"
        name="custom"
        rows="8"
      />

      <span
        aria-live="polite"
        class="g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message"
        v-bind:id="customRowsInfo"
      >
        You have 10 characters remaining
      </span>
    </div>
  </div> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    customRows: { type: String, required: false },
    customRowsInfo: { type: String, required: false }
  },
  computed: {}
});</script
><style scoped>
.g-characterCountWithCustomRows-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-form-group {
    margin-bottom: 30px;
  }
}
.g-characterCountWithCustomRows-form-group
  .g-characterCountWithCustomRows-form-group:last-of-type {
  margin-bottom: 0;
}
.g-characterCountWithCustomRows-form-group--error
  .g-characterCountWithCustomRows-form-group {
  padding: 0;
  border: 0;
}
.g-characterCountWithCustomRows-hint {
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
  .g-characterCountWithCustomRows-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-characterCountWithCustomRows-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-characterCountWithCustomRows-fieldset__legend
  + .g-characterCountWithCustomRows-hint {
  margin-top: -5px;
}
.g-characterCountWithCustomRows-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-characterCountWithCustomRows-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-characterCountWithCustomRows-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-characterCountWithCustomRows-label {
    color: #000000;
  }
}
.g-characterCountWithCustomRows-character-count {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-character-count {
    margin-bottom: 30px;
  }
}
.g-characterCountWithCustomRows-character-count
  .g-characterCountWithCustomRows-textarea {
  margin-bottom: 5px;
}
.g-characterCountWithCustomRows-character-count__message {
  margin-top: 0;
  margin-bottom: 0;
}
.g-characterCountWithCustomRows-textarea {
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
  .g-characterCountWithCustomRows-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-characterCountWithCustomRows-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-characterCountWithCustomRows-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-characterCountWithCustomRows-textarea {
    margin-bottom: 30px;
  }
}
</style>
