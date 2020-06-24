<template>
  <div class="g-subfooter">
    <slot></slot>
  </div>
</template>
<script>
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
  background-color: g-theme-inverted-variant-background-color;
  color: g-theme-inverted-color;
  fill: g-theme-inverted-color;
  min-height: 146px;
}
@media only screen and (min-width: 48em) {
  .g-subfooter {
    min-height: 104px;
  }
}
</style>
