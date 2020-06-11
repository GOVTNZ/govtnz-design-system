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
var StyledDiv = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  ", "\n  ", "\n@media only screen and (min-width: 48em) {\n    ", ";\n    ", ";\n    ", ";\n  }\n  @media only screen and (min-width: 64em) {\n    ", ";\n    ", ";\n    ", ";\n  }\n  @media only screen and (min-width: 75em) {\n    ", ";\n    ", ";\n    ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  ",
    "\n  ",
    "\n@media only screen and (min-width: 48em) {\n    ",
    ";\n    ",
    ";\n    ",
    ";\n  }\n  @media only screen and (min-width: 64em) {\n    ",
    ";\n    ",
    ";\n    ",
    ";\n  }\n  @media only screen and (min-width: 75em) {\n    ",
    ";\n    ",
    ";\n    ",
    ";\n  }\n"])), function (props) {
    return props.xsVerticalAlign === "top" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      -webkit-box-align: start;\n      -ms-flex-align: start;\n      align-items: flex-start;\n    "], ["\n      -webkit-box-align: start;\n      -ms-flex-align: start;\n      align-items: flex-start;\n    "])));
}, function (props) {
    return props.xsVerticalAlign === "bottom" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      -webkit-box-align: end;\n      -ms-flex-align: end;\n      align-items: flex-end;\n    "], ["\n      -webkit-box-align: end;\n      -ms-flex-align: end;\n      align-items: flex-end;\n    "])));
}, function (props) {
    return props.smVerticalAlign === "top" && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "], ["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "])));
}, function (props) {
    return props.smVerticalAlign === "middle" && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "], ["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "])));
}, function (props) {
    return props.smVerticalAlign === "bottom" && styled_components_1.default.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "], ["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "])));
}, function (props) {
    return props.mdVerticalAlign === "top" && styled_components_1.default.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "], ["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "])));
}, function (props) {
    return props.mdVerticalAlign === "middle" && styled_components_1.default.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "], ["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "])));
}, function (props) {
    return props.mdVerticalAlign === "bottom" && styled_components_1.default.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "], ["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "])));
}, function (props) {
    return props.lgVerticalAlign === "top" && styled_components_1.default.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "], ["\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n      "])));
}, function (props) {
    return props.lgVerticalAlign === "middle" && styled_components_1.default.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "], ["\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n      "])));
}, function (props) {
    return props.lgVerticalAlign === "bottom" && styled_components_1.default.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "], ["\n        -webkit-box-align: end;\n        -ms-flex-align: end;\n        align-items: flex-end;\n      "])));
});
var FlexRow = function (_a) {
    var xsVerticalAlign = _a.xsVerticalAlign, smVerticalAlign = _a.smVerticalAlign, mdVerticalAlign = _a.mdVerticalAlign, lgVerticalAlign = _a.lgVerticalAlign, isReversed = _a.isReversed, children = _a.children;
    return (react_1.default.createElement(StyledDiv, { xsVerticalAlign: xsVerticalAlign, smVerticalAlign: smVerticalAlign, mdVerticalAlign: mdVerticalAlign, lgVerticalAlign: lgVerticalAlign, isReversed: isReversed },
        " ",
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Columns...")),
        " "));
};
exports.default = FlexRow;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=FlexRow.js.map