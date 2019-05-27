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
    select2: {
      type: String,
      required: false
    },
    select2Hint: {
      type: String,
      required: false
    },
    select2Error: {
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
    }
  },
  computed: {
    computed__ariaDescribedby: function computed__ariaDescribedby() {
      return +this.select2Hint + +this.select2Error;
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error"},[_c(\'label\',{staticClass:"g-selectWithHintTextAndErrorMessage-label",attrs:{"for":select2}},[_v("\\n\\n    Label text goes here\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-selectWithHintTextAndErrorMessage-hint",attrs:{"id":select2Hint}},[_v("\\n\\n    Hint text goes here\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-selectWithHintTextAndErrorMessage-error-message",attrs:{"id":select2Error}},[_v("\\n\\n    Error message goes here\\n  \\n\\n")]),_v(" "),_c(\'select\',{staticClass:"g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error",attrs:{"aria-describedby":computed__ariaDescribedby,"id":select2,"name":name,"multiple":multiple}},[_v("\\n\\n    Govt.NZ frontend option 1\\n    Govt.NZ frontend option 2\\n    Govt.NZ frontend option 3\\n  \\n\\n\\n\\n")])])}')
});

exports["default"] = _default;