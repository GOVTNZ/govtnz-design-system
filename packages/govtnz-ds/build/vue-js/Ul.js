"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    bulleted: {
      type: Boolean,
      "default": false,
      required: false
    },
    children: {
      required: false,
      "default": "Example text"
    }
  },
  computed: {
    computed__class: function computed__class() {
      return "g-ul-list" + (this.bulleted ? " g-ul-list--bullet" : "");
    }
  },
  render: new Function("with(this){return _c('ul',{class:computed__class},[_t(\"default\")],2)}")
});

exports["default"] = _default;