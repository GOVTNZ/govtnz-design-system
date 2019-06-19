<template>
  <div class="g-tabsTabsWithAnchorInPanel-tabs" data-module="tabs">
    <h2 class="g-tabsTabsWithAnchorInPanel-tabs__title">
      Contents
    </h2>

    <ul class="g-tabsTabsWithAnchorInPanel-tabs__list" role="tablist">
      <li
        class="g-tabsTabsWithAnchorInPanel-tabs__list-item"
        role="presentation"
      >
        <a
          v-bind:aria-controls="tab1"
          aria-selected="true"
          class="g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected"
          v-bind:href="href"
          v-bind:id="tabTab1"
          role="tab"
          tabindex="0"
          v-bind:rel="rel"
          v-bind:target="computed__target"
        >
          Tab 1
        </a>
      </li>

      <li
        class="g-tabsTabsWithAnchorInPanel-tabs__list-item"
        role="presentation"
      >
        <a
          v-bind:aria-controls="tab2"
          aria-selected="false"
          class="g-tabsTabsWithAnchorInPanel-tabs__tab"
          v-bind:href="href2"
          v-bind:id="tabTab2"
          role="tab"
          tabindex="-1"
          v-bind:rel="rel2"
          v-bind:target="computed__target2"
        >
          Tab 2
        </a>
      </li>
    </ul>

    <section
      v-bind:aria-labelledby="tabTab1"
      class="g-tabsTabsWithAnchorInPanel-tabs__panel"
      v-bind:id="tab1"
      role="tabpanel"
    >
      <h2 class="g-tabsTabsWithAnchorInPanel-heading-l">
        Tab 1
      </h2>

      <p>
        Testing that when you click the anchor it moves to the anchor point
        successfully
      </p>

      <a
        class="g-tabsTabsWithAnchorInPanel-link"
        v-bind:href="href3"
        v-bind:rel="rel3"
        v-bind:target="computed__target3"
      >
        Anchor
      </a>

      <a
        v-bind:id="anchor"
        tabindex="0"
        v-bind:href="href4"
        v-bind:rel="rel4"
        v-bind:target="computed__target4"
      >
        Anchor Point
      </a>
    </section>

    <section
      v-bind:aria-labelledby="tabTab2"
      class="g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden"
      v-bind:id="tab2"
      role="tabpanel"
    >
      <h2 class="g-tabsTabsWithAnchorInPanel-heading-l">
        Tab 2
      </h2>
    </section>
  </div> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    tabTab1: { type: String, required: false },
    tab1: { type: String, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    tabTab2: { type: String, required: false },
    tab2: { type: String, required: false },
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href3: { type: String, required: true },
    rel3: { type: String, required: false },
    target3: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    anchor: { type: String, required: false },
    href4: { type: String, required: true },
    rel4: { type: String, required: false },
    target4: {
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
    },
    computed__target3() {
      return constants[this.target3] !== undefined
        ? constants[this.target3]
        : "";
    },
    computed__target4() {
      return constants[this.target4] !== undefined
        ? constants[this.target4]
        : "";
    }
  }
});</script
><style scoped>
.g-tabsTabsWithAnchorInPanel-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-link {
    font-family: sans-serif;
  }
}
.g-tabsTabsWithAnchorInPanel-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-tabsTabsWithAnchorInPanel-link:link {
  color: #005ea5;
}
.g-tabsTabsWithAnchorInPanel-link:visited {
  color: #4c2c92;
}
.g-tabsTabsWithAnchorInPanel-link:hover {
  color: #2b8cc4;
}
.g-tabsTabsWithAnchorInPanel-link:active {
  color: #2b8cc4;
}
.g-tabsTabsWithAnchorInPanel-link:focus {
  color: #0b0c0c;
}
.g-tabsTabsWithAnchorInPanel-list > li {
  margin-bottom: 5px;
}
.g-tabsTabsWithAnchorInPanel-list--bullet > li,
.g-tabsTabsWithAnchorInPanel-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-list--bullet > li,
  .g-tabsTabsWithAnchorInPanel-list--number > li {
    margin-bottom: 5px;
  }
}
.g-tabsTabsWithAnchorInPanel-heading-l {
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: g-heading-font-weight;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-heading-l {
    color: #000000;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-heading-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-heading-l {
    font-size: 2.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-heading-l {
    font-size: 24pt;
    line-height: 1.05;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-heading-l {
    margin-bottom: 30px;
  }
}
.g-tabsTabsWithAnchorInPanel-body-l + .g-tabsTabsWithAnchorInPanel-heading-l,
.g-tabsTabsWithAnchorInPanel-body-lead
  + .g-tabsTabsWithAnchorInPanel-heading-l {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-body-l + .g-tabsTabsWithAnchorInPanel-heading-l,
  .g-tabsTabsWithAnchorInPanel-body-lead
    + .g-tabsTabsWithAnchorInPanel-heading-l {
    padding-top: 10px;
  }
}
.g-tabsTabsWithAnchorInPanel-body-m + .g-tabsTabsWithAnchorInPanel-heading-l,
.g-tabsTabsWithAnchorInPanel-body + .g-tabsTabsWithAnchorInPanel-heading-l,
.g-tabsTabsWithAnchorInPanel-body-s + .g-tabsTabsWithAnchorInPanel-heading-l,
.g-tabsTabsWithAnchorInPanel-list + .g-tabsTabsWithAnchorInPanel-heading-l {
  padding-top: 15px;
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-body-m + .g-tabsTabsWithAnchorInPanel-heading-l,
  .g-tabsTabsWithAnchorInPanel-body + .g-tabsTabsWithAnchorInPanel-heading-l,
  .g-tabsTabsWithAnchorInPanel-body-s + .g-tabsTabsWithAnchorInPanel-heading-l,
  .g-tabsTabsWithAnchorInPanel-list + .g-tabsTabsWithAnchorInPanel-heading-l {
    padding-top: 20px;
  }
}
.g-tabsTabsWithAnchorInPanel-summary-list__value > p {
  margin-bottom: 10px;
}
.g-tabsTabsWithAnchorInPanel-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-tabsTabsWithAnchorInPanel-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-tabsTabsWithAnchorInPanel-error-summary__list a {
  font-weight: 700;
}
.g-tabsTabsWithAnchorInPanel-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-tabsTabsWithAnchorInPanel-error-summary__list a:link,
.g-tabsTabsWithAnchorInPanel-error-summary__list a:visited,
.g-tabsTabsWithAnchorInPanel-error-summary__list a:hover,
.g-tabsTabsWithAnchorInPanel-error-summary__list a:active {
  color: #b10e1e;
}
.g-tabsTabsWithAnchorInPanel-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-tabsTabsWithAnchorInPanel-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-tabsTabsWithAnchorInPanel-header__navigation-item--active a:link,
.g-tabsTabsWithAnchorInPanel-header__navigation-item--active a:hover,
.g-tabsTabsWithAnchorInPanel-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-tabsTabsWithAnchorInPanel-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-tabsTabsWithAnchorInPanel-tabs {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-top: 5px;
  margin-bottom: 20px;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs {
    margin-top: 5px;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs {
    margin-bottom: 30px;
  }
}
.g-tabsTabsWithAnchorInPanel-tabs__title {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 5px;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs__title {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs__title {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs__title {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-tabsTabsWithAnchorInPanel-tabs__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (max-width: 40.0525em) {
  .g-tabsTabsWithAnchorInPanel-tabs__list {
    margin-bottom: 20px;
  }
}
@media (max-width: 40.0525em) and (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs__list {
    margin-bottom: 30px;
  }
}
.g-tabsTabsWithAnchorInPanel-tabs__list-item {
  margin-left: 25px;
}
.g-tabsTabsWithAnchorInPanel-tabs__list-item::before {
  content: "— ";
  margin-left: -25px;
  padding-right: 5px;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs__tab {
    font-family: sans-serif;
  }
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:link {
  color: #005ea5;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:visited {
  color: #4c2c92;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:hover {
  color: #2b8cc4;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:active {
  color: #2b8cc4;
}
.g-tabsTabsWithAnchorInPanel-tabs__tab:focus {
  color: #0b0c0c;
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs__tab {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs__tab {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabsTabsWithAnchorInPanel-tabs__tab {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-tabsTabsWithAnchorInPanel-tabs__panel {
  margin-bottom: 30px;
}
@media (min-width: 40.0625em) {
  .g-tabsTabsWithAnchorInPanel-tabs__panel {
    margin-bottom: 50px;
  }
}
@media (min-width: 40.0625em) {
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__list {
    border-bottom: 1px solid #bfc1c3;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__list:after {
    content: "";
    display: block;
    clear: both;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__list-item {
    margin-left: 0;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__list-item::before {
    content: none;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__title {
    display: none;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__tab {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__tab--selected {
    margin-top: -5px;
    margin-bottom: -1px;
    padding-top: 14px;
    padding-right: 19px;
    padding-bottom: 16px;
    padding-left: 19px;
    border: 1px solid #bfc1c3;
    border-bottom: 0;
    color: #0b0c0c;
    background-color: #ffffff;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__tab--selected:focus {
    background-color: transparent;
  }
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__panel {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
}
@media (min-width: 40.0625em) and (min-width: 40.0625em) {
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__panel {
    margin-bottom: 0;
  }
}
@media (min-width: 40.0625em) {
  .js-enabled .g-tabsTabsWithAnchorInPanel-tabs__panel--hidden {
    display: none;
  }
}
</style>
