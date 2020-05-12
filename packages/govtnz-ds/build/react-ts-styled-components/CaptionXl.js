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
var StyledSpan = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.11111;\n  display: block;\n  margin-bottom: 5px;\n  color: #6f777b;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.6875rem;\n    line-height: 1.11111;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.11111;\n  display: block;\n  margin-bottom: 5px;\n  color: #6f777b;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.6875rem;\n    line-height: 1.11111;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  margin-top: 0px;\n"])));
var CaptionXl = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledSpan, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = CaptionXl;
var templateObject_1;
//# sourceMappingURL=CaptionXl.js.map