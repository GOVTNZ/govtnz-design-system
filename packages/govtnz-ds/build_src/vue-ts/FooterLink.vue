<template>
  <a
    class="g-footer-link"
    v-bind:href="href"
    v-bind:rel="rel"
    v-bind:target="target"
  >
    <slot></slot>
  </a>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: { type: String, required: false },
    children: { required: false, default: " Example header content " }
  },
  computed: {}
});
</script>
<style scoped>
.g-footer-link {
  display: block;
  padding: 0.7em 1em;
  color: #d3d3d3;
  margin-left: -1em;
  margin-right: -1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
@media only screen and (min-width: 48em) {
  .g-footer-link:first-child {
    margin-left: -1em;
  }
  .g-footer-link {
    display: inline-block;
    margin-right: 1em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
}
.g-footer-link:hover {
  color: #fff;
}
</style>
