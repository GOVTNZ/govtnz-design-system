<template>
  <span class="g-caption-l">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});
</script>
<style scoped>
.g-caption-l {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-bottom: 5px;
  color: #6f777c;
}
@media print {
  .g-caption-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-caption-l {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-caption-l {
    font-size: 18pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-caption-l {
    margin-bottom: 0;
  }
}
.g-captionL-hint > * {
  margin-top: 0px;
}
</style>
