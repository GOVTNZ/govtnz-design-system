"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Ul = function Ul(_ref) {
  var bulleted = _ref.bulleted,
      spacing = _ref.spacing,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "g-list".concat(bulleted ? " g-list--bullet" : "").concat(spacing ? " g-list--spacing" : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Ul;
exports["default"] = _default;