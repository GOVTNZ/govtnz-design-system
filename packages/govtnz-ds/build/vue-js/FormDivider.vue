<template>
  <div class="g-form-divider">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Contents..." } },
  computed: {}
});
</script>
<style scoped>
.g-formDivider-hint > * {
  margin-top: 0px;
}
</style>
