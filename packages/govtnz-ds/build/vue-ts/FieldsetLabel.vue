<template>
  <div class="g-fieldsetLabel-hint" v-bind:id="hintId">
    <slot name="hint"></slot>
  </div> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hintId: { type: String, required: false },
    hint: { required: false, default: "Hint text" }
  },
  computed: {}
});</script
><style scoped>
.g-fieldsetLabel-hint {
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
  .g-fieldsetLabel-hint {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-fieldsetLabel-hint {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-fieldsetLabel-hint {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldset__legend + .g-fieldsetLabel-hint {
  margin-top: -5px;
}
.g-fieldsetLabel-hint > * {
  margin-top: 0px;
}
</style>
