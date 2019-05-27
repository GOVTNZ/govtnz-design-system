"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-xs",
    xxsmall: "g-heading-xxs"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    styleSize: {
      type: String,
      validator: function validator(value) {
        return ["xlarge", "large", "medium", "small", "xsmall", "xxsmall"].indexOf(value) !== -1;
      },
      required: true
    },
    marginBottom8: {
      type: Boolean,
      "default": false,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    children: {
      required: false,
      "default": "Example text"
    }
  },
  computed: {
    computed__class: function computed__class() {
      return (constants[this.styleSize] !== undefined ? " ".concat(constants[this.styleSize]) : "") + (this.marginBottom8 ? " g-heading-mb-8" : "");
    }
  },
  render: new Function('with(this){return _c(\'h6\',{class:computed__class,attrs:{"id":id}},[_t("default")],2)}')
});

exports["default"] = _default;