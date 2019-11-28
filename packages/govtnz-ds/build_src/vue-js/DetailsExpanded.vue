<template>
  <details
    class="g-detailsExpanded-details"
    v-bind:id="helpWithNationality"
    v-bind:open="open"
    role="group"
  >
    <summary
      v-bind:aria-controls="detailsContent3E1674E973084F93B79C1A8694B6F4D5"
      aria-expanded="true"
      class="g-detailsExpanded-details__summary"
      role="button"
    >
      <span class="g-detailsExpanded-details__summary-text">
        Help with nationality
      </span>
    </summary>

    <div
      aria-hidden="false"
      class="g-detailsExpanded-details__text"
      v-bind:id="detailsContent3E1674E973084F93B79C1A8694B6F4D5"
    >
      We need to know your nationality so we can work out which elections you’re
      entitled to vote in. If you can’t provide your nationality, you’ll have to
      send copies of identity documents through the post.
    </div>
  </details>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    helpWithNationality: { type: String, required: false },
    open: { type: Boolean, default: false, required: false },
    detailsContent3E1674E973084F93B79C1A8694B6F4D5: {
      type: String,
      required: false
    }
  },
  computed: {}
});
</script>
<style scoped>
.g-detailsExpanded-details {
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
  .g-detailsExpanded-details {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-detailsExpanded-details {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-detailsExpanded-details {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-detailsExpanded-details {
    color: #000000;
  }
}
@media (min-width: 40.0625em) {
  .g-detailsExpanded-details {
    margin-bottom: 30px;
  }
}
.g-detailsExpanded-details__summary {
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  padding-left: 25px;
  color: #005ea5;
  cursor: pointer;
}
.g-detailsExpanded-details__summary-text {
  text-decoration: underline;
}
.g-detailsExpanded-details__summary:hover {
  color: #2b8cc4;
}
.g-detailsExpanded-details__summary:focus {
  outline: 4px solid #ffbf47;
  outline-offset: -1px;
  color: #0b0c0c;
  background: #ffbf47;
}
.g-detailsExpanded-details__summary::-webkit-details-marker {
  display: none;
}
.g-detailsExpanded-details__summary:before {
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
.g-detailsExpanded-details[open] > .g-detailsExpanded-details__summary:before {
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
.g-detailsExpanded-details__text {
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid #bfc1c3;
}
.g-detailsExpanded-hint > * {
  margin-top: 0px;
}
</style>
