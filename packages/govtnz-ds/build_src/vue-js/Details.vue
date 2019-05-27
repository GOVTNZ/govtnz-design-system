<template>
  <details class="g-details" role="group" v-bind:open="open">
    <summary
      v-bind:aria-controls="detailsContent021Df3Ae2Ee5440B98CbFfc001B25657"
      aria-expanded="false"
      class="g-details__summary"
      role="button"
    >
      <span class="g-details__summary-text">
        Help with nationality
      </span>
    </summary>

    <div
      aria-hidden="true"
      class="g-details__text"
      v-bind:id="detailsContent021Df3Ae2Ee5440B98CbFfc001B25657"
    >
      We need to know your nationality so we can work out which elections you’re
      entitled to vote in. If you can’t provide your nationality, you’ll have to
      send copies of identity documents through the post.
    </div>
  </details> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    open: { type: Boolean, default: false, required: false },
    detailsContent021Df3Ae2Ee5440B98CbFfc001B25657: {
      type: String,
      required: false
    }
  },
  computed: {}
});</script
><style scoped>
.g-details {
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
  .g-details {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-details {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-details {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-details {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-details {
    margin-bottom: 30px;
  }
}
.g-details__summary {
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  padding-left: 25px;
  color: #005ea5;
  cursor: pointer;
}
.g-details__summary-text {
  text-decoration: underline;
}
.g-details__summary:hover {
  color: #2b8cc4;
}
.g-details__summary:focus {
  outline: 4px solid #ffbf47;
  outline-offset: -1px;
  color: #0b0c0c;
  background: #ffbf47;
}
.g-details__summary::-webkit-details-marker {
  display: none;
}
.g-details__summary:before {
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
.g-details[open] > .g-details__summary:before {
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
.g-details__text {
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid #bfc1c3;
}
</style>
