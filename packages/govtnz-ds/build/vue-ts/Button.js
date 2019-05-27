"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  type: {
    Submit: "submit",
    Reset: "reset",
    Button: "button"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    disabled: {
      type: Boolean,
      "default": false,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ["Submit", "Reset", "Button"].indexOf(value) !== -1;
      },
      required: false
    },
    children: {
      required: false,
      "default": "Example text"
    }
  },
  computed: {
    computed__ariaDisabled: function computed__ariaDisabled() {
      return this.disabled ? "true" : "";
    },
    computed__class: function computed__class() {
      return "g-button" + (this.disabled ? " g-button--disabled" : "");
    },
    computed__disabled: function computed__disabled() {
      return this.disabled ? "true" : "";
    },
    computed__type: function computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    }
  },
  render: new Function('with(this){return _c(\'button\',{class:computed__class,attrs:{"aria-disabled":computed__ariaDisabled,"disabled":computed__disabled,"type":computed__type,"name":name}},[_t("default")],2)}')
});

exports["default"] = _default;