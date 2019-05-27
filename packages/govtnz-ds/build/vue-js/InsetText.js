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
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-inset-text"},[_v("\\n\\n  It can take up to 8 weeks to register a lasting power of attorney if there are\\n  no mistakes in the application.\\n\\n\\n")])}')
});

exports["default"] = _default;