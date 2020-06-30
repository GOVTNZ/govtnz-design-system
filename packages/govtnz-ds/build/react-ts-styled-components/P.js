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
var StyledP = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: g-theme-color;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  margin-bottom: 1.25rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: g-theme-hint-color;\n  :first-child {\n    margin-top: 0px;\n  }\n  :last-child {\n    margin-bottom: 0px;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  @media (min-width: 40.0625em) {\n    ", ";\n  }\n  ", "\n  @media print {\n    ", ";\n  }\n  @media (min-width: 40.0625em) {\n    ", ";\n  }\n"], ["\n  color: g-theme-color;\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  margin-bottom: 1.25rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: g-theme-hint-color;\n  :first-child {\n    margin-top: 0px;\n  }\n  :last-child {\n    margin-bottom: 0px;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  ",
    "\n  @media print {\n    ",
    ";\n  }\n  ",
    "\n  @media print {\n    ",
    ";\n  }\n  @media (min-width: 40.0625em) {\n    ",
    ";\n  }\n  ",
    "\n  @media print {\n    ",
    ";\n  }\n  @media (min-width: 40.0625em) {\n    ",
    ";\n  }\n"])), function (props) {
    return props.styleSize === "large" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-weight: 400;\n      font-size: 1.5rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1.25em;\n    "], ["\n      font-weight: 400;\n      font-size: 1.5rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1.25em;\n    "])));
}, function (props) {
    return props.styleSize === "large" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 18pt;\n        line-height: 1.15;\n      "], ["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 18pt;\n        line-height: 1.15;\n      "])));
}, function (props) {
    return props.styleSize === "small" && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      font-weight: 400;\n      font-size: 0.875rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1rem;\n    "], ["\n      font-weight: 400;\n      font-size: 0.875rem;\n      line-height: 1.625;\n      margin-top: 0;\n      margin-bottom: 1rem;\n    "])));
}, function (props) {
    return props.styleSize === "small" && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 14pt;\n        line-height: 1.2;\n      "], ["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 14pt;\n        line-height: 1.2;\n      "])));
}, function (props) {
    return props.styleSize === "small" && styled_components_1.default.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        font-size: 1rem;\n        line-height: 1.25;\n        margin-bottom: 1.25rem;\n      "], ["\n        font-size: 1rem;\n        line-height: 1.25;\n        margin-bottom: 1.25rem;\n      "])));
}, function (props) {
    return props.styleSize === "x-small" && styled_components_1.default.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      font-weight: 400;\n      font-size: 0.75rem;\n      line-height: 1.25;\n      margin-top: 0;\n      margin-bottom: 15px;\n    "], ["\n      font-weight: 400;\n      font-size: 0.75rem;\n      line-height: 1.25;\n      margin-top: 0;\n      margin-bottom: 15px;\n    "])));
}, function (props) {
    return props.styleSize === "x-small" && styled_components_1.default.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 12pt;\n        line-height: 1.2;\n      "], ["\n        color: g-theme-print-color;\n        font-family: sans-serif;\n        font-size: 12pt;\n        line-height: 1.2;\n      "])));
}, function (props) {
    return props.styleSize === "x-small" && styled_components_1.default.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        font-size: 0.875rem;\n        line-height: 1.42857;\n        margin-bottom: 0.75rem;\n      "], ["\n        font-size: 0.875rem;\n        line-height: 1.42857;\n        margin-bottom: 0.75rem;\n      "])));
});
var P = function (_a) {
    var styleSize = _a.styleSize, marginBottom0 = _a.marginBottom0, children = _a.children;
    return (react_1.default.createElement(StyledP, { styleSize: styleSize, marginBottom0: marginBottom0 }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = P;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=P.js.map