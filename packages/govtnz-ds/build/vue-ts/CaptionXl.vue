<template>
  <span class="g-caption-xl">
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
.g-caption-xl {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-bottom: 5px;
  color: #6f777b;
}
@media print {
  .g-caption-xl {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-caption-xl {
    font-size: 1.6875rem;
    line-height: 1.11111;
  }
}
@media print {
  .g-caption-xl {
    font-size: 18pt;
    line-height: 1.15;
  }
}
.g-captionXl-hint > * {
  margin-top: 0px;
}
</style>
