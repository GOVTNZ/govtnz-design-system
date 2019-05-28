<template>
  <a
    v-bind:class="computed__class"
    v-bind:href="href"
    v-bind:rel="rel"
    v-bind:target="computed__target"
  >
    <slot></slot>
  </a> </template
><script>
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    isMuted: { type: Boolean, default: false, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-a-link" + (this.isMuted ? " g-a-link--muted" : "");
    },
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    }
  }
});</script
><style scoped>
.g-a-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-a-link {
    font-family: sans-serif;
  }
}
.g-a-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-a-link:link {
  color: #005ea5;
}
.g-a-link:visited {
  color: #4c2c92;
}
.g-a-link:hover {
  color: #2b8cc4;
}
.g-a-link:active {
  color: #2b8cc4;
}
.g-a-link:focus {
  color: #0b0c0c;
}
.g-a-link--muted:link,
.g-a-link--muted:visited,
.g-a-link--muted:hover,
.g-a-link--muted:active {
  color: #6f777b;
}
.g-a-link--muted:focus {
  color: #0b0c0c;
}
.g-a-error-summary__list a {
  font-weight: 700;
}
.g-a-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-a-error-summary__list a:link,
.g-a-error-summary__list a:visited,
.g-a-error-summary__list a:hover,
.g-a-error-summary__list a:active {
  color: #b10e1e;
}
.g-a-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-a-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-a-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-a-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-a-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-a-header__navigation-item--active a:link,
.g-a-header__navigation-item--active a:hover,
.g-a-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-a-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
</style>
