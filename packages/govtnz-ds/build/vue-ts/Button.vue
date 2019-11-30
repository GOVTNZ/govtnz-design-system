<template>
  <button
    v-bind:class="computed__class"
    v-bind:disabled="computed__disabled"
    v-bind:type="computed__type"
    v-bind:name="name"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" },
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

export default Vue.extend({
  props: {
    disabled: { type: Boolean, default: false, required: false },
    level: {
      type: String,
      validator: value => {
        return ["secondary", "warning"].indexOf(value) !== -1;
      },
      required: true
    },
    name: { type: String, required: false },
    type: {
      type: String,
      validator: value => {
        return ["Submit", "Reset", "Button"].indexOf(value) !== -1;
      },
      required: false
    },
    children: { required: false, default: " Example text " }
  },
  computed: {
    computed__class() {
      return (
        "g-button" +
        (this.disabled ? " g-button--disabled" : "") +
        (constants.level[this.level] !== undefined
          ? ` ${constants.level[this.level]}`
          : "")
      );
    },
    computed__disabled() {
      return this.disabled ? "true" : "";
    },
    computed__type() {
      return constants.type[this.type] !== undefined
        ? constants.type[this.type]
        : "";
    }
  }
});
</script>
<style scoped>
.g-button {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 22px;
  padding: 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #ffffff;
  background-color: #00823b;
  box-shadow: 0 2px 0 0 #2a2a2a;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  -webkit-appearance: none;
}
@media print {
  .g-button {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-button {
    font-size: 1.1875rem;
    line-height: 1;
  }
}
@media print {
  .g-button {
    font-size: 14pt;
    line-height: 19px;
  }
}
.g-button:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-button {
    margin-bottom: 32px;
  }
}
@media (min-width: 40.0625em) {
  .g-button {
    width: auto;
  }
}
.g-button:link,
.g-button:visited,
.g-button:active,
.g-button:hover {
  color: #ffffff;
  text-decoration: none;
}
.g-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.g-button:hover,
.g-button:focus {
  background-color: #00692f;
}
.g-button:active {
  top: 2px;
  box-shadow: none;
}
.g-button::before {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -4px;
  left: -2px;
  background: transparent;
}
.g-button:active::before {
  top: -4px;
}
.g-button--disabled,
.g-button[disabled] {
  opacity: 0.5;
  background: #00823b;
}
.g-button--disabled:hover,
.g-button[disabled]:hover {
  background-color: #00823b;
  cursor: default;
}
.g-button--disabled:focus,
.g-button[disabled]:focus {
  outline: none;
}
.g-button--disabled:active,
.g-button[disabled]:active {
  top: 0;
  box-shadow: 0 2px 0 #003618;
}
.g-button {
  padding-top: 16px;
  padding-bottom: 16px;
}
.g-button-hint > * {
  margin-top: 0px;
}
</style>
