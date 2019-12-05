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
    var id = _a.id, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name;
    return (React.createElement("div", { className: "g-fileUpload-form-group" },
        React.createElement("label", { className: "g-fileUpload-label", htmlFor: id }, "Upload a file"),
        React.createElement("input", { className: "g-file-upload", id: id, name: name, type: "file", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus })));
};
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map