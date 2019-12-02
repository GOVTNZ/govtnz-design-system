"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var TextareaBlock = function TextareaBlock(_ref) {
  var id = _ref.id,
      label = _ref.label,
      hintId = _ref.hintId,
      hint = _ref.hint,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      rows = _ref.rows,
      cols = _ref.cols,
      autoFocus = _ref.autoFocus,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      maxLength = _ref.maxLength,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    className: "g-textareaBlock-form-group"
  }, _react["default"].createElement("label", {
    className: "g-textareaBlock-label",
    htmlFor: id
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null)), _react["default"].createElement("span", {
    className: "g-textareaBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null)), _react["default"].createElement("textarea", {
    "aria-describedby": hintId,
    className: "g-textareaBlock-textarea",
    id: id,
    name: name,
    rows: rows,
    disabled: disabled,
    readOnly: readOnly,
    cols: cols,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    maxLength: maxLength,
    value: value,
    onChange: onChange
  }));
};

var _default = TextareaBlock;
exports["default"] = _default;