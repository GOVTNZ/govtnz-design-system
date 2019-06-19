<template>
  <div class="g-fieldset-form-group">
    <fieldset v-bind:aria-describedby="hintId" class="g-fieldset">
      <slot></slot>
    </fieldset>
  </div> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    hintId: { type: String, required: false },
    children: {
      required: false,
      default: "Legend and other fieldset contents..."
    }
  },
  computed: {}
});</script
><style scoped>
.g-fieldset-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-fieldset-form-group {
    margin-bottom: 30px;
  }
}
.g-fieldset-form-group .g-fieldset-form-group:last-of-type {
  margin-bottom: 0;
}
.g-fieldset-form-group--error .g-fieldset-form-group {
  padding: 0;
  border: 0;
}
.g-fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
.g-fieldset:after {
  content: "";
  display: block;
  clear: both;
}
.g-fieldset-character-count .g-fieldset-form-group {
  margin-bottom: 5px;
}
.g-fieldset-hint > * {
  margin-top: 0px;
}
</style>
