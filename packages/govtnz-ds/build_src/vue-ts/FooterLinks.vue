<template>
  <ul class="g-footer-links">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    children: { required: false, default: "example link list content" }
  },
  computed: {}
});
</script>
<style scoped>
.g-footer-links {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
</style>
