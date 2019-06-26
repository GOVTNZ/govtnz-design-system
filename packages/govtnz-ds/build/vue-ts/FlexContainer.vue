<template>
  <div v-bind:class="computed__class">
    <slot></slot>
  </div> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};

export default Vue.extend({
  props: {
    width: {
      type: String,
      validator: value => {
        return ["fixed", "fluid"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: "Rows..." }
  },
  computed: {
    computed__class() {
      return constants.width[this.width] !== undefined
        ? constants.width[this.width]
        : "";
    }
  }
});</script
><style scoped>
.g-flex-container,
.g-flex-container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}
.g-flex-container {
  max-width: 85.375rem;
  box-sizing: border-box;
}
@media only screen and (min-width: 48em) {
  .g-flex-container,
  .g-flex-container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
@media only screen and (min-width: 75em) {
  .g-flex-container,
  .g-flex-container-fluid {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }
}
</style>
