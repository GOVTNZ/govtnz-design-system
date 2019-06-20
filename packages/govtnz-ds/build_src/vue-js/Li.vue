<template>
  <li>
    <slot></slot>
  </li> </template
><script>
import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { children: { required: false, default: "Example text" } },
  computed: {}
});</script
><style scoped>
.g-li-list > li {
  margin-bottom: 5px;
}
.g-li-list--bullet > li,
.g-li-list--number > li {
  margin-bottom: 0;
}
@media (min-width: 40.0625em) {
  .g-li-list--bullet > li,
  .g-li-list--number > li {
    margin-bottom: 5px;
  }
}
.g-li-hint > * {
  margin-top: 0px;
}
</style>
