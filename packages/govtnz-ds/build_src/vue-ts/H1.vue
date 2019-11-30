<template>
  <h1 v-bind:class="computed__class" v-bind:id="id">
    <slot></slot>
  </h1>
</template>
<script lang="ts">
import Vue from "vue";


const constants = {"styleSize":{"xlarge":"g-h1-heading-xl","large":"g-h1-heading-l","medium":"g-h1-heading-m","small":"g-h1-heading-s","xsmall":"g-h1-heading-xs","xxsmall":"g-h1-heading-xxs"}};

export default Vue.extend({

        props: { styleSize: { type: String, validator: (value) => { return ["xlarge","large","medium","small","xsmall","xxsmall"].indexOf(value) !== -1;}, required: true }, marginBottom8: { type: Boolean, default: false, required: false }, marginBottom0: { type: Boolean, default: false, required: false }, id: { type: String, required: false }, children: { required: false, default: "Example text" } },
        computed: {
            computed__class() {
  return "\" + (constants.styleSize[this.styleSize] !== undefined ? ` ${constants.styleSize[this.styleSize]}` : '') + (this.marginBottom8 ? " g-h1-heading-mb-8" : '') + (this.marginBottom0 ? " g-h1-heading-mb-0" : '')
}
        }});
</script>
<style scoped>
.g-h1-heading-xl {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 3rem;
  line-height: 1.125;
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media print {
  .g-h1-heading-xl {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-xl {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xl {
    font-size: 3.5rem;
    line-height: 1.15;
  }
}
@media print {
  .g-h1-heading-xl {
    font-size: 32pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xl {
    margin-bottom: 1rem;
  }
}
.g-h1-heading-l {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-h1-heading-l {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-l {
    font-size: 2.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-h1-heading-l {
    font-size: 24pt;
    line-height: 1.05;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-l {
    margin-bottom: 30px;
  }
}
.g-h1-heading-m {
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
  .g-h1-heading-m {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-m {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-h1-heading-m {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-m {
    margin-bottom: 0.5rem;
  }
}
.g-h1-heading-s {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 1.25rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-h1-heading-s {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-s {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-s {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-h1-heading-s {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-s {
    margin-bottom: 0.5rem;
  }
}
.g-h1-body-l + .g-h1-heading-l,
.g-h1-body-lead + .g-h1-heading-l {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-h1-body-l + .g-h1-heading-l,
  .g-h1-body-lead + .g-h1-heading-l {
    padding-top: 10px;
  }
}
.g-h1-body-m + .g-h1-heading-l,
.g-h1-body + .g-h1-heading-l,
.g-h1-body-s + .g-h1-heading-l,
.g-h1-list + .g-h1-heading-l {
  padding-top: 15px;
}
@media (min-width: 40.0625em) {
  .g-h1-body-m + .g-h1-heading-l,
  .g-h1-body + .g-h1-heading-l,
  .g-h1-body-s + .g-h1-heading-l,
  .g-h1-list + .g-h1-heading-l {
    padding-top: 20px;
  }
}
.g-h1-body-m + .g-h1-heading-m,
.g-h1-body + .g-h1-heading-m,
.g-h1-body-s + .g-h1-heading-m,
.g-h1-list + .g-h1-heading-m,
.g-h1-body-m + .g-h1-heading-s,
.g-h1-body + .g-h1-heading-s,
.g-h1-body-s + .g-h1-heading-s,
.g-h1-list + .g-h1-heading-s {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-h1-body-m + .g-h1-heading-m,
  .g-h1-body + .g-h1-heading-m,
  .g-h1-body-s + .g-h1-heading-m,
  .g-h1-list + .g-h1-heading-m,
  .g-h1-body-m + .g-h1-heading-s,
  .g-h1-body + .g-h1-heading-s,
  .g-h1-body-s + .g-h1-heading-s,
  .g-h1-list + .g-h1-heading-s {
    padding-top: 10px;
  }
}
.g-h1-heading-xs {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 1.125rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-h1-heading-xs {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-xs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xs {
    font-size: 0.9375rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-h1-heading-xs {
    font-size: 13pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xs {
    margin-bottom: 0.5rem;
  }
}
.g-h1-body-m + .g-h1-heading-xs,
.g-h1-body + .g-h1-heading-xs,
.g-h1-body-s + .g-h1-heading-xs,
.g-h1-list + .g-h1-heading-xs {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-h1-body-m + .g-h1-heading-xs,
  .g-h1-body + .g-h1-heading-xs,
  .g-h1-body-s + .g-h1-heading-xs,
  .g-h1-list + .g-h1-heading-xs {
    padding-top: 10px;
  }
}
.g-h1-heading-xxs {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 15px;
}
@media print {
  .g-h1-heading-xxs {
    color: #000000;
  }
}
@media print {
  .g-h1-heading-xxs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xxs {
    font-size: 0.875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-h1-heading-xxs {
    font-size: 12pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-h1-heading-xxs {
    margin-bottom: 20px;
  }
}
.g-h1-body-m + .g-h1-heading-xxs,
.g-h1-body + .g-h1-heading-xxs,
.g-h1-body-s + .g-h1-heading-xxs,
.g-h1-list + .g-h1-heading-xxs {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-h1-body-m + .g-h1-heading-xxs,
  .g-h1-body + .g-h1-heading-xxs,
  .g-h1-body-s + .g-h1-heading-xxs,
  .g-h1-list + .g-h1-heading-xxs {
    padding-top: 10px;
  }
}
.g-h1-heading-mb-8 {
  margin-bottom: 8px;
}
.g-h1-heading-mb-0 {
  margin-bottom: 0px;
}
.g-h1-hint > * {
  margin-top: 0px;
}
</style>
