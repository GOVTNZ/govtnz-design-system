<template>
  <div class="g-warning-text">
    <span aria-hidden="true" class="g-warning-text__icon">
      !
    </span>

    <strong class="g-warning-text__text">
      <span class="g-warning-text__assistive">
        Warning
      </span>

      You can be fined up to $5,000 if you don’t register.
    </strong>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {},
  computed: {}
});
</script>
<style scoped>
.g-warningText-hint > * {
  margin-top: 0px;
}
</style>
