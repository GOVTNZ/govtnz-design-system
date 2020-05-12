<template>
  <nav aria-label="Main" class="g-main-nav" role="navigation">
    <ul class="g-main-nav__ul">
      <slot></slot>
    </ul>
  </nav>
</template>
<script lang="ts">
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
  padding: 0px;
  margin: 0px;
}
.g-main-nav__ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
</style>
