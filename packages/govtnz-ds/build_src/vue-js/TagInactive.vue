<template>
  <strong class="g-tagInactive-tag g-tagInactive-tag--inactive">
    alpha
  </strong> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {},
  computed: {}
});</script
><style scoped>
.g-tagInactive-tag {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25;
  display: inline-block;
  padding: 4px 8px;
  padding-bottom: 1px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  color: #ffffff;
  background-color: #005ea5;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
}
@media print {
  .g-tagInactive-tag {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tagInactive-tag {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tagInactive-tag {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-tagInactive-tag--inactive {
  background-color: #6f777b;
}
.g-tagInactive-hint > * {
  margin-top: 0px;
}
</style>
