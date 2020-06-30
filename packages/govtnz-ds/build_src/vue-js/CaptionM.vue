<template>
  <span class="g-caption g-caption-m">
    <slot></slot>
  </span>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});
</script>
<style scoped>
.g-caption-m {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  color: g-theme-caption-color;
}
@media print {
  .g-caption-m {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-caption-m {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-caption-m {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-captionM-hint > * {
  margin-top: 0px;
}
</style>
