"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var WarningText = function WarningText(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("div", {
    className: "g-warning-text"
  }, _react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "g-warning-text__icon"
  }, "!"), _react["default"].createElement("strong", {
    className: "g-warning-text__text"
  }, _react["default"].createElement("span", {
    className: "g-warning-text__assistive"
  }, "Warning"), "You can be fined up to $5,000 if you don\u2019t register."));
};

WarningText.props = [];
var _default = WarningText;
exports["default"] = _default;