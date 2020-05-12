"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FieldsetBlock = function (_a) {
    var errorId = _a.errorId, hintId = _a.hintId, legend = _a.legend, hint = _a.hint, error = _a.error, children = _a.children;
    return (react_1.default.createElement("div", { className: "g-fieldsetBlock-form-group" + (errorId ? " g-fieldsetBlock-form-group--error" : "") },
        react_1.default.createElement("fieldset", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-fieldset" },
            react_1.default.createElement("legend", { className: "g-fieldset__legend" }, legend !== undefined ? (legend) : (react_1.default.createElement(react_1.default.Fragment, null, "Legend text"))),
            hintId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-fieldsetBlock-hint", id: hintId }, hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Hint text"))))) : (""),
            errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "g-fieldsetBlock-error-message", id: errorId },
                    react_1.default.createElement("span", { className: "g-fieldsetBlock-visually-hidden" }, "Error:"),
                    error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Error text"))))) : (""),
            react_1.default.createElement("div", null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Fieldset contents"))))));
};
exports.default = FieldsetBlock;
//# sourceMappingURL=FieldsetBlock.js.map