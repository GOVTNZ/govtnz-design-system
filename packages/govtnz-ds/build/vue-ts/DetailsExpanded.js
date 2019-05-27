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
    helpWithNationality: {
      type: String,
      required: false
    },
    open: {
      type: Boolean,
      "default": false,
      required: false
    },
    detailsContent3E1674E973084F93B79C1A8694B6F4D5: {
      type: String,
      required: false
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'details\',{staticClass:"g-detailsExpanded-details",attrs:{"id":helpWithNationality,"open":open,"role":"group"}},[_c(\'summary\',{staticClass:"g-detailsExpanded-details__summary",attrs:{"aria-controls":detailsContent3E1674E973084F93B79C1A8694B6F4D5,"aria-expanded":"true","role":"button"}},[_c(\'span\',{staticClass:"g-detailsExpanded-details__summary-text"},[_v("\\n\\n      Help with nationality\\n    \\n\\n")])]),_v(" "),_c(\'div\',{staticClass:"g-detailsExpanded-details__text",attrs:{"aria-hidden":"false","id":detailsContent3E1674E973084F93B79C1A8694B6F4D5}},[_v("\\n\\n    We need to know your nationality so we can work out which elections you’re\\n    entitled to vote in. If you can’t provide your nationality, you’ll have to\\n    send copies of identity documents through the post.\\n  \\n\\n")])])}')
});

exports["default"] = _default;