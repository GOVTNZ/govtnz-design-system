"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledA = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  :link,\n  :visited {\n    color: g-theme-link-color;\n  }\n  :hover {\n    color: g-theme-link-hover-color;\n  }\n  :focus {\n    color: g-theme-link-focus-color;\n  }\n"], ["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  :link,\n  :visited {\n    color: g-theme-link-color;\n  }\n  :hover {\n    color: g-theme-link-hover-color;\n  }\n  :focus {\n    color: g-theme-link-focus-color;\n  }\n"])));
var A = function (_a) {
    var className = _a.className, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledA, { className: className, href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = A;
var templateObject_1;
//# sourceMappingURL=A.js.map