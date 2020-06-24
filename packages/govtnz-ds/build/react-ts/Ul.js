"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ul = function (_a) {
    var bulleted = _a.bulleted, spacing = _a.spacing, children = _a.children;
    return (react_1.default.createElement("ul", { className: "g-list" + (bulleted ? " g-list--bullet" : "") + (spacing ? " g-list--spacing" : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Ul;
//# sourceMappingURL=Ul.js.map