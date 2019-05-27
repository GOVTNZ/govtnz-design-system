"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  styleSize: {
    large: "g-p-body-l",
    medium: "g-p-body-m",
    small: "g-p-body-s",
    "x-small": "g-p-body-xs"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    styleSize: {
      type: String,
      validator: function validator(value) {
        return ["large", "medium", "small", "x-small"].indexOf(value) !== -1;
      },
      required: true
    },
    children: {
      required: false,
      "default": "Example text"
    }
  },
  computed: {
    computed__class: function computed__class() {
      return constants[this.styleSize] !== undefined ? constants[this.styleSize] : "";
    }
  },
  render: new Function("with(this){return _c('p',{class:computed__class},[_t(\"default\")],2)}")
});

exports["default"] = _default;