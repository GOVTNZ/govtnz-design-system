"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Legend = function Legend(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("legend", {
    className: "g-fieldset__legend"
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Legend text"));
};

var _default = Legend;
exports["default"] = _default;