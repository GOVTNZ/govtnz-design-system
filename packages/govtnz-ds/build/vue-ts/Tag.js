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
  props: {},
  computed: {},
  render: new Function('with(this){return _c(\'strong\',{staticClass:"g-tag"},[_v("\\n\\n  alpha\\n\\n\\n")])}')
});

exports["default"] = _default;