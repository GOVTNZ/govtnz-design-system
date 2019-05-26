<template>
  <table class="g-tableTableWithHead-table">
    <thead class="g-tableTableWithHead-table__head">
      <tr class="g-tableTableWithHead-table__row">
        Month you apply Rate for bicycles Rate for vehicles
      </tr>
    </thead>

    <tbody class="g-tableTableWithHead-table__body">
      <tr class="g-tableTableWithHead-table__row">
        January $85 $95
      </tr>

      <tr class="g-tableTableWithHead-table__row">
        February $75 $55
      </tr>

      <tr class="g-tableTableWithHead-table__row">
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
.g-tableTableWithHead-table {
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
  .g-tableTableWithHead-table {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHead-table {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tableTableWithHead-table {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-tableTableWithHead-table {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHead-table {
    margin-bottom: 30px;
  }
}
</style>
