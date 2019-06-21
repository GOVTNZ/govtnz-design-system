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
    label: {
      required: false,
      "default": "Example label text"
    },
    error: {
      type: Boolean,
      "default": false,
      required: true
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
  computed: {
    computed__class: function computed__class() {
      return "g-selectBlock-select" + (this.error ? " g-selectBlock-select--error" : "");
    }
  },
  render: new Function('with(this){return _c(\'div\',[_c(\'label\',{staticClass:"g-selectBlock-label",attrs:{"for":selectId}},[_t("label")],2),_v(" "),_c(\'select\',{class:computed__class,attrs:{"id":selectId,"name":name,"multiple":multiple}},[_t("default")],2)])}')
});

exports["default"] = _default;