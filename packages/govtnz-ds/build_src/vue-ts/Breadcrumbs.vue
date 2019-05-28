<template>
  <div class="g-breadcrumbs">
    <ol class="g-breadcrumbs__list">
      <li class="g-breadcrumbs__list-item">
        <a
          class="g-breadcrumbs__link"
          v-bind:href="href"
          v-bind:rel="rel"
          v-bind:target="computed__target"
        >
          Section
        </a>
      </li>

      <li class="g-breadcrumbs__list-item">
        <a
          class="g-breadcrumbs__link"
          v-bind:href="href2"
          v-bind:rel="rel2"
          v-bind:target="computed__target2"
        >
          Sub-section
        </a>
      </li>
    </ol>
  </div> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
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
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2() {
      return constants[this.target2] !== undefined
        ? constants[this.target2]
        : "";
    }
  }
});</script
><style scoped>
.g-breadcrumbs-list > li {
  margin-bottom: 5px;
}
.g-breadcrumbs-list--bullet > li,
.g-breadcrumbs-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-breadcrumbs-list--bullet > li,
  .g-breadcrumbs-list--number > li {
    margin-bottom: 5px;
  }
}
.g-breadcrumbs {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.14286;
  color: #0b0c0c;
  margin-top: 15px;
  margin-bottom: 10px;
}
@media print {
  .g-breadcrumbs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-breadcrumbs {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-breadcrumbs {
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media print {
  .g-breadcrumbs {
    color: #000000;
  }
}
.g-breadcrumbs__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.g-breadcrumbs__list:after {
  content: "";
  display: block;
  clear: both;
}
.g-breadcrumbs__list-item {
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-left: 15.655px;
  float: left;
}
.g-breadcrumbs__list-item:before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  bottom: 1px;
  left: -3.31px;
  width: 7px;
  height: 7px;
  margin: auto 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border: solid;
  border-width: 1px 1px 0 0;
  border-color: #6f777b;
}
.g-breadcrumbs__list-item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.g-breadcrumbs__list-item:first-child:before {
  content: none;
  display: none;
}
.g-breadcrumbs__link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-breadcrumbs__link {
    font-family: sans-serif;
  }
}
.g-breadcrumbs__link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-breadcrumbs__link:link,
.g-breadcrumbs__link:visited,
.g-breadcrumbs__link:hover,
.g-breadcrumbs__link:active,
.g-breadcrumbs__link:focus {
  color: #0b0c0c;
}
@media print {
  .g-breadcrumbs__link:link,
  .g-breadcrumbs__link:visited,
  .g-breadcrumbs__link:hover,
  .g-breadcrumbs__link:active,
  .g-breadcrumbs__link:focus {
    color: #000000;
  }
}
.g-breadcrumbs-error-summary__list a {
  font-weight: 700;
}
.g-breadcrumbs-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-breadcrumbs-error-summary__list a:link,
.g-breadcrumbs-error-summary__list a:visited,
.g-breadcrumbs-error-summary__list a:hover,
.g-breadcrumbs-error-summary__list a:active {
  color: #b10e1e;
}
.g-breadcrumbs-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-breadcrumbs-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-breadcrumbs-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-breadcrumbs-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-breadcrumbs-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-breadcrumbs-header__navigation-item--active a:link,
.g-breadcrumbs-header__navigation-item--active a:hover,
.g-breadcrumbs-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-breadcrumbs-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
</style>
