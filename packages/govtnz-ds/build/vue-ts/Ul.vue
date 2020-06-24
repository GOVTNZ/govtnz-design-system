<template>
  <ul v-bind:class="computed__class">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    spacing: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-ul " + (this.spacing ? " g-list--spacing" : "");
    }
  }
});
</script>
<style scoped>
.g-ul {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: g-theme-color;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 20px;
  list-style-type: disc;
}
@media print {
  .g-ul {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-ul {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 1rem;
  }
}
@media print {
  .g-ul {
    font-size: 14pt;
    line-height: 1.15;
    color: g-theme-print-color;
  }
}
.g-ul .g-ul {
  margin-top: 10px;
}
.g-hint > * {
  margin-top: 0px;
}
.g-ul li .g-ul {
  margin-top: 0.5rem;
}
</style>
