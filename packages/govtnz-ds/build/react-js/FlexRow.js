"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  xsVerticalAlign: {
    top: "g-flex-top-xs",
    middle: "g-flex-middle-xs",
    bottom: "g-flex-bottom-xs"
  },
  smVerticalAlign: {
    top: "g-flex-top-sm",
    middle: "g-flex-middle-sm",
    bottom: "g-flex-bottom-sm"
  },
  mdVerticalAlign: {
    top: "g-flex-top-md",
    middle: "g-flex-middle-md",
    bottom: "g-flex-bottom-md"
  },
  lgVerticalAlign: {
    top: "g-flex-top-lg",
    middle: "g-flex-middle-lg",
    bottom: "g-flex-bottom-lg"
  },
  xsReversed: {
    "true": "g-flex-reversed-xs",
    "false": "g-flex-not-reversed-xs"
  },
  smReversed: {
    "true": "g-flex-reversed-sm",
    "false": "g-flex-not-reversed-sm"
  },
  mdReversed: {
    "true": "g-flex-reversed-md",
    "false": "g-flex-not-reversed-md"
  },
  lgReversed: {
    "true": "g-flex-reversed-lg",
    "false": "g-flex-not-reversed-lg"
  }
};

var FlexRow = function FlexRow(_ref) {
  var xsVerticalAlign = _ref.xsVerticalAlign,
      smVerticalAlign = _ref.smVerticalAlign,
      mdVerticalAlign = _ref.mdVerticalAlign,
      lgVerticalAlign = _ref.lgVerticalAlign,
      xsReversed = _ref.xsReversed,
      smReversed = _ref.smReversed,
      mdReversed = _ref.mdReversed,
      lgReversed = _ref.lgReversed,
      isReversed = _ref.isReversed,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-row".concat(constants.xsVerticalAlign[xsVerticalAlign] !== undefined ? " " + constants.xsVerticalAlign[xsVerticalAlign] : "").concat(constants.smVerticalAlign[smVerticalAlign] !== undefined ? " " + constants.smVerticalAlign[smVerticalAlign] : "").concat(constants.mdVerticalAlign[mdVerticalAlign] !== undefined ? " " + constants.mdVerticalAlign[mdVerticalAlign] : "").concat(constants.lgVerticalAlign[lgVerticalAlign] !== undefined ? " " + constants.lgVerticalAlign[lgVerticalAlign] : "").concat(constants.xsReversed[xsReversed] !== undefined ? " " + constants.xsReversed[xsReversed] : "").concat(constants.smReversed[smReversed] !== undefined ? " " + constants.smReversed[smReversed] : "").concat(constants.mdReversed[mdReversed] !== undefined ? " " + constants.mdReversed[mdReversed] : "").concat(constants.lgReversed[lgReversed] !== undefined ? " " + constants.lgReversed[lgReversed] : "").concat(isReversed ? " g-flex-reverse" : "").concat(className ? " " + className : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Columns..."));
};

var _default = FlexRow;
exports["default"] = _default;