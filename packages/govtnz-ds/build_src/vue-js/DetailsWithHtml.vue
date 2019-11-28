<template>
  <details class="g-detailsWithHtml-details" role="group" v-bind:open="open">
    <summary
      v-bind:aria-controls="detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0"
      aria-expanded="false"
      class="g-detailsWithHtml-details__summary"
      role="button"
    >
      <span class="g-detailsWithHtml-details__summary-text">
        Where to find your National Insurance Number
      </span>
    </summary>

    <div
      aria-hidden="true"
      class="g-detailsWithHtml-details__text"
      v-bind:id="detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0"
    >
      Your National Insurance number can be found on

      <ul>
        <li>
          your National Insurance card
        </li>

        <li>
          your payslip
        </li>

        <li>
          P60
        </li>

        <li>
          benefits information
        </li>

        <li>
          tax return
        </li>
      </ul>
    </div>
  </details>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    open: { type: Boolean, default: false, required: false },
    detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0: {
      type: String,
      required: false
    }
  },
  computed: {}
});
</script>
<style scoped>
.g-detailsWithHtml-list > li {
  margin-bottom: 0.25rem;
}
.g-detailsWithHtml-list--bullet > li,
.g-detailsWithHtml-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-detailsWithHtml-list--bullet > li,
  .g-detailsWithHtml-list--number > li {
    margin-bottom: 5px;
  }
}
.g-detailsWithHtml-details {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-bottom: 20px;
  display: block;
}
@media print {
  .g-detailsWithHtml-details {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-detailsWithHtml-details {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-detailsWithHtml-details {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-detailsWithHtml-details {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-detailsWithHtml-details {
    margin-bottom: 30px;
  }
}
.g-detailsWithHtml-details__summary {
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  padding-left: 25px;
  color: #005ea5;
  cursor: pointer;
}
.g-detailsWithHtml-details__summary-text {
  text-decoration: underline;
}
.g-detailsWithHtml-details__summary:hover {
  color: #2b8cc4;
}
.g-detailsWithHtml-details__summary:focus {
  outline: 4px solid #ffbf47;
  outline-offset: -1px;
  color: #0b0c0c;
  background: #ffbf47;
}
.g-detailsWithHtml-details__summary::-webkit-details-marker {
  display: none;
}
.g-detailsWithHtml-details__summary:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  border-width: 7px 0 7px 12.124px;
  border-left-color: inherit;
}
.g-detailsWithHtml-details[open] > .g-detailsWithHtml-details__summary:before {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
  border-width: 12.124px 7px 0 7px;
  border-top-color: inherit;
}
.g-detailsWithHtml-details__text {
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid #bfc1c3;
}
.g-detailsWithHtml-hint > * {
  margin-top: 0px;
}
</style>
