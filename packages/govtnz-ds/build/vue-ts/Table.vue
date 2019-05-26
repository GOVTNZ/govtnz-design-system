<template>
  <table class="g-table">
    <tbody class="g-table__body">
      <tr class="g-table__row">
        January $85 $95
      </tr>

      <tr class="g-table__row">
        February $75 $55
      </tr>

      <tr class="g-table__row">
        March $165 $125
      </tr>
    </tbody>
  </table> </template
><script lang="ts">
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {}
});</script
><style scoped>
.g-table {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
}
@media print {
  .g-table {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-table {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-table {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-table {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-table {
    margin-bottom: 30px;
  }
}
</style>
