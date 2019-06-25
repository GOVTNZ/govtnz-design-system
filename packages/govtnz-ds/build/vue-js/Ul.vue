<template>
  <ul v-bind:class="computed__class">
    <slot></slot>
  </ul> </template
><script>
import Vue from "vue";

export default Vue.extend({
  props: {
    bulleted: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-ul-list" + (this.bulleted ? " g-ul-list--bullet" : "");
    }
  }
});</script
><style scoped>
.g-ul-list {
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
  .g-ul-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-ul-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-ul-list {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-ul-list {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-ul-list {
    margin-bottom: 20px;
  }
}
.g-ul-list .g-ul-list {
  margin-top: 10px;
}
.g-ul-list--bullet {
  padding-left: 20px;
  list-style-type: disc;
}
.g-ul-hint > * {
  margin-top: 0px;
}
</style>
