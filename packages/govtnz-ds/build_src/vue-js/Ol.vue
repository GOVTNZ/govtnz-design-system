<template>
  <ol v-bind:class="computed__class">
    <slot></slot>
  </ol>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    numbered: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-list " + (this.numbered ? " g-list--number" : "");
    }
  }
});
</script>
<style scoped>
.g-ol-hint > * {
  margin-top: 0px;
}
</style>
