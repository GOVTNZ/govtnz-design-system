<template>
  <nav aria-label="Main" class="g-main-nav" role="navigation">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    children: { required: false, default: " MainNavItem components go here " }
  },
  computed: {}
});
</script>
<style scoped>
.g-main-nav {
  display: block;
  list-style: none;
}
</style>
