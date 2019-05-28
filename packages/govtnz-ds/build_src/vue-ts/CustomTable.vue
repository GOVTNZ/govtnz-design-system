<template>
  <div class="g-customTable-fragment">
    <table class="g-customTable-table g-!-font-size-16">
      <thead class="g-customTable-table__head">
        <tr class="g-customTable-table__row">
          Who is making the request Form
        </tr>
      </thead>

      <tbody class="g-customTable-table__body">
        <tr class="g-customTable-table__row">
          An individual

          <a
            class="g-customTable-link"
            v-bind:href="href"
            v-bind:rel="rel"
            v-bind:target="computed__target"
          >
            Form V888
          </a>
        </tr>

        <tr class="g-customTable-table__row">
          A company

          <a
            class="g-customTable-link"
            v-bind:href="href2"
            v-bind:rel="rel2"
            v-bind:target="computed__target2"
          >
            Form V8882
          </a>
        </tr>

        <tr class="g-customTable-table__row">
          A company that issues parking or trespass charge notices

          <a
            class="g-customTable-link"
            v-bind:href="href3"
            v-bind:rel="rel3"
            v-bind:target="computed__target3"
          >
            Form V8883
          </a>
        </tr>
      </tbody>
    </table>

    <thead class="g-customTable-table__head">
      <tr class="g-customTable-table__row">
        Who is making the request Form
      </tr>
    </thead>

    <tr class="g-customTable-table__row">
      Who is making the request Form
    </tr>

    Who is making the request Form

    <tbody class="g-customTable-table__body">
      <tr class="g-customTable-table__row">
        An individual

        <a
          class="g-customTable-link"
          v-bind:href="href4"
          v-bind:rel="rel4"
          v-bind:target="computed__target4"
        >
          Form V888
        </a>
      </tr>

      <tr class="g-customTable-table__row">
        A company

        <a
          class="g-customTable-link"
          v-bind:href="href5"
          v-bind:rel="rel5"
          v-bind:target="computed__target5"
        >
          Form V8882
        </a>
      </tr>

      <tr class="g-customTable-table__row">
        A company that issues parking or trespass charge notices

        <a
          class="g-customTable-link"
          v-bind:href="href6"
          v-bind:rel="rel6"
          v-bind:target="computed__target6"
        >
          Form V8883
        </a>
      </tr>
    </tbody>

    <tr class="g-customTable-table__row">
      An individual

      <a
        class="g-customTable-link"
        v-bind:href="href7"
        v-bind:rel="rel7"
        v-bind:target="computed__target7"
      >
        Form V888
      </a>
    </tr>

    An individual

    <a
      class="g-customTable-link"
      v-bind:href="href8"
      v-bind:rel="rel8"
      v-bind:target="computed__target8"
    >
      Form V888
    </a>

    <tr class="g-customTable-table__row">
      A company

      <a
        class="g-customTable-link"
        v-bind:href="href9"
        v-bind:rel="rel9"
        v-bind:target="computed__target9"
      >
        Form V8882
      </a>
    </tr>

    A company

    <a
      class="g-customTable-link"
      v-bind:href="href10"
      v-bind:rel="rel10"
      v-bind:target="computed__target10"
    >
      Form V8882
    </a>

    <tr class="g-customTable-table__row">
      A company that issues parking or trespass charge notices

      <a
        class="g-customTable-link"
        v-bind:href="href11"
        v-bind:rel="rel11"
        v-bind:target="computed__target11"
      >
        Form V8883
      </a>
    </tr>

    A company that issues parking or trespass charge notices

    <a
      class="g-customTable-link"
      v-bind:href="href12"
      v-bind:rel="rel12"
      v-bind:target="computed__target12"
    >
      Form V8883
    </a>
  </div> </template
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
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target9: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target10: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target11: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
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
    },
    href9: { type: String, required: true },
    rel9: { type: String, required: false },
    target9: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href10: { type: String, required: true },
    rel10: { type: String, required: false },
    target10: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href11: { type: String, required: true },
    rel11: { type: String, required: false },
    target11: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href12: { type: String, required: true },
    rel12: { type: String, required: false },
    target12: {
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
    },
    computed__target9() {
      return constants[this.target9] !== undefined
        ? constants[this.target9]
        : "";
    },
    computed__target10() {
      return constants[this.target10] !== undefined
        ? constants[this.target10]
        : "";
    },
    computed__target11() {
      return constants[this.target11] !== undefined
        ? constants[this.target11]
        : "";
    },
    computed__target12() {
      return constants[this.target12] !== undefined
        ? constants[this.target12]
        : "";
    }
  }
});</script
><style scoped>
.g-customTable-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-customTable-link {
    font-family: sans-serif;
  }
}
.g-customTable-link:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-customTable-link:link {
  color: #005ea5;
}
.g-customTable-link:visited {
  color: #4c2c92;
}
.g-customTable-link:hover {
  color: #2b8cc4;
}
.g-customTable-link:active {
  color: #2b8cc4;
}
.g-customTable-link:focus {
  color: #0b0c0c;
}
@media print {
  .g-customTable-link[href^="/"]::after {
    content: " (" attr(href) ")";
    font-size: 90%;
    word-wrap: break-word;
  }
}
.g-customTable-error-summary__list a {
  font-weight: 700;
}
.g-customTable-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
  background-color: #ffbf47;
}
.g-customTable-error-summary__list a:link,
.g-customTable-error-summary__list a:visited,
.g-customTable-error-summary__list a:hover,
.g-customTable-error-summary__list a:active {
  color: #b10e1e;
}
.g-customTable-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-customTable-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-customTable-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-customTable-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-customTable-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-customTable-header__navigation-item--active a:link,
.g-customTable-header__navigation-item--active a:hover,
.g-customTable-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-customTable-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-customTable-table {
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
  .g-customTable-table {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-customTable-table {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-customTable-table {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-customTable-table {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-customTable-table {
    margin-bottom: 30px;
  }
}
.g-\!-font-size-16 {
  font-size: 0.875rem !important;
  line-height: 1.14286 !important;
}
@media (min-width: 40.0625em) {
  .g-\!-font-size-16 {
    font-size: 1rem !important;
    line-height: 1.25 !important;
  }
}
@media print {
  .g-\!-font-size-16 {
    font-size: 14pt !important;
    line-height: 1.2 !important;
  }
}
</style>
