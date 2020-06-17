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
var StyledDiv = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  ", "\n@media only screen and (min-width: 48em) {\n    ", ";\n  }\n  @media only screen and (min-width: 75em) {\n    ", ";\n  }\n"], ["\n  ",
    "\n  ",
    "\n@media only screen and (min-width: 48em) {\n    ",
    ";\n  }\n  @media only screen and (min-width: 75em) {\n    ",
    ";\n  }\n"])), function (props) {
    return ["fixed", "fluid"].indexOf(props.width) !== -1 && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin-right: auto;\n      margin-left: auto;\n      padding-right: 1rem;\n      padding-left: 1rem;\n    "], ["\n      margin-right: auto;\n      margin-left: auto;\n      padding-right: 1rem;\n      padding-left: 1rem;\n    "])));
}, function (props) {
    return props.width === "fixed" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      max-width: 85.375rem;\n      box-sizing: border-box;\n    "], ["\n      max-width: 85.375rem;\n      box-sizing: border-box;\n    "])));
}, function (props) {
    return ["fixed", "fluid"].indexOf(props.width) !== -1 && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        padding-right: 2rem;\n        padding-left: 2rem;\n      "], ["\n        padding-right: 2rem;\n        padding-left: 2rem;\n      "])));
}, function (props) {
    return ["fixed", "fluid"].indexOf(props.width) !== -1 && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        padding-right: 2.5rem;\n        padding-left: 2.5rem;\n      "], ["\n        padding-right: 2.5rem;\n        padding-left: 2.5rem;\n      "])));
});
var FlexContainer = function (_a) {
    var width = _a.width, children = _a.children;
    return (react_1.default.createElement(StyledDiv, { width: width }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Rows..."))));
};
exports.default = FlexContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=FlexContainer.js.map