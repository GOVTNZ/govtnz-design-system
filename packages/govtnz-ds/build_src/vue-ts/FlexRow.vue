<template>
  <div v-bind:class="computed__class">
    <slot></slot>
  </div> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  alignXs: { start: "start-xs", center: "center-xs", end: "end-xs" },
  alignSm: { start: "start-sm", center: "center-sm", end: "end-sm" },
  alignMd: { start: "start-md", center: "center-md", end: "end-md" },
  alignLg: { start: "start-lg", center: "center-lg", end: "end-lg" }
};

export default Vue.extend({
  props: {
    alignXs: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignSm: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignMd: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    alignLg: {
      type: String,
      validator: value => {
        return ["start", "center", "end"].indexOf(value) !== -1;
      },
      required: false
    },
    isReversed: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Columns..." }
  },
  computed: {
    computed__class() {
      return (
        "g-flex-row" +
        (constants[this.alignXs] !== undefined
          ? ` ${constants[this.alignXs]}`
          : "") +
        (constants[this.alignSm] !== undefined
          ? ` ${constants[this.alignSm]}`
          : "") +
        (constants[this.alignMd] !== undefined
          ? ` ${constants[this.alignMd]}`
          : "") +
        (constants[this.alignLg] !== undefined
          ? ` ${constants[this.alignLg]}`
          : "") +
        (this.isReversed ? " g-flex-reverse" : "")
      );
    }
  }
});</script
><style scoped>
.g-flex-row {
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}
.g-flex-row.g-flex-reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
</style>
