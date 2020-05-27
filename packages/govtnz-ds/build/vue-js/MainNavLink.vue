<template>
  <li class="g-main-nav__link">
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
        "g-main-nav__link__a" +
        (this.ariaCurrent ? " g-main-nav__link__a--active" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-main-nav__link {
  display: block;
  margin-right: 0em;
  margin-left: -0.9em;
  font-family: sans-serif;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 20px;
}
.g-main-nav__link__a {
  display: block;
  padding: 1em;
  color: var(--g-theme-inverted-color, #ffffff);
  text-decoration: none;
}
.g-main-nav__link__a:hover {
  text-decoration: underline;
}
.g-main-nav__link__a--active {
  border-left: solid 0.2em var(--g-theme-inverted-brand, #24a882);
  padding-left: 0.8em;
}
.g-main-nav__link__a:focus {
  outline: 3px solid var(--color-theme-focus, #b53cde);
}
@media only screen and (min-width: 48em) {
  .g-main-nav__link {
    display: inline-block;
    margin-right: 1em;
    margin-left: 0px;
    margin-top: 4px;
  }
  .g-main-nav__link:first-child {
    margin-left: 0em;
  }
  .g-main-nav__link:last-child {
    margin-right: 0px;
  }
  .g-main-nav__link__a {
    position: relative;
    display: inline-block;
    padding: 0.6em 1em;
  }
  .g-main-nav__link__a--active {
    border-left: none;
  }
  .g-main-nav__link__a--active::after {
    content: "";
    position: absolute;
    clear: both;
    display: block;
    bottom: 0px;
    left: 1em;
    right: 1em;
    height: 4px;
    background: #24a882;
    background-color: var(--g-theme-inverted-brand, #24a882);
  }
}
</style>
