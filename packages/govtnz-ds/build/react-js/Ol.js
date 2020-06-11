"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Ol = function Ol(_ref) {
  var numbered = _ref.numbered,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("ol", {
    className: "g-list".concat(numbered ? " g-list--number" : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Ol;
exports["default"] = _default;