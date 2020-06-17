<template>
  <ul v-bind:class="computed__class">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    bulleted: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-list " + (this.bulleted ? " g-list--bullet" : "");
    }
  }
});
</script>
<style scoped>
.g-ul-hint > * {
  margin-top: 0px;
}
</style>
