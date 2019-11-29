<template>
  <div
    v-bind:aria-labelledby="errorSummaryTitle"
    class="g-error-summary optional-extra-class"
    data-module="error-summary"
    role="alert"
    tabindex="-1"
  >
    <h2 class="g-error-summary__title" v-bind:id="errorSummaryTitle">
      Message to alert the user to a problem goes here
    </h2>

    <div class="g-error-summary__body">
      <p>
        Optional description of the errors and how to correct them
      </p>

      <ul class="g-errorSummary-list g-error-summary__list">
        <li>
          <a
            v-bind:href="href"
            v-bind:rel="rel"
            v-bind:target="computed__target"
          >
            Descriptive link to the question with an error
          </a>
        </li>

        <li>
          <a
            v-bind:href="href2"
            v-bind:rel="rel2"
            v-bind:target="computed__target2"
          >
            Descriptive link to the question with an error
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  props: {
    errorSummaryTitle: { type: String, required: false },
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
      return constants.target[this.target] !== undefined
        ? constants.target[this.target]
        : "";
    },
    computed__target2() {
      return constants.target2[this.target2] !== undefined
        ? constants.target2[this.target2]
        : "";
    }
  }
});
</script>
<style scoped>
.g-errorSummary-list {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: #2a2a2a;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;
}
@media print {
  .g-errorSummary-list {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-errorSummary-list {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-errorSummary-list {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-errorSummary-list {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-errorSummary-list {
    margin-bottom: 1rem;
  }
}
.g-errorSummary-list .g-errorSummary-list {
  margin-top: 10px;
}
.g-errorSummary-list > li {
  margin-bottom: 0.25rem;
}
.g-errorSummary-list--bullet > li,
.g-errorSummary-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-errorSummary-list--bullet > li,
  .g-errorSummary-list--number > li {
    margin-bottom: 5px;
  }
}
.g-errorSummary-summary-list__value > p {
  margin-bottom: 10px;
}
.g-errorSummary-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-errorSummary-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-errorSummary-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-errorSummary-error-summary__list a {
  font-weight: 700;
}
.g-errorSummary-error-summary__list a:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-errorSummary-error-summary__list a:link,
.g-errorSummary-error-summary__list a:visited,
.g-errorSummary-error-summary__list a:hover,
.g-errorSummary-error-summary__list a:active {
  color: #b10e1e;
}
.g-errorSummary-error-summary__list a:focus {
  color: #0b0c0c;
}
.g-errorSummary-header__navigation-item a {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
}
@media print {
  .g-errorSummary-header__navigation-item a {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-errorSummary-header__navigation-item a {
    font-size: 1rem;
    line-height: 1.25;
  }
}
@media print {
  .g-errorSummary-header__navigation-item a {
    font-size: 14pt;
    line-height: 1.2;
  }
}
.g-errorSummary-header__navigation-item--active a:link,
.g-errorSummary-header__navigation-item--active a:hover,
.g-errorSummary-header__navigation-item--active a:visited {
  color: #1d8feb;
}
.g-errorSummary-header__navigation-item--active a:focus {
  color: #0b0c0c;
}
.g-errorSummary-hint > * {
  margin-top: 0px;
}
.g-errorSummary-list li .g-errorSummary-list {
  margin-top: 0.5rem;
}
</style>
