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
var StyledA = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"], ["\n  font-weight: 700;\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :link,\n  :visited,\n  :hover,\n  :active {\n    color: #b10e1e;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1.14286;\n  white-space: nowrap;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.2;\n  }\n  :link,\n  :hover,\n  :visited {\n    color: #1d8feb;\n  }\n  :focus {\n    color: #0b0c0c;\n  }\n  margin-top: 0px;\n"])));
var constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
var SkipLink = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target;
    return (React.createElement(StyledA, { href: href, rel: rel, target: constants.target[target] }, "Skip to main content"));
};
exports.default = SkipLink;
var templateObject_1;
//# sourceMappingURL=SkipLink.js.map