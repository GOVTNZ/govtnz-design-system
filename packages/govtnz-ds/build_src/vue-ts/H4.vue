<template>
  <h4 v-bind:class="computed__class" v-bind:id="id">
    <slot></slot>
  </h4>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return (
          ["xlarge", "large", "medium", "small", "xsmall", "xxsmall"].indexOf(
            value
          ) !== -1
        );
      },
      required: true
    },
    marginBottom8: { type: Boolean, default: false, required: false },
    marginBottom0: { type: Boolean, default: false, required: false },
    id: { type: String, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return (
        "g-heading " +
        (constants.styleSize[this.styleSize] !== undefined
          ? ` ${constants.styleSize[this.styleSize]}`
          : "") +
        (this.marginBottom8 ? " g-heading-mb-8" : "") +
        (this.marginBottom0 ? " g-heading-mb-0" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-heading-xl {
  color: g-theme-heading-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 3rem;
  line-height: 1.125;
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media print {
  .g-heading-xl {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-xl {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xl {
    font-size: 3.5rem;
    line-height: 1.15;
  }
}
@media print {
  .g-heading-xl {
    font-size: 32pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xl {
    margin-bottom: 1rem;
  }
}
.g-heading-l {
  color: g-theme-heading-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-heading-l {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-l {
    font-size: 2.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-heading-l {
    font-size: 24pt;
    line-height: 1.05;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-l {
    margin-bottom: 30px;
  }
}
.g-heading-m {
  color: g-theme-heading-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 1.5rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-heading-m {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-m {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-heading-m {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-m {
    margin-bottom: 0.5rem;
  }
}
.g-heading-s {
  color: g-theme-heading-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 1.25rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-heading-s {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-s {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-s {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-heading-s {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-s {
    margin-bottom: 0.5rem;
  }
}
.g-body-l + .g-heading-l,
.g-body-lead + .g-heading-l {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-body-l + .g-heading-l,
  .g-body-lead + .g-heading-l {
    padding-top: 10px;
  }
}
.g-body-m + .g-heading-l,
.g-body + .g-heading-l,
.g-body-s + .g-heading-l,
.g-list + .g-heading-l {
  padding-top: 15px;
}
@media (min-width: 40.0625em) {
  .g-body-m + .g-heading-l,
  .g-body + .g-heading-l,
  .g-body-s + .g-heading-l,
  .g-list + .g-heading-l {
    padding-top: 20px;
  }
}
.g-body-m + .g-heading-m,
.g-body + .g-heading-m,
.g-body-s + .g-heading-m,
.g-list + .g-heading-m,
.g-body-m + .g-heading-s,
.g-body + .g-heading-s,
.g-body-s + .g-heading-s,
.g-list + .g-heading-s {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-body-m + .g-heading-m,
  .g-body + .g-heading-m,
  .g-body-s + .g-heading-m,
  .g-list + .g-heading-m,
  .g-body-m + .g-heading-s,
  .g-body + .g-heading-s,
  .g-body-s + .g-heading-s,
  .g-list + .g-heading-s {
    padding-top: 10px;
  }
}
.g-heading-xs {
  color: g-theme-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 1.125rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-heading-xs {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-xs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xs {
    font-size: 0.9375rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-heading-xs {
    font-size: 13pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xs {
    margin-bottom: 0.5rem;
  }
}
.g-body-m + .g-heading-xs,
.g-body + .g-heading-xs,
.g-body-s + .g-heading-xs,
.g-list + .g-heading-xs {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-body-m + .g-heading-xs,
  .g-body + .g-heading-xs,
  .g-body-s + .g-heading-xs,
  .g-list + .g-heading-xs {
    padding-top: 10px;
  }
}
.g-heading-xxs {
  color: g-theme-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-font-weight;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 15px;
}
@media print {
  .g-heading-xxs {
    color: g-theme-print-color;
  }
}
@media print {
  .g-heading-xxs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xxs {
    font-size: 0.875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-heading-xxs {
    font-size: 12pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xxs {
    margin-bottom: 20px;
  }
}
.g-body-m + .g-heading-xxs,
.g-body + .g-heading-xxs,
.g-body-s + .g-heading-xxs,
.g-list + .g-heading-xxs {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-body-m + .g-heading-xxs,
  .g-body + .g-heading-xxs,
  .g-body-s + .g-heading-xxs,
  .g-list + .g-heading-xxs {
    padding-top: 10px;
  }
}
.g-heading-mb-8 {
  margin-bottom: 8px;
}
.g-heading-mb-0 {
  margin-bottom: 0px;
}
.g-hint > * {
  margin-top: 0px;
}
</style>
