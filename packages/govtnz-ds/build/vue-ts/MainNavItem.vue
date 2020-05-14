<template>
  <li class="g-main-nav__item">
    <a
      v-bind:aria-current="ariaCurrent"
      class="g-main-nav__item__link"
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
    ariaCurrent: { type: String, required: false },
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
  display: block;
  margin-right: 1em;
  margin-left: -1em;
}
.g-main-nav__item__link {
  display: block;
  padding: 0.6em 1em;
  color: var(--g-theme-inverted-color, #ffffff);
  font-weight: bold;
  text-decoration: none;
}
@media only screen and (min-width: 64em) {
  .g-main-nav__item {
    display: inline-block;
    margin-right: 1em;
    margin-left: 0px;
  }
  .g-main-nav__item:first-child {
    margin-left: -1em;
  }
  .g-main-nav__item:last-child {
    margin-right: 0px;
  }
  .g-main-nav__item__link {
    display: inline-block;
    padding: 0.6em 1em;
  }
}
</style>
