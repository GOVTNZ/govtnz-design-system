<template>
  <button
    v-bind:aria-controls="menuContainer"
    v-bind:aria-expanded="ariaExpanded"
    v-bind:class="computed__class"
    v-bind:name="name"
    v-bind:type="type"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  isOpen: {
    true: "g-main-nav-mobile-menu--open",
    false: "g-main-nav-mobile-menu--closed"
  }
};

export default Vue.extend({
  props: {
    ariaExpanded: { type: String, required: true },
    isOpen: {
      type: String,
      validator: value => {
        return ["true", "false"].indexOf(value) !== -1;
      },
      required: false
    },
    menuContainer: { type: String, required: false },
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
  background: red;
  color: white;
  display: none;
}
.g-main-nav-mobile-menu--open,
.g-main-nav-mobile-menu--closed {
  display: inline-block;
}
.g-main-nav-mobile-menu--open::after {
  display: inline;
  content: "(open)";
}
.g-main-nav-mobile-menu--closed::after {
  display: inline;
  content: "(close)";
}
</style>
