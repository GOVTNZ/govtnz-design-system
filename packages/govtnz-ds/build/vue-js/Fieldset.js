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
    children: {
      required: false,
      "default": "Legend and other fieldset contents..."
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-fieldset-form-group"},[_c(\'fieldset\',{staticClass:"g-fieldset",attrs:{"aria-describedby":hintId}},[_t("default")],2)])}')
});

exports["default"] = _default;