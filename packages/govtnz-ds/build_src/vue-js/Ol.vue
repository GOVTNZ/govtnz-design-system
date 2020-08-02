<template>
  <ol class="g-ol">
    <slot></slot>
  </ol>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});
</script>
<style scoped>
.g-ol {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: g-theme-color;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 20px;
  list-style-type: lower-alpha;
}
@media print {
  .g-ol {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-ol {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-ol {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-ol {
    color: g-theme-print-color;
  }
}
@media (min-width: 40.0625em) {
  .g-ol {
    margin-bottom: 1rem;
  }
}
.g-ol .g-ol {
  margin-top: 10px;
}
.g-ol-hint > * {
  margin-top: 0px;
}
.g-ol li .g-ol {
  margin-top: 0.5rem;
}
</style>
