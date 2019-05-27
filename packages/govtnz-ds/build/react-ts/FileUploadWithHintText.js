"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FileUploadWithHintText = ({ fileUpload2, fileUpload2Hint, name, disabled, readOnly, autoFocus }) => (React.createElement("div", { className: "g-fileUploadWithHintText-form-group" },
    React.createElement("label", { className: "g-fileUploadWithHintText-label", htmlFor: fileUpload2 }, "Upload your photo"),
    React.createElement("span", { className: "g-fileUploadWithHintText-hint", id: fileUpload2Hint }, "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."),
    React.createElement("input", { "aria-describedby": fileUpload2Hint, className: "g-fileUploadWithHintText-file-upload", id: fileUpload2, name: name, type: "file", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus })));
FileUploadWithHintText.props = [
    "fileUpload2",
    "fileUpload2Hint",
    "name",
    "disabled",
    "readOnly",
    "autoFocus"
];
exports.default = FileUploadWithHintText;
//# sourceMappingURL=FileUploadWithHintText.js.map