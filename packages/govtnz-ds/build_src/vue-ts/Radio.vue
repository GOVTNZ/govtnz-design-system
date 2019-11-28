<template>
  <input
    v-bind:aria-describedby="hintId"
    v-bind:class="computed__class"
    v-bind:id="gov1"
    v-bind:name="name"
    type="radio"
    v-bind:disabled="disabled"
    v-bind:readonly="readOnly"
    v-bind:autofocus="autoFocus"
    v-bind:value="value"
    v-bind:checked="checked"
  />
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    fakeFocus: { type: Boolean, default: false, required: false },
    gov1: { type: String, required: false },
    hintId: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false }
  },
  computed: {
    computed__class() {
      return "g-radios__input" + (this.fakeFocus ? " :focus" : "");
    }
  }
});
</script>
<style scoped>
.g-radios__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
}
.g-radios__input:disabled {
  cursor: default;
}
.g-radios-hint > * {
  margin-top: 0px;
}
</style>
