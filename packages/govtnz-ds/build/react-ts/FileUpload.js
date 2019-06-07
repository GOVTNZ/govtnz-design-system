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
var FileUpload = function (_a) {
    var fileUpload1 = _a.fileUpload1, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus;
    return (React.createElement("div", { className: "g-fileUpload-form-group" },
        React.createElement("label", { className: "g-fileUpload-label", htmlFor: fileUpload1 }, "Upload a file"),
        React.createElement("input", { className: "g-file-upload", id: fileUpload1, name: name, type: "file", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus })));
};
FileUpload.props = ["fileUpload1", "name", "disabled", "readOnly", "autoFocus"];
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map