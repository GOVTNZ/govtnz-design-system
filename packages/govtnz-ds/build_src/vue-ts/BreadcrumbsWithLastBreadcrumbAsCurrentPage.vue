<template>
  <div class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs">
    <ol class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list">
      <li
        class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
      >
        <a
          class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link"
          v-bind:href="href"
          v-bind:rel="rel"
          v-bind:target="computed__target"
        >
          Home
        </a>
      </li>

      <li
        class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
      >
        <a
          class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link"
          v-bind:href="href2"
          v-bind:rel="rel2"
          v-bind:target="computed__target2"
        >
          Passports, travel and living abroad
        </a>
      </li>

      <li
        aria-current="page"
        class="g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"
      >
        Travel abroad
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
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-list > li {
  margin-bottom: 0.25rem;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-list--bullet > li,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-list--bullet > li,
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-list--number > li {
    margin-bottom: 5px;
  }
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs {
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
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs {
    font-size: 14pt;
    line-height: 1.2;
  }
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs {
    color: #000000;
  }
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list:after {
  content: "";
  display: block;
  clear: both;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item {
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-left: 15.655px;
  float: left;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item:before {
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
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item:first-child {
  margin-left: 0;
  padding-left: 0;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item:first-child:before {
  content: none;
  display: none;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link {
    font-family: sans-serif;
  }
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:link,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:visited,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:hover,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:active,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:focus {
  color: #0b0c0c;
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:link,
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:visited,
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:hover,
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:active,
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link:focus {
    color: #000000;
  }
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a {
  font-weight: 700;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:link,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:visited,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:hover,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:active {
  color: #b10e1e;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item--active
  a:link,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item--active
  a:hover,
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item--active
  a:visited {
  color: #1d8feb;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-header__navigation-item--active
  a:focus {
  color: #0b0c0c;
}
.g-breadcrumbsWithLastBreadcrumbAsCurrentPage-hint > * {
  margin-top: 0px;
}
</style>
