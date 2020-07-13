<template>
  <nav aria-label="Main" class="g-main-nav" role="navigation">
    <button
      v-bind:aria-controls="id"
      v-bind:aria-expanded="isOpen"
      v-bind:class="computed__class"
      v-bind:name="name"
      v-bind:type="type"
    >
      <slot name="button"></slot>

      <svg
        class="g-main-nav__button__icon"
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

    <div v-bind:id="id">
      <ul v-bind:class="computed__class2">
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
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
    name: { type: String, required: false },
    type: { type: String, required: false },
    button: { required: false, default: " Menu " },
    children: { required: false, default: " MainNavLink components go here " }
  },
  computed: {
    computed__class() {
      return (
        "g-main-nav__button " +
        (constants.isOpen[this.isOpen] !== undefined
          ? ` ${constants.isOpen[this.isOpen]}`
          : "")
      );
    },
    computed__class2() {
      return (
        "g-main-nav__ul " +
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
  background-color: --g-theme-inverted-variant-background-color;
  color: --g-theme-inverted-color;
}
.g-flex-container .g-main-nav,
.g-flex-container-fluid .g-main-nav {
  margin: 0px -1rem;
}
@media only screen and (min-width: 48em) {
  .g-main-nav {
    margin: 0px;
    background-color: transparent;
  }
  .g-flex-container .g-main-nav,
  .g-flex-container-fluid .g-main-nav {
    margin: 0px -2rem;
  }
}
.g-main-nav__button {
  position: absolute;
  top: 3px;
  right: 3px;
  background: transparent;
  color: g-theme-inverted-color;
  font-size: 16px;
  display: none;
  padding: 1em;
  border: none;
}
.g-main-nav__button.g-main-nav--open,
.g-main-nav__button.g-main-nav--closed {
  display: inline-block;
}
@media only screen and (min-width: 48em) {
  .g-main-nav__button.g-main-nav--open,
  .g-main-nav__button.g-main-nav--closed {
    display: none;
  }
}
.g-main-nav__button:focus {
  outline: 3px solid g-theme-focus-ring-color;
}
.g-main-nav__button__icon {
  display: inline-block;
  color: g-theme-inverted-menu-button-color;
  transition: transform 0.15s;
  vertical-align: middle;
  margin-left: 0.2em;
  width: 12px;
  height: 12px;
  transform: rotate(180deg);
}
.g-main-nav__button.g-main-nav--closed > .g-main-nav__button__icon {
  transform: rotate(0deg);
}
.g-main-nav__ul {
  list-style: none;
  padding: 0px;
  margin: 0px 0px 0px 1rem;
}
.g-main-nav__ul.g-main-nav--open {
  display: block;
}
.g-main-nav__ul.g-main-nav--closed {
  display: none;
}
@media only screen and (min-width: 48em) {
  .g-main-nav__ul {
    margin: -4px 2rem 0px 2rem;
  }
  .g-main-nav__ul.g-main-nav--closed {
    display: block;
  }
}
</style>
