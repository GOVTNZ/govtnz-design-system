<template>
  <div class="g-form-group">
    <fieldset v-bind:aria-describedby="hintId" class="g-fieldset">
      <slot></slot>
    </fieldset>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hintId: { type: String, required: false },
    children: {
      required: false,
      default: "Legend and other fieldset contents..."
    }
  },
  computed: {}
});
</script>
<style scoped>
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
.g-fieldset-hint > * {
  margin-top: 0px;
}
</style>
