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
var StyledUl = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: g-theme-color;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 20px;\n  list-style-type: disc;\n  ", "\n  @media print {\n    font-family: sans-serif;\n    font-size: 14pt;\n    line-height: 1.15;\n    color: g-theme-print-color;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n    margin-bottom: 1rem;\n    margin-bottom: 0;\n    line-height: 32px;\n  }\n  list-style-type: circle;\n  ", "\n  ", "\n"], ["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: g-theme-color;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 20px;\n  list-style-type: disc;\n  ",
    "\n  @media print {\n    font-family: sans-serif;\n    font-size: 14pt;\n    line-height: 1.15;\n    color: g-theme-print-color;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n    margin-bottom: 1rem;\n    margin-bottom: 0;\n    line-height: 32px;\n  }\n  list-style-type: circle;\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.spacing && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin-bottom: 0;\n      line-height: 32px;\n    "], ["\n      margin-bottom: 0;\n      line-height: 32px;\n    "])));
}, function (props) {
    return props.marginBottom0 && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      margin-bottom: 0px !important;\n    "], ["\n      margin-bottom: 0px !important;\n    "])));
}, function (props) {
    return props.noBullet && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      list-style: none;\n      padding-left: 0px;\n      margin-left: 0px;\n    "], ["\n      list-style: none;\n      padding-left: 0px;\n      margin-left: 0px;\n    "])));
});
var Ul = function (_a) {
    var spacing = _a.spacing, marginBottom0 = _a.marginBottom0, noBullet = _a.noBullet, children = _a.children;
    return (react_1.default.createElement(StyledUl, { spacing: spacing, marginBottom0: marginBottom0, noBullet: noBullet }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Ul;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Ul.js.map