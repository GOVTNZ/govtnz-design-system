<template>
  <li class="g-main-nav__item">
    <a
      v-bind:aria-current="ariaCurrent"
      v-bind:href="href"
      v-bind:rel="rel"
      v-bind:target="target"
    >
      <slot></slot>
    </a>
  </li>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    ariaCurrent: { type: String, required: true },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: { type: String, required: false },
    children: { required: false, default: " Example item text " }
  },
  computed: {}
});
</script>
<style scoped>
.g-main-nav__item {
  display: inline-block;
  margin-right: 1em;
}
.g-main-nav__item:last-child {
  margin-right: 0px;
}
</style>
