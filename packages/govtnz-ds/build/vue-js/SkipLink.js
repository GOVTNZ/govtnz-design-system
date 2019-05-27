"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  target: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    href: {
      type: String,
      required: true
    },
    rel: {
      type: String,
      required: false
    },
    target: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target: function computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    }
  },
  render: new Function('with(this){return _c(\'a\',{staticClass:"g-skip-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\nSkip to main content\\n\\n")])}')
});

exports["default"] = _default;