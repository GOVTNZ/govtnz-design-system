<template>
  <header class="g-header" role="header">
    <slot></slot>
  </header>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: " Example header content " } },
  computed: {}
});
</script>
<style scoped>
.g-header {
  background-color: var(--g-theme-inverted-background, #363636);
}
</style>
