"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select = function (_a) {
    var selectId = _a.selectId, name = _a.name, multiple = _a.multiple, onChange = _a.onChange, ref = _a.ref, children = _a.children;
    return (react_1.default.createElement("select", { className: "g-select", id: selectId, name: name, multiple: multiple, onChange: onChange, ref: ref }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("option", null, "Options")))));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map