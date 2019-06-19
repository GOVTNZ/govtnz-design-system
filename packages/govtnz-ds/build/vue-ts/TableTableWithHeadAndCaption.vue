<template>
  <table class="g-tableTableWithHeadAndCaption-table">
    <caption
      class="g-tableTableWithHeadAndCaption-table__caption g-tableTableWithHeadAndCaption-heading-m"
    >
      Caption 1: Months and rates
    </caption>

    <thead class="g-tableTableWithHeadAndCaption-table__head">
      <tr class="g-tableTableWithHeadAndCaption-table__row">
        Month you apply Rate for bicycles Rate for vehicles
      </tr>
    </thead>

    <tbody class="g-tableTableWithHeadAndCaption-table__body">
      <tr class="g-tableTableWithHeadAndCaption-table__row">
        January $85 $95
      </tr>

      <tr class="g-tableTableWithHeadAndCaption-table__row">
        February $75 $55
      </tr>

      <tr class="g-tableTableWithHeadAndCaption-table__row">
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
.g-tableTableWithHeadAndCaption-heading-m {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 1.5rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-tableTableWithHeadAndCaption-heading-m {
    color: #000000;
  }
}
@media print {
  .g-tableTableWithHeadAndCaption-heading-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHeadAndCaption-heading-m {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tableTableWithHeadAndCaption-heading-m {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHeadAndCaption-heading-m {
    margin-bottom: 0.5rem;
  }
}
.g-tableTableWithHeadAndCaption-body-m
  + .g-tableTableWithHeadAndCaption-heading-m,
.g-tableTableWithHeadAndCaption-body
  + .g-tableTableWithHeadAndCaption-heading-m,
.g-tableTableWithHeadAndCaption-body-s
  + .g-tableTableWithHeadAndCaption-heading-m,
.g-tableTableWithHeadAndCaption-list
  + .g-tableTableWithHeadAndCaption-heading-m {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHeadAndCaption-body-m
    + .g-tableTableWithHeadAndCaption-heading-m,
  .g-tableTableWithHeadAndCaption-body
    + .g-tableTableWithHeadAndCaption-heading-m,
  .g-tableTableWithHeadAndCaption-body-s
    + .g-tableTableWithHeadAndCaption-heading-m,
  .g-tableTableWithHeadAndCaption-list
    + .g-tableTableWithHeadAndCaption-heading-m {
    padding-top: 10px;
  }
}
.g-tableTableWithHeadAndCaption-table {
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
  .g-tableTableWithHeadAndCaption-table {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHeadAndCaption-table {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tableTableWithHeadAndCaption-table {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-tableTableWithHeadAndCaption-table {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-tableTableWithHeadAndCaption-table {
    margin-bottom: 30px;
  }
}
.g-tableTableWithHeadAndCaption-table__caption {
  font-weight: 700;
  display: table-caption;
  text-align: left;
}
</style>
