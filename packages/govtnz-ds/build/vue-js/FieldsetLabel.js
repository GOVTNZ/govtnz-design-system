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
    hintId: {
      type: String,
      required: false
    },
    hint: {
      required: false,
      "default": "Hint text"
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-fieldsetLabel-hint",attrs:{"id":hintId}},[_t("hint")],2)}')
});

exports["default"] = _default;