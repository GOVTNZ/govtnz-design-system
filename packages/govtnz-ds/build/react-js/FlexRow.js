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
    className: "g-flex-row".concat(constants.xsVerticalAlign[xsVerticalAlign] !== undefined ? " " + constants.xsVerticalAlign[xsVerticalAlign] : "").concat(constants.smVerticalAlign[smVerticalAlign] !== undefined ? " " + constants.smVerticalAlign[smVerticalAlign] : "").concat(constants.mdVerticalAlign[mdVerticalAlign] !== undefined ? " " + constants.mdVerticalAlign[mdVerticalAlign] : "").concat(constants.lgVerticalAlign[lgVerticalAlign] !== undefined ? " " + constants.lgVerticalAlign[lgVerticalAlign] : "").concat(isReversed ? " g-flex-reverse" : "")
  }, " ", children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Columns..."), " ");
};

var _default = FlexRow;
exports["default"] = _default;