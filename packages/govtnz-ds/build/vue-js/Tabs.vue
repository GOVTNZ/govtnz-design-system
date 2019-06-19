<template>
  <div class="g-tabs" data-module="tabs">
    <h2 class="g-tabs__title">
      Contents
    </h2>

    <ul class="g-tabs__list" role="tablist">
      <li class="g-tabs__list-item" role="presentation">
        <a
          v-bind:aria-controls="pastDay"
          aria-selected="true"
          class="g-tabs__tab g-tabs__tab--selected"
          v-bind:href="href"
          v-bind:id="tabPastDay"
          role="tab"
          tabindex="0"
          v-bind:rel="rel"
          v-bind:target="computed__target"
        >
          Past day
        </a>
      </li>

      <li class="g-tabs__list-item" role="presentation">
        <a
          v-bind:aria-controls="pastWeek"
          aria-selected="false"
          class="g-tabs__tab"
          v-bind:href="href2"
          v-bind:id="tabPastWeek"
          role="tab"
          tabindex="-1"
          v-bind:rel="rel2"
          v-bind:target="computed__target2"
        >
          Past week
        </a>
      </li>

      <li class="g-tabs__list-item" role="presentation">
        <a
          v-bind:aria-controls="pastMonth"
          aria-selected="false"
          class="g-tabs__tab"
          v-bind:href="href3"
          v-bind:id="tabPastMonth"
          role="tab"
          tabindex="-1"
          v-bind:rel="rel3"
          v-bind:target="computed__target3"
        >
          Past month
        </a>
      </li>

      <li class="g-tabs__list-item" role="presentation">
        <a
          v-bind:aria-controls="pastYear"
          aria-selected="false"
          class="g-tabs__tab"
          v-bind:href="href4"
          v-bind:id="tabPastYear"
          role="tab"
          tabindex="-1"
          v-bind:rel="rel4"
          v-bind:target="computed__target4"
        >
          Past year
        </a>
      </li>
    </ul>

    <section
      v-bind:aria-labelledby="tabPastDay"
      class="g-tabs__panel"
      v-bind:id="pastDay"
      role="tabpanel"
    >
      <h2 class="g-tabs-heading-l">
        Past day
      </h2>

      <table class="g-tabs-table">
        <thead class="g-tabs-table__head">
          <tr class="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>

        <tbody class="g-tabs-table__body">
          <tr class="g-tabs-table__row">
            David Francis 3 0
          </tr>

          <tr class="g-tabs-table__row">
            Paul Farmer 1 0
          </tr>

          <tr class="g-tabs-table__row">
            Rita Patel 2 0
          </tr>
        </tbody>
      </table>
    </section>

    <section
      v-bind:aria-labelledby="tabPastWeek"
      class="g-tabs__panel g-tabs__panel--hidden"
      v-bind:id="pastWeek"
      role="tabpanel"
    >
      <h2 class="g-tabs-heading-l">
        Past week
      </h2>

      <table class="g-tabs-table">
        <thead class="g-tabs-table__head">
          <tr class="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>

        <tbody class="g-tabs-table__body">
          <tr class="g-tabs-table__row">
            David Francis 24 18
          </tr>

          <tr class="g-tabs-table__row">
            Paul Farmer 16 20
          </tr>

          <tr class="g-tabs-table__row">
            Rita Patel 24 27
          </tr>
        </tbody>
      </table>
    </section>

    <section
      v-bind:aria-labelledby="tabPastMonth"
      class="g-tabs__panel g-tabs__panel--hidden"
      v-bind:id="pastMonth"
      role="tabpanel"
    >
      <h2 class="g-tabs-heading-l">
        Past month
      </h2>

      <table class="g-tabs-table">
        <thead class="g-tabs-table__head">
          <tr class="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>

        <tbody class="g-tabs-table__body">
          <tr class="g-tabs-table__row">
            David Francis 98 95
          </tr>

          <tr class="g-tabs-table__row">
            Paul Farmer 122 131
          </tr>

          <tr class="g-tabs-table__row">
            Rita Patel 126 142
          </tr>
        </tbody>
      </table>
    </section>

    <section
      v-bind:aria-labelledby="tabPastYear"
      class="g-tabs__panel g-tabs__panel--hidden"
      v-bind:id="pastYear"
      role="tabpanel"
    >
      <h2 class="g-tabs-heading-l">
        Past year
      </h2>

      <table class="g-tabs-table">
        <thead class="g-tabs-table__head">
          <tr class="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>

        <tbody class="g-tabs-table__body">
          <tr class="g-tabs-table__row">
            David Francis 1380 1472
          </tr>

          <tr class="g-tabs-table__row">
            Paul Farmer 1129 1083
          </tr>

          <tr class="g-tabs-table__row">
            Rita Patel 1539 1265
          </tr>
        </tbody>
      </table>
    </section>
  </div> </template
