<template>
  <header class="g-header" role="banner">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: " Example header content " } },
  computed: {}
});
</script>
<style scoped>
.g-header {
  position: relative;
  background-color: g-theme-inverted-background-color;
  color: g-theme-inverted-color;
  fill: g-theme-inverted-color;
}
</style>
