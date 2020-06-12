<template>
  <footer class="g-footer-wrapper">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Content..." } },
  computed: {}
});
</script>
<style scoped>
.g-footer-wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
