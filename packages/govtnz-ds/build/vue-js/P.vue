<template>
  <p v-bind:class="computed__class">
    <slot></slot>
  </p>
</template>
<script>
import Vue from "vue";

const constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: false
    },
    marginBottom0: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return (
        "g-body " +
        (constants.styleSize[this.styleSize] !== undefined
          ? ` ${constants.styleSize[this.styleSize]}`
          : "") +
        (this.marginBottom0 ? " g-body-marginBottom0" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-body {
  color: g-theme-color;
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.1875rem;
}
.g-body-l {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  margin-top: 0;
  margin-bottom: 20px;
}
@media print {
  .g-body-l {
    color: g-theme-print-color;
  }
}
@media print {
  .g-body-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-body-l {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-body-l {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-body-l {
    margin-bottom: 30px;
  }
}
.g-body-m {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-body-m {
    color: g-theme-print-color;
  }
}
@media print {
  .g-body-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-body-m {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-body-m {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-body-m {
    margin-bottom: 20px;
  }
}
.g-body-s {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.625;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media print {
  .g-body-s {
    color: g-theme-print-color;
  }
}
@media print {
  .g-body-s {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-body-s {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-body-s {
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-body-s {
    margin-bottom: 20px;
  }
}
.g-body-xs {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-body-xs {
    color: g-theme-print-color;
  }
}
@media print {
  .g-body-xs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-body-xs {
    font-size: 0.875rem;
    line-height: 1.42857;
  }
}
@media print {
  .g-body-xs {
    font-size: 12pt;
    line-height: 1.2;
  }
}
@media (min-width: 40.0625em) {
  .g-body-xs {
    margin-bottom: 20px;
  }
}
.g-body-marginBottom0 {
  margin-bottom: 0px !important;
}
</style>
