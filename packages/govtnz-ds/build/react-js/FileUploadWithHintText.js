"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var FileUploadWithHintText = function FileUploadWithHintText(_ref) {
  var fileUpload2 = _ref.fileUpload2,
      fileUpload2Hint = _ref.fileUpload2Hint,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus;
  return _react["default"].createElement("div", {
    className: "g-fileUploadWithHintText-form-group"
  }, _react["default"].createElement("label", {
    className: "g-fileUploadWithHintText-label",
    htmlFor: fileUpload2
  }, "Upload your photo"), _react["default"].createElement("span", {
    className: "g-fileUploadWithHintText-hint",
    id: fileUpload2Hint
  }, "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."), _react["default"].createElement("input", {
    "aria-describedby": fileUpload2Hint,
    className: "g-fileUploadWithHintText-file-upload",
    id: fileUpload2,
    name: name,
    type: "file",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus
  }));
};

FileUploadWithHintText.props = ["fileUpload2", "fileUpload2Hint", "name", "disabled", "readOnly", "autoFocus"];
var _default = FileUploadWithHintText;
exports["default"] = _default;