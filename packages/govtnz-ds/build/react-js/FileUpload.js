"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FileUpload = function FileUpload(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      name = _ref.name;
  return _react["default"].createElement("div", {
    className: "g-fileUpload-form-group"
  }, _react["default"].createElement("label", {
    className: "g-fileUpload-label",
    htmlFor: id
  }, "Upload a file"), _react["default"].createElement("input", {
    className: "g-file-upload",
    id: id,
    name: name,
    type: "file",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus
  }));
};

var _default = FileUpload;
exports["default"] = _default;