<template>
  <div aria-atomic="true" aria-live="polite" role="note">
    <div v-bind:class="computed__class">
      <slot></slot>
    </div>
  </div>

  <div v-bind:aria-labelledby="headingId" role="note" tabindex="-1">
    <div v-bind:class="computed__class2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

const constants = {
  level: {
    info: "g-alert--info",
    warning: "g-alert--warning",
    success: "g-alert--success",
    error: "g-alert--error"
  }
};

export default Vue.extend({
  props: {
    mode: { required: false },
    level: {
      type: String,
      validator: value => {
        return ["info", "warning", "success", "error"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: " Example alert content " },
    headingId: { type: String, required: false }
  },
  computed: {
    computed__class() {
      return (
        "g-alert" +
        (constants.level[this.level] !== undefined
          ? ` ${constants.level[this.level]}`
          : "")
      );
    },
    computed__class2() {
      return (
        "g-alert" +
        (constants.level[this.level] !== undefined
          ? ` ${constants.level[this.level]}`
          : "")
      );
    }
  }
});
</script>
<style scoped>
.g-alert {
  border-radius: 5px;
  margin-bottom: 1em;
  padding: 0.5em 1em;
}
.g-alert--info {
  border: solid 1px blue;
  border-color: var(--g-theme-info, blue);
  border-left-width: 1em;
}
.g-alert--warning {
  border: 1px solid orange;
  border-color: var(--g-theme-warning, orange);
  border-left-width: 1em;
}
.g-alert--success {
  border: solid 1px green;
  border-color: var(--g-theme-success, green);
  border-left-width: 1em;
}
.g-alert--error {
  border: solid 1px red;
  border-color: var(--g-theme-error, red);
  border-left-width: 1em;
}
</style>
