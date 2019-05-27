"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  width: {
    fixed: "g-flex-container",
    fluid: "g-flex-container-fluid"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    width: {
      type: String,
      validator: function validator(value) {
        return ["fixed", "fluid"].indexOf(value) !== -1;
      },
      required: true
    },
    children: {
      required: false,
      "default": "Rows..."
    }
  },
  computed: {
    computed__class: function computed__class() {
      return constants[this.width] !== undefined ? constants[this.width] : "";
    }
  },
  render: new Function("with(this){return _c('div',{class:computed__class},[_t(\"default\")],2)}")
});

exports["default"] = _default;