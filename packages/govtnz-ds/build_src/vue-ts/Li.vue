<template>
  <li>
    <slot></slot>
  </li>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});
</script>
