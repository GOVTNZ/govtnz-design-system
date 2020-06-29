"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  width: {
    fixed: "g-flex-container",
    fluid: "g-flex-container-fluid"
  }
};

var FlexContainer = function FlexContainer(_ref) {
  var width = _ref.width,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: constants.width[width] !== undefined ? constants.width[width] : ""
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Rows..."));
};

var _default = FlexContainer;
exports["default"] = _default;