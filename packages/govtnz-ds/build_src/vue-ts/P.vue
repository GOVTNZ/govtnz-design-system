<template>
  <p v-bind:class="computed__class">
    <slot></slot>
  </p>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  styleSize: {
    large: "g-p-body-l",
    medium: "g-p-body-m",
    small: "g-p-body-s",
    "x-small": "g-p-body-xs"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return constants.styleSize[this.styleSize] !== undefined
        ? constants.styleSize[this.styleSize]
        : "";
    }
  }
});
</script>
<style scoped>
.g-p-body-l {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  margin-top: 0;
  margin-bottom: 20px;
}
@media print {
  .g-p-body-l {
    color: #000000;
  }
}
@media print {
  .g-p-body-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-l {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-p-body-l {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-l {
    margin-bottom: 30px;
  }
}
.g-p-body-m {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-p-body-m {
    color: #000000;
  }
}
@media print {
  .g-p-body-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-m {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-p-body-m {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-m {
    margin-bottom: 20px;
  }
}
.g-p-body-s {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.625;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media print {
  .g-p-body-s {
    color: #000000;
  }
}
@media print {
  .g-p-body-s {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-s {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-p-body-s {
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-s {
    margin-bottom: 20px;
  }
}
.g-p-body-xs {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-p-body-xs {
    color: #000000;
  }
}
@media print {
  .g-p-body-xs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-xs {
    font-size: 0.875rem;
    line-height: 1.42857;
  }
}
@media print {
  .g-p-body-xs {
    font-size: 12pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-p-body-xs {
    margin-bottom: 20px;
  }
}
.g-p-summary-list__value > p {
  margin-bottom: 10px;
}
.g-p-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-p-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-p-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-p-hint > * {
  margin-top: 0px;
}
</style>
