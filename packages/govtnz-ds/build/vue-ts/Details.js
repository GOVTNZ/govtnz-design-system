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
    detailsContent021Df3Ae2Ee5440B98CbFfc001B25657: {
      type: String,
      required: false
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'details\',{staticClass:"g-details",attrs:{"role":"group","open":open}},[_c(\'summary\',{staticClass:"g-details__summary",attrs:{"aria-controls":detailsContent021Df3Ae2Ee5440B98CbFfc001B25657,"aria-expanded":"false","role":"button"}},[_c(\'span\',{staticClass:"g-details__summary-text"},[_v("\\n\\n      Help with nationality\\n    \\n\\n")])]),_v(" "),_c(\'div\',{staticClass:"g-details__text",attrs:{"aria-hidden":"true","id":detailsContent021Df3Ae2Ee5440B98CbFfc001B25657}},[_v("\\n\\n    We need to know your nationality so we can work out which elections you’re\\n    entitled to vote in. If you can’t provide your nationality, you’ll have to\\n    send copies of identity documents through the post.\\n  \\n\\n")])])}')
});

exports["default"] = _default;