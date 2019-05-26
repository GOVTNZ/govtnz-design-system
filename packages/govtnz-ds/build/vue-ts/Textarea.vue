<template>
  <div class="g-textarea-form-group">
    <label class="g-textarea-label" v-bind:for="moreDetail">
      Can you provide more detail?
    </label>

    <span class="g-textarea-hint" v-bind:id="moreDetailHint">
      Don't include personal or financial information, eg your National
      Insurance number or credit card details.
    </span>

    <textarea
      v-bind:aria-describedby="moreDetailHint"
      class="g-textarea"
      v-bind:id="moreDetail"
      name="more-detail"
      rows="5"
    />
  </div> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    moreDetail: { type: String, required: false },
    moreDetailHint: { type: String, required: false }
  },
  computed: {}
});</script
><style scoped>
.g-textarea-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textarea-form-group {
    margin-bottom: 30px;
  }
}
.g-textarea-form-group .g-textarea-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textarea-form-group--error .g-textarea-form-group {
  padding: 0;
  border: 0;
}
.g-textarea-hint {
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
  .g-textarea-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textarea-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textarea-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-textarea-fieldset__legend + .g-textarea-hint {
  margin-top: -5px;
}
.g-textarea-label {
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
  .g-textarea-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textarea-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textarea-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textarea-label {
    color: #000000;
  }
}
.g-textarea-character-count .g-textarea {
  margin-bottom: 5px;
}
.g-textarea {
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
  .g-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textarea {
    margin-bottom: 30px;
  }
}
</style>
