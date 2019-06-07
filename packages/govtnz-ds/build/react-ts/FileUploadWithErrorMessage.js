"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var FileUploadWithErrorMessage = function (_a) {
    var fileUpload3 = _a.fileUpload3, fileUpload3Hint = _a.fileUpload3Hint, fileUpload3Error = _a.fileUpload3Error, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus;
    return (React.createElement("div", { className: "g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error" },
        React.createElement("label", { className: "g-fileUploadWithErrorMessage-label", htmlFor: fileUpload3 }, "Upload a file"),
        React.createElement("span", { className: "g-fileUploadWithErrorMessage-hint", id: fileUpload3Hint }, "Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."),
        React.createElement("span", { className: "g-fileUploadWithErrorMessage-error-message", id: fileUpload3Error }, "Error message goes here"),
        React.createElement("input", { "aria-describedby": fileUpload3Hint !== undefined || fileUpload3Error !== undefined
                ? "" + (fileUpload3Hint ? fileUpload3Hint : "") + (fileUpload3Error ? " " + fileUpload3Error : "")
                : undefined, className: "g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error", id: fileUpload3, name: name, type: "file", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus })));
};
FileUploadWithErrorMessage.props = [
    "fileUpload3",
    "fileUpload3Hint",
    "fileUpload3Error",
    "name",
    "disabled",
    "readOnly",
    "autoFocus"
];
exports.default = FileUploadWithErrorMessage;
//# sourceMappingURL=FileUploadWithErrorMessage.js.map