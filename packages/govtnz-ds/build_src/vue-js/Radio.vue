<template>
  <input
    v-bind:aria-describedby="hintId"
    class="g-radios__input"
    v-bind:id="id"
    v-bind:name="name"
    type="radio"
    v-bind:disabled="disabled"
    v-bind:readonly="readOnly"
    v-bind:autofocus="autoFocus"
    v-bind:value="value"
    v-bind:checked="checked"
  />
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: String, required: false },
    hintId: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    value: { type: String, required: false },
    checked: { type: Boolean, default: false, required: false }
  },
  computed: {}
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
.g-radio-hint > * {
  margin-top: 0px;
}
</style>
