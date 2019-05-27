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
    open: {
      type: Boolean,
      "default": false,
      required: false
    },
    detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0: {
      type: String,
      required: false
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'details\',{staticClass:"g-detailsWithHtml-details",attrs:{"role":"group","open":open}},[_c(\'summary\',{staticClass:"g-detailsWithHtml-details__summary",attrs:{"aria-controls":detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0,"aria-expanded":"false","role":"button"}},[_c(\'span\',{staticClass:"g-detailsWithHtml-details__summary-text"},[_v("\\n\\n      Where to find your National Insurance Number\\n    \\n\\n")])]),_v(" "),_c(\'div\',{staticClass:"g-detailsWithHtml-details__text",attrs:{"aria-hidden":"true","id":detailsContentDbb380D380B94F9E8Bb177Fc0E5Cfac0}},[_v("\\n\\n    Your National Insurance number can be found on\\n    \\n"),_m(0)])])}'),
  staticRenderFns: new Function(['with(this){return _c(\'ul\',[_c(\'li\',[_v("\\nyour National Insurance card\\n\\n")]),_v(" "),_c(\'li\',[_v("\\nyour payslip\\n\\n")]),_v(" "),_c(\'li\',[_v("\\nP60\\n\\n")]),_v(" "),_c(\'li\',[_v("\\nbenefits information\\n\\n")]),_v(" "),_c(\'li\',[_v("\\ntax return\\n\\n")])])}'])
});

exports["default"] = _default;