"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FileUploadWithErrorMessage = function FileUploadWithErrorMessage(_ref) {
  var fileUpload3 = _ref.fileUpload3,
      fileUpload3Hint = _ref.fileUpload3Hint,
      fileUpload3Error = _ref.fileUpload3Error,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus;
  return _react["default"].createElement("div", {
    className: "g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"
  }, _react["default"].createElement("label", {
    className: "g-fileUploadWithErrorMessage-label",
    htmlFor: fileUpload3
  }, "Upload a file"), _react["default"].createElement("span", {
    className: "g-fileUploadWithErrorMessage-hint",
    id: fileUpload3Hint
  }, "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."), _react["default"].createElement("span", {
    className: "g-fileUploadWithErrorMessage-error-message",
    id: fileUpload3Error
  }, "Error message goes here"), _react["default"].createElement("input", {
    "aria-describedby": fileUpload3Hint !== undefined || fileUpload3Error !== undefined ? "".concat(fileUpload3Hint ? fileUpload3Hint : "").concat(fileUpload3Error ? " " + fileUpload3Error : "") : undefined,
    className: "g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error",
    id: fileUpload3,
    name: name,
    type: "file",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus
  }));
};

FileUploadWithErrorMessage.props = ["fileUpload3", "fileUpload3Hint", "fileUpload3Error", "name", "disabled", "readOnly", "autoFocus"];
var _default = FileUploadWithErrorMessage;
exports["default"] = _default;