<template>
  <div class="g-radios-form-divider">
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
.g-radios-form-divider {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 40px;
  margin-bottom: 10px;
  text-align: center;
}
@media print {
  .g-radios-form-divider {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-radios-form-divider {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-radios-form-divider {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-radios-form-divider {
    color: #000000;
  }
}
.g-radios-hint > * {
  margin-top: 0px;
}
</style>