><script>
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
    tabPastDay: { type: String, required: false },
    pastDay: { type: String, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    tabPastWeek: { type: String, required: false },
    pastWeek: { type: String, required: false },
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    tabPastMonth: { type: String, required: false },
    pastMonth: { type: String, required: false },
    href3: { type: String, required: true },
    rel3: { type: String, required: false },
    target3: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    tabPastYear: { type: String, required: false },
    pastYear: { type: String, required: false },
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
.g-tabs-list > li {
  margin-bottom: 5px;
}
.g-tabs-list--bullet > li,
.g-tabs-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-tabs-list--bullet > li,
  .g-tabs-list--number > li {
    margin-bottom: 5px;
  }
}
.g-tabs-heading-l {
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
  .g-tabs-heading-l {
    color: #000000;
  }
}
@media print {
  .g-tabs-heading-l {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs-heading-l {
    font-size: 2.5rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tabs-heading-l {
    font-size: 24pt;
    line-height: 1.05;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs-heading-l {
    margin-bottom: 30px;
  }
}
.g-tabs-body-l + .g-tabs-heading-l,
.g-tabs-body-lead + .g-tabs-heading-l {
  padding-top: 5px;
}
@media (min-width: 40.0625em) {
  .g-tabs-body-l + .g-tabs-heading-l,
  .g-tabs-body-lead + .g-tabs-heading-l {
    padding-top: 10px;
  }
}
.g-tabs-body-m + .g-tabs-heading-l,
.g-tabs-body + .g-tabs-heading-l,
.g-tabs-body-s + .g-tabs-heading-l,
.g-tabs-list + .g-tabs-heading-l {
  padding-top: 15px;
}
@media (min-width: 40.0625em) {
  .g-tabs-body-m + .g-tabs-heading-l,
  .g-tabs-body + .g-tabs-heading-l,
  .g-tabs-body-s + .g-tabs-heading-l,
  .g-tabs-list + .g-tabs-heading-l {
    padding-top: 20px;
  }
}
.g-tabs-error-summary__list a {
  font-weight: 700;
}
.g-tabs-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-tabs-error-summary__list a:link,
.g-tabs-error-summary__list a:visited,
.g-tabs-error-summary__list a:hover,
.g-tabs-error-summary__list a:active {
  color: #b10e1e;
}
.g-tabs-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-tabs-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-tabs-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-tabs-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-tabs-header__navigation-item--active a:link,
.g-tabs-header__navigation-item--active a:hover,
.g-tabs-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-tabs-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-tabs {
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
  .g-tabs {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabs {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-tabs {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs {
    margin-top: 5px;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs {
    margin-bottom: 30px;
  }
}
.g-tabs__title {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 5px;
}
@media print {
  .g-tabs__title {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs__title {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabs__title {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-tabs__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (max-width: 40.0525em) {
  .g-tabs__list {
    margin-bottom: 20px;
  }
}
@media (max-width: 40.0525em) and (min-width: 40.0625em) {
  .g-tabs__list {
    margin-bottom: 30px;
  }
}
.g-tabs__list-item {
  margin-left: 25px;
}
.g-tabs__list-item::before {
  content: "— ";
  margin-left: -25px;
  padding-right: 5px;
}
.g-tabs__tab {
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
  .g-tabs__tab {
    font-family: sans-serif;
  }
}
.g-tabs__tab:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-tabs__tab:link {
  color: #005ea5;
}
.g-tabs__tab:visited {
  color: #4c2c92;
}
.g-tabs__tab:hover {
  color: #2b8cc4;
}
.g-tabs__tab:active {
  color: #2b8cc4;
}
.g-tabs__tab:focus {
  color: #0b0c0c;
}
@media print {
  .g-tabs__tab {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs__tab {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabs__tab {
    font-size: 14pt;
    line-height: 1.15;
  }
}
.g-tabs__panel {
  margin-bottom: 30px;
}
@media (min-width: 40.0625em) {
  .g-tabs__panel {
    margin-bottom: 50px;
  }
}
@media (min-width: 40.0625em) {
  .js-enabled .g-tabs__list {
    border-bottom: 1px solid #bfc1c3;
  }
  .js-enabled .g-tabs__list:after {
    content: "";
    display: block;
    clear: both;
  }
  .js-enabled .g-tabs__list-item {
    margin-left: 0;
  }
  .js-enabled .g-tabs__list-item::before {
    content: none;
  }
  .js-enabled .g-tabs__title {
    display: none;
  }
  .js-enabled .g-tabs__tab {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
  .js-enabled .g-tabs__tab--selected {
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
  .js-enabled .g-tabs__tab--selected:focus {
    background-color: transparent;
  }
  .js-enabled .g-tabs__panel {
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
  .js-enabled .g-tabs__panel {
    margin-bottom: 0;
  }
}
@media (min-width: 40.0625em) {
  .js-enabled .g-tabs__panel--hidden {
    display: none;
  }
}
.g-tabs-table {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
}
@media print {
  .g-tabs-table {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs-table {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-tabs-table {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-tabs-table {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-tabs-table {
    margin-bottom: 30px;
  }
}
</style>
