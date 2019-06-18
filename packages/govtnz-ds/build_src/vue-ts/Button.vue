<template>
  <button
    v-bind:class="computed__class"
    v-bind:disabled="computed__disabled"
    v-bind:type="computed__type"
    v-bind:name="name"
  >
    <slot></slot>
  </button> </template
><script lang="ts">
import Vue from "vue";

const constants = {
  level: { secondary: "g-button--secondary", warning: "g-button--warning" },
  type: { Submit: "submit", Reset: "reset", Button: "button" }
};

export default Vue.extend({
  functional: true, // no internal state
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
    children: {
      required: false,
      default: "\n            Example text\n          "
    }
  },
  computed: {
    computed__class() {
      return (
        "g-button" +
        (this.disabled ? " g-button--disabled" : "") +
        (constants[this.level] !== undefined ? ` ${constants[this.level]}` : "")
      );
    },
    computed__disabled() {
      return this.disabled ? "true" : "";
    },
    computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    }
  }
});</script
><style scoped>
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
  background-color: #00682f;
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
  box-shadow: 0 2px 0 #003418;
}
.g-button--secondary {
  background-color: #dee0e2;
  box-shadow: 0 2px 0 #858688;
}
.g-button--secondary,
.g-button--secondary:link,
.g-button--secondary:visited,
.g-button--secondary:active,
.g-button--secondary:hover {
  color: #0b0c0c;
}
.g-button--secondary:hover,
.g-button--secondary:focus {
  background-color: #c8cacb;
}
.g-button--warning {
  background-color: #b10e1e;
  box-shadow: 0 2px 0 #47060c;
}
.g-button--warning,
.g-button--warning:link,
.g-button--warning:visited,
.g-button--warning:active,
.g-button--warning:hover {
  color: #ffffff;
}
.g-button--warning:hover,
.g-button--warning:focus {
  background-color: #8e0b18;
}
.g-button {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
