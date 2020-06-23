<template>
  <ul v-bind:class="computed__class">
    <slot></slot>
  </ul>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    bulleted: { type: Boolean, default: false, required: false },
    spacing: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return (
        "g-list " +
        (this.bulleted ? " g-list--bullet" : "") +
        (this.spacing ? " g-list--spacing" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-list {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: #2a2a2a;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;
}
@media print {
  .g-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 1rem;
  }
}
@media print {
  .g-list {
    font-size: 14pt;
    line-height: 1.15;
    color: #000000;
  }
}
.g-list .g-list {
  margin-top: 10px;
}
.g-list--bullet {
  padding-left: 20px;
  list-style-type: disc;
}
.g-hint > * {
  margin-top: 0px;
}
.g-list li .g-list {
  margin-top: 0.5rem;
}
</style>
