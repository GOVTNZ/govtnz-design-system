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
var StyledA = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #b53cde;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #6f777b;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  display: block;\n  padding: 0.7em 1em;\n  color: #d3d3d3;\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  @media only screen and (min-width: 48em) {\n    :first-child {\n      margin-left: -1em;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  :hover {\n    color: #fff;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #b53cde;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #6f777b;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  display: block;\n  padding: 0.7em 1em;\n  color: #d3d3d3;\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  @media only screen and (min-width: 48em) {\n    :first-child {\n      margin-left: -1em;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  :hover {\n    color: #fff;\n  }\n"])));
var A = function (_a) {
    var isMuted = _a.isMuted, className = _a.className, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledA, { isMuted: isMuted, className: className, href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = A;
var templateObject_1;
//# sourceMappingURL=A.js.map