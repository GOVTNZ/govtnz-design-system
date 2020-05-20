<template>
  <li class="g-main-nav__item">
    <a
      v-bind:aria-current="ariaCurrent"
      v-bind:class="computed__class"
      v-bind:href="href"
      v-bind:rel="rel"
      v-bind:target="target"
    >
      <slot></slot>
    </a>
  </li>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    ariaCurrent: { type: Boolean, default: false, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: { type: String, required: false },
    children: { required: false, default: " Example item text " }
  },
  computed: {
    computed__class() {
      return (
        "g-main-nav__item__link" +
        (this.ariaCurrent ? " g-main-nav__item__link--active" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-main-nav__item {
  display: block;
  margin-right: 0em;
  margin-left: -0.9em;
  font-family: sans-serif;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 20px;
}
.g-main-nav__item__link {
  display: block;
  padding: 0.6em 1em;
  color: var(--g-theme-inverted-color, #ffffff);
  font-weight: bold;
  text-decoration: none;
}
.g-main-nav__item__link--active {
  border-left: solid 0.2em var(--g-theme-inverted-brand, #24a882);
  padding-left: 0.8em;
}
.g-main-nav__item__link:focus {
  outline: 3px solid var(--color-theme-focus, #b53cde);
}
@media only screen and (min-width: 48em) {
  .g-main-nav__item {
    display: inline-block;
    margin-right: 1em;
    margin-left: 0px;
  }
  .g-main-nav__item:first-child {
    margin-left: 0em;
  }
  .g-main-nav__item:last-child {
    margin-right: 0px;
  }
  .g-main-nav__item__link {
    position: relative;
    display: inline-block;
    padding: 0.6em 1em;
  }
  .g-main-nav__item__link--active {
    border-left: none;
  }
  .g-main-nav__item__link--active::after {
    content: "";
    position: absolute;
    clear: both;
    display: block;
    bottom: 0px;
    left: 1em;
    right: 1em;
    height: 5px;
    background: #24a882;
    background-color: var(--g-theme-inverted-brand, #24a882);
  }
}
</style>
