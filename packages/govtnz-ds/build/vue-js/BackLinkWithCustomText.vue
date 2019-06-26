<template>
  <a
    class="g-backLinkWithCustomText-back-link"
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
  props: {
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
    computed__target() {
      return constants.target[this.target] !== undefined
        ? constants.target[this.target]
        : "";
    }
  }
});</script
><style scoped>
.g-backLinkWithCustomText-back-link {
  font-size: 0.875rem;
  line-height: 1.14286;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;
  border-bottom: 1px solid #0b0c0c;
  text-decoration: none;
}
@media (min-width: 40.0625em) {
  .g-backLinkWithCustomText-back-link {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-backLinkWithCustomText-back-link {
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media print {
  .g-backLinkWithCustomText-back-link {
    font-family: sans-serif;
  }
}
.g-backLinkWithCustomText-back-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-backLinkWithCustomText-back-link:link,
.g-backLinkWithCustomText-back-link:visited,
.g-backLinkWithCustomText-back-link:hover,
.g-backLinkWithCustomText-back-link:active,
.g-backLinkWithCustomText-back-link:focus {
  color: #0b0c0c;
}
@media print {
  .g-backLinkWithCustomText-back-link:link,
  .g-backLinkWithCustomText-back-link:visited,
  .g-backLinkWithCustomText-back-link:hover,
  .g-backLinkWithCustomText-back-link:active,
  .g-backLinkWithCustomText-back-link:focus {
    color: #000000;
  }
}
.g-backLinkWithCustomText-back-link:before {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  -webkit-clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
  clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
  border-width: 5px 6px 5px 0;
  border-right-color: inherit;
  content: "";
  position: absolute;
  top: -1px;
  bottom: 1px;
  left: 0;
  margin: auto;
}
.g-backLinkWithCustomText-back-link:before {
  top: -1px;
  bottom: 1px;
}
.g-backLinkWithCustomText-error-summary__list a {
  font-weight: 700;
}
.g-backLinkWithCustomText-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-backLinkWithCustomText-error-summary__list a:link,
.g-backLinkWithCustomText-error-summary__list a:visited,
.g-backLinkWithCustomText-error-summary__list a:hover,
.g-backLinkWithCustomText-error-summary__list a:active {
  color: #b10e1e;
}
.g-backLinkWithCustomText-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-backLinkWithCustomText-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-backLinkWithCustomText-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-backLinkWithCustomText-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-backLinkWithCustomText-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-backLinkWithCustomText-header__navigation-item--active a:link,
.g-backLinkWithCustomText-header__navigation-item--active a:hover,
.g-backLinkWithCustomText-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-backLinkWithCustomText-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-backLinkWithCustomText-hint > * {
  margin-top: 0px;
}
</style>
