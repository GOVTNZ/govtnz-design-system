<template>
  <div class="g-subfooter">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    children: { required: false, default: " Example subfooter content " }
  },
  computed: {}
});
</script>
<style scoped>
.g-subfooter {
  background-color: #2a2a2a;
  color: #ffffff;
  fill: #ffffff;
  min-height: 104px;
}
</style>
