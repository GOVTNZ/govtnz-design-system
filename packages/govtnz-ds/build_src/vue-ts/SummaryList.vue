<template>
  <dl class="g-summary-list">
    <div class="g-summary-list__row">
      <dt class="g-summary-list__key">
        Name
      </dt>

      <dd class="g-summary-list__value">
        Firstname Lastname
      </dd>

      <dd class="g-summary-list__actions">
        <ul class="g-summary-list__actions-list">
          <li class="g-summary-list__actions-list-item">
            <a
              class="g-summaryList-link"
              v-bind:href="href"
              v-bind:rel="rel"
              v-bind:target="computed__target"
            >
              Edit
              <span class="g-summaryList-visually-hidden">
                name
              </span>
            </a>
          </li>

          <li class="g-summary-list__actions-list-item">
            <a
              class="g-summaryList-link"
              v-bind:href="href2"
              v-bind:rel="rel2"
              v-bind:target="computed__target2"
            >
              Delete
              <span class="g-summaryList-visually-hidden">
                name
              </span>
            </a>
          </li>
        </ul>
      </dd>
    </div>

    <div class="g-summary-list__row">
      <dt class="g-summary-list__key">
        Date of birth
      </dt>

      <dd class="g-summary-list__value">
        13/08/1980
      </dd>

      <dd class="g-summary-list__actions">
        <a
          class="g-summaryList-link"
          v-bind:href="href3"
          v-bind:rel="rel3"
          v-bind:target="computed__target3"
        >
          Change
          <span class="g-summaryList-visually-hidden">
            date of birth
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summary-list__row">
      <dt class="g-summary-list__key">
        Contact information
      </dt>

      <dd class="g-summary-list__value">
        <p class="g-summaryList-body">
          email@email.com
        </p>

        <p class="g-summaryList-body">
          Address line 1
          <br />

          Address line 2
          <br />

          Address line 3
          <br />

          Address line 4
          <br />

          Address line 5
        </p>
      </dd>

      <dd class="g-summary-list__actions">
        <ul class="g-summary-list__actions-list">
          <li class="g-summary-list__actions-list-item">
            <a
              class="g-summaryList-link"
              v-bind:href="href4"
              v-bind:rel="rel4"
              v-bind:target="computed__target4"
            >
              Edit
              <span class="g-summaryList-visually-hidden">
                contact information
              </span>
            </a>
          </li>

          <li class="g-summary-list__actions-list-item">
            <a
              class="g-summaryList-link"
              v-bind:href="href5"
              v-bind:rel="rel5"
              v-bind:target="computed__target5"
            >
              Change
              <span class="g-summaryList-visually-hidden">
                contact information
              </span>
            </a>
          </li>
        </ul>
      </dd>
    </div>
  </dl> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
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
    href4: { type: String, required: true },
    rel4: { type: String, required: false },
    target4: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href5: { type: String, required: true },
    rel5: { type: String, required: false },
    target5: {
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
    },
    computed__target5() {
      return constants[this.target5] !== undefined
        ? constants[this.target5]
        : "";
    }
  }
});</script
><style scoped>
.g-summaryList-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-summaryList-link {
    font-family: sans-serif;
  }
}
.g-summaryList-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-summaryList-link:link {
  color: #005ea5;
}
.g-summaryList-link:visited {
  color: #4c2c92;
}
.g-summaryList-link:hover {
  color: #2b8cc4;
}
.g-summaryList-link:active {
  color: #2b8cc4;
}
.g-summaryList-link:focus {
  color: #0b0c0c;
}
.g-summaryList-list > li {
  margin-bottom: 5px;
}
.g-summaryList-list--bullet > li,
.g-summaryList-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-summaryList-list--bullet > li,
  .g-summaryList-list--number > li {
    margin-bottom: 5px;
  }
}
.g-summaryList-body {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
}
@media print {
  .g-summaryList-body {
    color: #000000;
  }
}
@media print {
  .g-summaryList-body {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryList-body {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-summaryList-body {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryList-body {
    margin-bottom: 20px;
  }
}
.g-summary-list {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin: 0;
  margin-bottom: 20px;
}
@media print {
  .g-summary-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summary-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-summary-list {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-summary-list {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-summary-list {
    display: table;
    width: 100%;
  }
}
@media (min-width: 40.0625em) {
  .g-summary-list {
    margin-bottom: 30px;
  }
}
@media (max-width: 40.0525em) {
  .g-summary-list__row {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
}
@media (min-width: 40.0625em) {
  .g-summary-list__row {
    display: table-row;
  }
}
.g-summary-list__actions {
  margin: 0;
}
@media (min-width: 40.0625em) {
  .g-summary-list__actions {
    display: table-cell;
    padding-right: 20px;
  }
}
@media (min-width: 40.0625em) {
  .g-summary-list__actions {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
}
.g-summary-list__actions {
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-summary-list__actions {
    padding-right: 0;
    text-align: right;
  }
}
.g-summary-list__value {
  word-break: break-all;
}
.g-summary-list__key {
  margin-bottom: 5px;
  font-weight: 700;
}
@media (min-width: 40.0625em) {
  .g-summary-list__key {
    width: 30%;
  }
}
@media (max-width: 40.0525em) {
  .g-summary-list__value {
    margin-bottom: 15px;
  }
}
.g-summary-list__value > p {
  margin-bottom: 10px;
}
.g-summary-list__actions-list {
  width: 100%;
  margin: 0;
  padding: 0;
}
.g-summary-list__actions-list-item {
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
}
.g-summary-list__actions-list-item:not(:last-child) {
  border-right: 1px solid #bfc1c3;
}
.g-summary-list__actions-list-item:last-child {
  margin-right: 0;
  padding-right: 0;
  border: 0;
}
.g-summary-list--no-border .g-summary-list__actions {
  border: 0;
}
.g-summaryList-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-summaryList-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-summaryList-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-summaryList-error-summary__list a {
  font-weight: 700;
}
.g-summaryList-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-summaryList-error-summary__list a:link,
.g-summaryList-error-summary__list a:visited,
.g-summaryList-error-summary__list a:hover,
.g-summaryList-error-summary__list a:active {
  color: #b10e1e;
}
.g-summaryList-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-summaryList-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-summaryList-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryList-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-summaryList-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-summaryList-header__navigation-item--active a:link,
.g-summaryList-header__navigation-item--active a:hover,
.g-summaryList-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-summaryList-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-summaryList-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
}
</style>
