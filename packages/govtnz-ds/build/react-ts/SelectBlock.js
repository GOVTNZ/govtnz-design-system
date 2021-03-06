"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SelectBlock = function (_a) {
    var errorId = _a.errorId, selectId = _a.selectId, label = _a.label, error = _a.error, name = _a.name, required = _a.required, multiple = _a.multiple, onChange = _a.onChange, ref = _a.ref, children = _a.children;
    return (react_1.default.createElement("div", { className: errorId ? "g-form-group--error" : "" },
        react_1.default.createElement("label", { className: "g-selectBlock-label", htmlFor: selectId }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Example label text"))),
        react_1.default.createElement("select", { className: "g-selectBlock-select" + (error ? " g-selectBlock-select--error" : ""), id: selectId, name: name, required: required, multiple: multiple, onChange: onChange, ref: ref }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("option", null, "Options"))))));
};
exports.default = SelectBlock;
//# sourceMappingURL=SelectBlock.js.map