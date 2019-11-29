<template>
  <span class="g-caption-xl">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});
</script>
<style scoped>
.g-captionXl-hint > * {
  margin-top: 0px;
}
</style>
