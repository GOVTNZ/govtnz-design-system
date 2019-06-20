<template>
  <div v-bind:class="computed__class">
    <slot></slot>
  </div> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    inline: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Radio components" }
  },
  computed: {
    computed__class() {
      return "g-radios" + (this.inline ? " g-radios--inline" : "");
    }
  }
});</script
><style scoped>
@media (min-width: 40.0625em) {
  .g-radios--inline:after {
    content: "";
    display: block;
    clear: both;
  }
}
.g-radios-hint > * {
  margin-top: 0px;
}
</style>
