<template>
  <nav
    aria-label="Main"
    v-bind:class="computed__class"
    v-bind:id="id"
    role="navigation"
  >
    <ul class="g-main-nav__ul">
      <slot></slot>
    </ul>
  </nav>
</template>
<script>
import Vue from "vue";

const constants = {
  isOpen: { true: "g-main-nav--open", false: "g-main-nav--closed" }
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
    id: { type: String, required: false },
    children: { required: false, default: " MainNavItem components go here " }
  },
  computed: {
    computed__class() {
      return (
        "g-main-nav" +
        (constants.isOpen[this.isOpen] !== undefined
          ? ` ${constants.isOpen[this.isOpen]}`
          : "")
      );
    }
  }
});
</script>
<style scoped>
.g-main-nav {
  display: block;
  padding: 0px;
  margin: 0px;
  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);
}
.g-main-nav--open {
  display: block;
}
.g-main-nav--closed {
  display: none;
}
.g-main-nav__ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
</style>
