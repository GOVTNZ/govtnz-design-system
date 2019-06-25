<template>
  <legend class="g-fieldset__legend">
    <slot></slot>
  </legend> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Legend text" } },
  computed: {}
});</script
><style scoped>
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
.g-legend-hint > * {
  margin-top: 0px;
}
</style>
