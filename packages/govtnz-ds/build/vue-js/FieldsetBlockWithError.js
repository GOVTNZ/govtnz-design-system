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
    errorId: {
      type: String,
      required: false
    },
    legend: {
      required: false,
      "default": "Legend text"
    },
    hint: {
      required: false,
      "default": "Hint text"
    },
    error: {
      required: false,
      "default": "Error text"
    },
    children: {
      required: false,
      "default": "Fieldset contents"
    }
  },
  computed: {
    computed__ariaDescribedby: function computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"},[_c(\'fieldset\',{staticClass:"g-fieldset",attrs:{"aria-describedby":computed__ariaDescribedby}},[_c(\'legend\',{staticClass:"g-fieldset__legend"},[_t("legend")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-hint",attrs:{"id":hintId}},[_t("hint")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-error-message",attrs:{"id":errorId}},[_c(\'span\',{staticClass:"g-fieldsetBlockWithError-visually-hidden"},[_v("\\nError: \\n\\n")]),_v(" "),_t("error")],2),_v(" "),_c(\'div\',{staticClass:"g-fieldsetBlockWithError-children"},[_t("default")],2)])])}')
});

exports["default"] = _default;