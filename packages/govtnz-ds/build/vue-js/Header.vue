<template>
  <header class="g-header" role="banner">
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
  position: relative;
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
}
</style>
