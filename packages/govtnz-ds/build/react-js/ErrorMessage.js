"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var ErrorMessage = function ErrorMessage(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("span", {
    className: "g-error-message"
  }, "Error message about full name goes here");
};

var _default = ErrorMessage;
exports["default"] = _default;