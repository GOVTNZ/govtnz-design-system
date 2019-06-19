<template>
  <ol v-bind:class="computed__class">
    <slot></slot>
  </ol> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    numbered: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-ol-list" + (this.numbered ? " g-ol-list--number" : "");
    }
  }
});</script
><style scoped>
.g-ol-list {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.625;
  color: #2a2a2a;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;
}
@media print {
  .g-ol-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-ol-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-ol-list {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-ol-list {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-ol-list {
    margin-bottom: 20px;
  }
}
.g-ol-list .g-ol-list {
  margin-top: 10px;
}
.g-ol-list--number {
  padding-left: 20px;
  list-style-type: decimal;
}
.g-ol-hint > * {
  margin-top: 0px;
}
</style>
