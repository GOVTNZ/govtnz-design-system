<template>
  <div class="g-form-divider">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example Text" } },
  computed: {}
});
</script>
<style scoped>
.g-formDivider-hint > * {
  margin-top: 0px;
}
</style>
