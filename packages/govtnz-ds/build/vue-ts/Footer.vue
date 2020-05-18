<template>
  <header class="g-footer" role="footer">
    <slot></slot>
  </header>
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
  background-color: var(--g-theme-inverted-background, #363636);
  color: var(--g-theme-inverted-color, #ffffff);
  fill: var(--g-theme-inverted-color, #ffffff);
}
</style>
