"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Ul = function Ul(_ref) {
  var bulleted = _ref.bulleted,
      children = _ref.children;
  return _react["default"].createElement("ul", {
    className: "g-ul-list".concat(bulleted ? " g-ul-list--bullet" : "")
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

Ul.props = ["bulleted", "children"];
var _default = Ul;
exports["default"] = _default;