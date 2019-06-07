"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledA = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #6f777b;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  @media print {\n    font-family: sans-serif;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link {\n    color: #005ea5;\n  }\n  :visited {\n    color: #4c2c92;\n  }\n  :hover {\n    color: #2b8cc4;\n  }\n  :active {\n    color: #2b8cc4;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #6f777b;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n"])));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var A = function (_a) {
    var isMuted = _a.isMuted, href = _a.href, rel = _a.rel, target = _a.target, children = _a.children;
    return (React.createElement(StyledA, { isMuted: isMuted, href: href, rel: rel, target: constants.target[target] }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
A.props = ["isMuted", "href", "rel", "target", "children"];
exports.default = A;
var templateObject_1;
//# sourceMappingURL=A.js.map