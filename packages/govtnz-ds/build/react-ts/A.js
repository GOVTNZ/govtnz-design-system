"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var A = function (_a) {
    var isMuted = _a.isMuted, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("a", { className: "g-link" + (isMuted ? " g-link--muted" : ""), href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = A;
//# sourceMappingURL=A.js.map