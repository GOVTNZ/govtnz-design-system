<template>
  <dl class="g-summaryListCheckYourAnswers-summary-list">
    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Name
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        Sarah Philips
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href"
          v-bind:rel="rel"
          v-bind:target="computed__target"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            name
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Date of birth
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        5 January 1978
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href2"
          v-bind:rel="rel2"
          v-bind:target="computed__target2"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            date of birth
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Contact information
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        72 Guild Street
        <br />

        London
        <br />

        SE23 6FH
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href3"
          v-bind:rel="rel3"
          v-bind:target="computed__target3"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            contact information
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Contact details
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        07700 900457
        <br />

        sarah.phillips@example.com
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href4"
          v-bind:rel="rel4"
          v-bind:target="computed__target4"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            contact details
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Previous application number
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        502135326
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href5"
          v-bind:rel="rel5"
          v-bind:target="computed__target5"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            previous application number
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Licence type
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        For personal use
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href6"
          v-bind:rel="rel6"
          v-bind:target="computed__target6"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            licence type
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Home address
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        <p class="g-summaryListCheckYourAnswers-body">
          72 Guild Street
          <br />

          London
          <br />

          SE23 6FH
        </p>
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href7"
          v-bind:rel="rel7"
          v-bind:target="computed__target7"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            home address
          </span>
        </a>
      </dd>
    </div>

    <div class="g-summaryListCheckYourAnswers-summary-list__row">
      <dt class="g-summaryListCheckYourAnswers-summary-list__key">
        Licence period
      </dt>

      <dd class="g-summaryListCheckYourAnswers-summary-list__value">
        <p class="g-summaryListCheckYourAnswers-body">
          This is a longer paragraph of text provided by the user to provide
          additional information.
        </p>

        <p class="g-summaryListCheckYourAnswers-body">
          This is a second paragraph of text provided by the user.
        </p>
      </dd>

      <dd class="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          class="g-summaryListCheckYourAnswers-link"
          v-bind:href="href8"
          v-bind:rel="rel8"
          v-bind:target="computed__target8"
        >
          Change
          <span class="g-summaryListCheckYourAnswers-visually-hidden">
            licence period
          </span>
        </a>
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
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
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
    },
    href6: { type: String, required: true },
    rel6: { type: String, required: false },
    target6: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href7: { type: String, required: true },
    rel7: { type: String, required: false },
    target7: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href8: { type: String, required: true },
    rel8: { type: String, required: false },
    target8: {
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
    },
    computed__target6() {
      return constants[this.target6] !== undefined
        ? constants[this.target6]
        : "";
    },
    computed__target7() {
      return constants[this.target7] !== undefined
        ? constants[this.target7]
        : "";
    },
    computed__target8() {
      return constants[this.target8] !== undefined
        ? constants[this.target8]
        : "";
    }
  }
});</script
><style scoped>
.g-summaryListCheckYourAnswers-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-summaryListCheckYourAnswers-link {
    font-family: sans-serif;
  }
}
.g-summaryListCheckYourAnswers-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-summaryListCheckYourAnswers-link:link {
  color: #005ea5;
}
.g-summaryListCheckYourAnswers-link:visited {
  color: #4c2c92;
}
.g-summaryListCheckYourAnswers-link:hover {
  color: #2b8cc4;
}
.g-summaryListCheckYourAnswers-link:active {
  color: #2b8cc4;
}
.g-summaryListCheckYourAnswers-link:focus {
  color: #0b0c0c;
}
.g-summaryListCheckYourAnswers-body {
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
  .g-summaryListCheckYourAnswers-body {
    color: #000000;
  }
}
@media print {
  .g-summaryListCheckYourAnswers-body {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-body {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-summaryListCheckYourAnswers-body {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-body {
    margin-bottom: 20px;
  }
}
.g-summaryListCheckYourAnswers-summary-list {
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
  .g-summaryListCheckYourAnswers-summary-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-summaryListCheckYourAnswers-summary-list {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-summaryListCheckYourAnswers-summary-list {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list {
    display: table;
    width: 100%;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list {
    margin-bottom: 30px;
  }
}
@media (max-width: 40.0525em) {
  .g-summaryListCheckYourAnswers-summary-list__row {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list__row {
    display: table-row;
  }
}
.g-summaryListCheckYourAnswers-summary-list__actions {
  margin: 0;
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list__actions {
    display: table-cell;
    padding-right: 20px;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list__actions {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
}
.g-summaryListCheckYourAnswers-summary-list__actions {
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list__actions {
    padding-right: 0;
    text-align: right;
  }
}
.g-summaryListCheckYourAnswers-summary-list__value {
  word-break: break-all;
}
.g-summaryListCheckYourAnswers-summary-list__key {
  margin-bottom: 5px;
  font-weight: 700;
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-summary-list__key {
    width: 30%;
  }
}
@media (max-width: 40.0525em) {
  .g-summaryListCheckYourAnswers-summary-list__value {
    margin-bottom: 15px;
  }
}
.g-summaryListCheckYourAnswers-summary-list__value > p {
  margin-bottom: 10px;
}
.g-summaryListCheckYourAnswers-summary-list--no-border
  .g-summaryListCheckYourAnswers-summary-list__actions {
  border: 0;
}
.g-summaryListCheckYourAnswers-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-summaryListCheckYourAnswers-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-summaryListCheckYourAnswers-error-summary__list a {
  font-weight: 700;
}
.g-summaryListCheckYourAnswers-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-summaryListCheckYourAnswers-error-summary__list a:link,
.g-summaryListCheckYourAnswers-error-summary__list a:visited,
.g-summaryListCheckYourAnswers-error-summary__list a:hover,
.g-summaryListCheckYourAnswers-error-summary__list a:active {
  color: #b10e1e;
}
.g-summaryListCheckYourAnswers-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-summaryListCheckYourAnswers-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-summaryListCheckYourAnswers-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-summaryListCheckYourAnswers-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-summaryListCheckYourAnswers-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-summaryListCheckYourAnswers-header__navigation-item--active a:link,
.g-summaryListCheckYourAnswers-header__navigation-item--active a:hover,
.g-summaryListCheckYourAnswers-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-summaryListCheckYourAnswers-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-summaryListCheckYourAnswers-visually-hidden {
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
