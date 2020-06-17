"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Fieldset = function (_a) {
    var hintId = _a.hintId, children = _a.children;
    return (react_1.default.createElement("div", { className: "g-form-group" },
        react_1.default.createElement("fieldset", { "aria-describedby": hintId, className: "g-fieldset" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Legend and other fieldset contents...")))));
};
exports.default = Fieldset;
//# sourceMappingURL=Fieldset.js.map