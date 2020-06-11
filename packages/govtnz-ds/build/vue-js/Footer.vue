<template>
  <footer class="g-footer" role="contentinfo">
    <slot></slot>
  </footer>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: " Example footer content " } },
  computed: {}
});
</script>
<style scoped>
.g-footer {
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
}
</style>
