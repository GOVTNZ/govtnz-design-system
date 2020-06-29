"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    level: { secondary: "g-button--secondary", warning: "g-button--warning" }
};
var Button = function (_a) {
    var disabled = _a.disabled, level = _a.level, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("button", { className: "g-button" + (disabled ? " g-button--disabled" : "") + (constants.level[level] !== undefined ? " " + constants.level[level] : ""), disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, type: type, name: name, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example text "))));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map