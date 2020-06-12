"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Radios = function (_a) {
    var inline = _a.inline, big = _a.big, children = _a.children;
    return (react_1.default.createElement("div", { className: "g-radios" + (inline ? " g-radios--inline" : "") + (big ? " g-radios--big" : "") },
        " ",
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Radio components")),
        " "));
};
exports.default = Radios;
//# sourceMappingURL=Radios.js.map