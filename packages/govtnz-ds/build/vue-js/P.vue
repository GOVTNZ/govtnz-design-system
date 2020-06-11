<template>
  <p v-bind:class="computed__class">
    <slot></slot>
  </p>
</template>
<script>
import Vue from "vue";

const constants = {
  styleSize: {
    large: "g-body-l",
    medium: "g-body-m",
    small: "g-body-s",
    "x-small": "g-body-xs"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: true
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return constants.styleSize[this.styleSize] !== undefined
        ? constants.styleSize[this.styleSize]
        : "";
    }
  }
});
</script>
<style scoped>
.g-p-summary-list__value > p {
  margin-bottom: 10px;
}
.g-p-details__text p {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-p-error-summary__body p {
  margin-top: 0;
  margin-bottom: 15px;
}
@media (min-width: 40.0625em) {
  .g-p-error-summary__body p {
    margin-bottom: 20px;
  }
}
.g-p-hint > * {
  margin-top: 0px;
}
</style>
