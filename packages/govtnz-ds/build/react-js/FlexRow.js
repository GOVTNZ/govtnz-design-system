"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  xsVerticalAlign: {
    top: "g-flexRow-flex-top-xs",
    middle: "g-flexRow-flex-middle-xs",
    bottom: "g-flexRow-flex-bottom-xs"
  },
  smVerticalAlign: {
    top: "g-flexRow-flex-top-sm",
    middle: "g-flexRow-flex-middle-sm",
    bottom: "g-flexRow-flex-bottom-sm"
  },
  mdVerticalAlign: {
    top: "g-flexRow-flex-top-md",
    middle: "g-flexRow-flex-middle-md",
    bottom: "g-flexRow-flex-bottom-md"
  },
  lgVerticalAlign: {
    top: "g-flexRow-flex-top-lg",
    middle: "g-flexRow-flex-middle-lg",
    bottom: "g-flexRow-flex-bottom-lg"
  }
};

var FlexRow = function FlexRow(_ref) {
  var xsVerticalAlign = _ref.xsVerticalAlign,
      smVerticalAlign = _ref.smVerticalAlign,
      mdVerticalAlign = _ref.mdVerticalAlign,
      lgVerticalAlign = _ref.lgVerticalAlign,
      isReversed = _ref.isReversed,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-row".concat(constants.xsVerticalAlign[xsVerticalAlign] !== undefined ? " " + constants.xsVerticalAlign[xsVerticalAlign] : "").concat(constants.smVerticalAlign[smVerticalAlign] !== undefined ? " " + constants.smVerticalAlign[smVerticalAlign] : "").concat(constants.mdVerticalAlign[mdVerticalAlign] !== undefined ? " " + constants.mdVerticalAlign[mdVerticalAlign] : "").concat(constants.lgVerticalAlign[lgVerticalAlign] !== undefined ? " " + constants.lgVerticalAlign[lgVerticalAlign] : "").concat(isReversed ? " g-flexRow-flex-reverse" : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Columns..."));
};

var _default = FlexRow;
exports["default"] = _default;