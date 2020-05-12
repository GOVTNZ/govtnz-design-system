"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SkipLink = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick;
    return (react_1.default.createElement("a", { className: "g-skip-link", href: href, rel: rel, target: target, onClick: onClick }, "Skip to main content"));
};
exports.default = SkipLink;
//# sourceMappingURL=SkipLink.js.map