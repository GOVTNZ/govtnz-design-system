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
    selectId: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      "default": false,
      required: false
    },
    children: {
      required: false,
      "default": "<option>Options</option>"
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'select\',{staticClass:"g-select",attrs:{"id":selectId,"name":name,"multiple":multiple}},[_t("default")],2)}')
});

exports["default"] = _default;