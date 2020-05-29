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
var StyledDiv = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n", "\n", "\n", "\n", ""], ["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n",
    "\n",
    "\n",
    "\n",
    ""])), function (props) {
    return props.level === "info" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "warning" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "], ["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "success" && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "error" && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "])));
});
var StyledDiv2 = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n", "\n", "\n", "\n", ""], ["border-radius: 5px;\nmargin-bottom: 1em;\npadding: 0.5em 1em;\n",
    "\n",
    "\n",
    "\n",
    ""])), function (props) {
    return props.level === "info" && styled_components_1.default.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px blue;\n    border-color: var(--g-theme-info, blue);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "warning" && styled_components_1.default.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "], ["\n    border: 1px solid orange;\n    border-color: var(--g-theme-warning, orange);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "success" && styled_components_1.default.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px green;\n    border-color: var(--g-theme-success, green);\n    border-left-width: 1em;\n  "])));
}, function (props) {
    return props.level === "error" && styled_components_1.default.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "], ["\n    border: solid 1px red;\n    border-color: var(--g-theme-error, red);\n    border-left-width: 1em;\n  "])));
});
var Alert = function (_a) {
    var mode = _a.mode, level = _a.level, children = _a.children, headingId = _a.headingId;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" },
                react_1.default.createElement(StyledDiv, { level: level }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")))))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note", tabIndex: -1 },
                react_1.default.createElement(StyledDiv2, { level: level }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")))))) : ("")));
};
exports.default = Alert;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Alert.js.map