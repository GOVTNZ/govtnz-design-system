"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FieldsetLabel = function FieldsetLabel(_ref) {
  var hintId = _ref.hintId,
      hint = _ref.hint;
  return _react["default"].createElement("div", {
    className: "g-fieldsetLabel-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text"));
};

var _default = FieldsetLabel;
exports["default"] = _default;