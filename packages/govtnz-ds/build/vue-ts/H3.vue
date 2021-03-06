<template>
  <h3 v-bind:class="computed__class" v-bind:id="id">
    <slot></slot>
  </h3>
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
    marginTop0: { type: Boolean, default: false, required: false },
    marginTop8: { type: Boolean, default: false, required: false },
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
        (this.marginBottom0 ? " g-heading-mb-0" : "") +
        (this.marginTop0 ? " g-heading-mt-0" : "") +
        (this.marginTop8 ? " g-heading-mt-8" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-heading {
  color: g-theme-heading-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-l-font-weight;
}
.g-heading:first-child {
  margin-top: 0px;
}
.g-alert .g-heading:first-child,
.g-heading:last-child {
  margin-bottom: 0px;
}
.g-heading-xl {
  color: g-theme-heading-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-xl-font-weight;
  font-size: 3rem;
  line-height: 1.125;
  display: block;
  margin-top: 4rem;
  margin-bottom: 1rem;
}
.g-caption + .g-heading-xl,
.g-heading-xl:first-child {
  margin-top: 0px;
}
@media print {
  .g-heading-xl {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 32pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xl {
    font-size: 3.5rem;
    line-height: 1.15;
    margin-bottom: 1rem;
  }
}
.g-alert .g-heading-xl:first-child,
.g-heading-xl:last-child {
  margin-bottom: 0rem;
}
.g-heading-l {
  color: g-theme-heading-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-l-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
}
.g-caption + .g-heading-l,
.g-heading-l:first-child {
  margin-top: 0rem;
}
@media print {
  .g-heading-l {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 24pt;
    line-height: 1.05;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-l {
    font-size: 2.5rem;
    line-height: 1.25;
    margin-bottom: 30px;
  }
}
.g-alert .g-heading-l,
.g-heading-l:last-child {
  margin-bottom: 0rem;
}
.g-heading-m {
  color: g-theme-heading-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-m-font-weight;
  font-size: 1.5rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
.g-caption + .g-heading-m,
.g-heading-m:first-child {
  margin-top: 0rem;
}
@media print {
  .g-heading-m {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-m {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }
}
.g-alert .g-heading-m:first-child,
.g-heading-m:last-child {
  margin-bottom: 0rem;
}
.g-heading-s {
  color: g-theme-heading-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-s-font-weight;
  font-size: 1.25rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
.g-caption + .g-heading-s,
.g-heading-s:first-child {
  margin-top: 0rem;
}
@media print {
  .g-heading-s {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-fieldsetBlock-fieldset__legend .g-heading-s {
  font-size: 1.25rem;
}
@media (min-width: 40.0625em) {
  .g-heading-s {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 0.5rem;
  }
  .g-fieldsetBlock-fieldset__legend .g-heading-s {
    font-size: 1.25rem;
  }
}
.g-alert .g-heading-xs:first-child,
.g-heading-xs:last-child {
  margin-bottom: 0rem;
}
.g-heading-xs {
  color: g-theme-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-xs-font-weight;
  font-size: 1.125rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
.g-caption + .g-heading-xs,
.g-heading-xs:first-child {
  margin-top: 0rem;
}
@media print {
  .g-heading-xs {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 13pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xs {
    font-size: 0.9375rem;
    line-height: 1.31579;
    margin-bottom: 0.5rem;
  }
}
.g-alert .g-heading-xs:first-child,
.g-heading-xs:last-child {
  margin-bottom: 0rem;
}
.g-heading-xxs {
  color: g-theme-color;
  font-family: g-theme-heading-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-theme-heading-xxs-font-weight;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 15px;
}
.g-caption + .g-heading-xxs,
.g-heading-xxs:first-child {
  margin-top: 0rem;
}
@media print {
  .g-heading-xxs {
    color: g-theme-print-color;
    font-family: sans-serif;
    font-size: 12pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-heading-xxs {
    font-size: 0.875rem;
    line-height: 1.31579;
    margin-bottom: 20px;
  }
}
.g-alert .g-heading-xxs:first-child,
.g-heading-xxs:last-child {
  margin-bottom: 0rem;
}
.g-heading-mb-8 {
  margin-bottom: 8px;
}
.g-heading-mb-0 {
  margin-bottom: 0px;
}
.g-heading-mt-8 {
  margin-bottom: 8px;
}
.g-heading-mt-0 {
  margin-bottom: 0px;
}
.g-alert .g-heading {
  margin-bottom: 0px;
}
</style>
