"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FieldsetBlockWithError = function FieldsetBlockWithError(_ref) {
  var hintId = _ref.hintId,
      errorId = _ref.errorId,
      legend = _ref.legend,
      hint = _ref.hint,
      error = _ref.error,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-fieldset"
  }, _react["default"].createElement("legend", {
    className: "g-fieldset__legend"
  }, legend !== undefined ? legend : _react["default"].createElement(_react["default"].Fragment, null, "Legend text")), _react["default"].createElement("div", {
    className: "g-fieldsetBlockWithError-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Hint text")), _react["default"].createElement("div", {
    className: "g-fieldsetBlockWithError-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-fieldsetBlockWithError-visually-hidden"
  }, "Error:", " "), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Error text")), _react["default"].createElement("div", {
    className: "g-fieldsetBlockWithError-children"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Fieldset contents"))));
};

FieldsetBlockWithError.props = ["hintId", "errorId", "legend", "hint", "error", "children"];
var _default = FieldsetBlockWithError;
exports["default"] = _default;