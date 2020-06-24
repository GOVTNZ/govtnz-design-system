<template>
  <input
    v-bind:class="computed__class"
    v-bind:disabled="disabled"
    v-bind:readonly="readOnly"
    v-bind:autofocus="autoFocus"
    v-bind:name="name"
    v-bind:value="value"
    v-bind:min="min"
    v-bind:max="max"
    v-bind:type="type"
    v-bind:spellcheck="spellCheck"
    v-bind:maxlength="maxLength"
    v-bind:autocomplete="autoComplete"
  />
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    hasError: { type: Boolean, default: false, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    value: { type: String, required: false },
    min: { type: String, required: false },
    max: { type: String, required: false },
    type: { type: String, required: true },
    spellCheck: { type: Boolean, default: false, required: false },
    maxLength: { type: String, required: false },
    autoComplete: { type: String, required: true }
  },
  computed: {
    computed__class() {
      return this.hasError ? "error" : "";
    }
  }
});
</script>
<style scoped>
input {
  border: solid 1px black;
}
.error {
  border: solid 2px red;
}
</style>
