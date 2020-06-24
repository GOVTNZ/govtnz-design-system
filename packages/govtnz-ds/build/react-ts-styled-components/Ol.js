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
var StyledOl = styled_components_1.default.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: g-theme-color;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 20px;\n  list-style-type: decimal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: g-theme-print-color;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 1rem;\n  }\n  margin-top: 10px;\n  margin-top: 0px;\n  margin-top: 0.5rem;\n"], ["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: g-theme-color;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 20px;\n  list-style-type: decimal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: g-theme-print-color;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 1rem;\n  }\n  margin-top: 10px;\n  margin-top: 0px;\n  margin-top: 0.5rem;\n"])));
var Ol = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledOl, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Ol;
var templateObject_1;
//# sourceMappingURL=Ol.js.map