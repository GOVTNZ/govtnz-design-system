"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ul = function (_a) {
    var spacing = _a.spacing, children = _a.children;
    return (react_1.default.createElement("ul", { className: "g-ul" + (spacing ? " g-ul--spacing" : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Ul;
//# sourceMappingURL=Ul.js.map