"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  width: {
    "2": "g-textareaBlock-textarea--width-2",
    "3": "g-textareaBlock-textarea--width-3",
    "4": "g-textareaBlock-textarea--width-4",
    "5": "g-textareaBlock-textarea--width-5",
    "10": "g-textareaBlock-textarea--width-10",
    "20": "g-textareaBlock-textarea--width-20",
    "30": "g-textareaBlock-textarea--width-30"
  }
};

var TextareaBlock = function TextareaBlock(_ref) {
  var errorId = _ref.errorId,
      id = _ref.id,
      label = _ref.label,
      hintId = _ref.hintId,
      hint = _ref.hint,
      error = _ref.error,
      width = _ref.width,
      name = _ref.name,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      rows = _ref.rows,
      cols = _ref.cols,
      autoFocus = _ref.autoFocus,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      maxLength = _ref.maxLength,
      value = _ref.value,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-textareaBlock-form-group".concat(errorId ? " g-textareaBlock-form-group--error" : "")
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "g-textareaBlock-label",
    htmlFor: id
  }, label !== undefined ? label : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Label text")), hintId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-textareaBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Hint text"))) : "", errorId ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-textareaBlock-error-message",
    id: errorId
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "g-textareaBlock-visually-hidden"
  }, "Error:"), error !== undefined ? error : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Error text"))) : "", /*#__PURE__*/_react["default"].createElement("textarea", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-textareaBlock-textarea".concat(constants.width[width] !== undefined ? " " + constants.width[width] : ""),
    id: id,
    name: name,
    rows: rows,
    required: required,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    cols: cols,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    maxLength: maxLength,
    value: value,
    onChange: onChange,
    ref: ref
  }));
};

var _default = TextareaBlock;
exports["default"] = _default;