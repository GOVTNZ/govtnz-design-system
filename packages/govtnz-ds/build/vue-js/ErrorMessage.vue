<template>
  <span class="g-error-message">
    Error message about full name goes here
  </span> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {}
});</script
><style scoped>
.g-error-message {
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
  .g-error-message {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-error-message {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-error-message {
    font-size: 14pt;
    line-height: 1.15;
  }
}
</style>
