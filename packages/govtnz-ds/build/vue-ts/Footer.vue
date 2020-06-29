<template>
  <footer class="g-footer" role="contentinfo">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: " Example footer content " } },
  computed: {}
});
</script>
<style scoped>
.g-footer {
  background-color: g-theme-inverted-background-color;
  color: g-theme-inverted-color;
  fill: g-theme-inverted-color;
}
</style>
