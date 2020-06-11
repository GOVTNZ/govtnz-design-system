"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FileUpload = function (_a) {
    var id = _a.id, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, onChange = _a.onChange, ref = _a.ref;
    return (react_1.default.createElement("div", { className: "g-fileUpload__form-group" },
        " ",
        react_1.default.createElement("label", { className: "g-fileUpload__label", htmlFor: id },
            " ",
            "Upload a file",
            " "),
        " ",
        react_1.default.createElement("input", { className: "g-fileUpload__input", id: id, name: name, type: "file", disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, onChange: onChange, ref: ref }),
        " "));
};
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map