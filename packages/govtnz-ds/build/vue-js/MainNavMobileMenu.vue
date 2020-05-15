<template>
  <button
    v-bind:aria-controls="navId"
    v-bind:aria-expanded="isOpen"
    v-bind:class="computed__class"
    v-bind:name="name"
    v-bind:type="type"
  >
    <slot></slot>

    <svg
      class="g-main-nav-mobile-menu__icon"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </svg>
  </button>
</template>
<script>
import Vue from "vue";

const constants = {
  isOpen: {
    true: "g-main-nav-mobile-menu--open",
    false: "g-main-nav-mobile-menu--closed"
  }
};

export default Vue.extend({
  props: {
    isOpen: {
      type: String,
      validator: value => {
        return ["true", "false"].indexOf(value) !== -1;
      },
      required: false
    },
    navId: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: String, required: false },
    children: { required: false, default: " Menu (example text) " }
  },
  computed: {
    computed__class() {
      return (
        "g-main-nav-mobile-menu" +
        (constants.isOpen[this.isOpen] !== undefined
          ? ` ${constants.isOpen[this.isOpen]}`
          : "")
      );
    }
  }
});
</script>
<style scoped>
.g-main-nav-mobile-menu {
  background: transparent;
  color: var(--g-theme-inverted-color, #ffffff);
  font-size: 16px;
  display: none;
  padding: 1em;
  border: none;
}
.g-main-nav-mobile-menu:focus {
  outline: 3px solid var(--color-theme-focus, #b53cde);
}
.g-main-nav-mobile-menu--open {
  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);
}
.g-main-nav-mobile-menu--open,
.g-main-nav-mobile-menu--closed {
  display: inline-block;
}
.g-main-nav-mobile-menu > .g-main-nav-mobile-menu__icon {
  display: inline-block;
  fill: var(--g-theme-inverted-color, #ffffff);
  transition: transform 0.15s;
  vertical-align: middle;
  padding-left: 0.2em;
  width: 16px;
  height: 16px;
}
.g-main-nav-mobile-menu--closed > .g-main-nav-mobile-menu__icon {
  transform: rotate(180deg);
}
</style>
