<template>
  <a
    class="g-skip-link"
    v-bind:href="href"
    v-bind:rel="rel"
    v-bind:target="computed__target"
  >
    Skip to main content
  </a>
</template>
<script>
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  props: {
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target() {
      return constants.target[this.target] !== undefined
        ? constants.target[this.target]
        : "";
    }
  }
});
</script>
<style scoped>
.g-skipLink-error-summary__list a {
  font-weight: 700;
}
.g-skipLink-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-skipLink-error-summary__list a:link,
.g-skipLink-error-summary__list a:visited,
.g-skipLink-error-summary__list a:hover,
.g-skipLink-error-summary__list a:active {
  color: #b10e1e;
}
.g-skipLink-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-skipLink-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-skipLink-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-skipLink-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-skipLink-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-skipLink-header__navigation-item--active a:link,
.g-skipLink-header__navigation-item--active a:hover,
.g-skipLink-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-skipLink-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-skipLink-hint > * {
  margin-top: 0px;
}
</style>
