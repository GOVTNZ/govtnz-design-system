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
var StyledLi = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin-right: 0em;\n  margin-left: -0.9em;\n  font-family: sans-serif;\n  font-size: 18px;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 20px;\n  @media only screen and (min-width: 48em) {\n    ::first-line {\n      margin-top: 0px;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-left: 0px;\n    margin-top: 4px;\n    :first-child {\n      margin-left: 0em;\n    }\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n"], ["\n  display: block;\n  margin-right: 0em;\n  margin-left: -0.9em;\n  font-family: sans-serif;\n  font-size: 18px;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 20px;\n  @media only screen and (min-width: 48em) {\n    ::first-line {\n      margin-top: 0px;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-left: 0px;\n    margin-top: 4px;\n    :first-child {\n      margin-left: 0em;\n    }\n    :last-child {\n      margin-right: 0px;\n    }\n  }\n"])));
var StyledA = styled_components_1.default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  padding: 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n  ", "\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  @media only screen and (min-width: 48em) {\n    position: relative;\n    display: inline-block;\n    padding: 0.6em 1em;\n    ", ";\n    ::after {\n      content: \"\";\n      position: absolute;\n      clear: both;\n      display: block;\n      bottom: 0px;\n      left: 1em;\n      right: 1em;\n      height: 4px;\n      background: #24a882;\n      background-color: var(--g-theme-inverted-brand, #24a882);\n    }\n  }\n"], ["\n  display: block;\n  padding: 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n  ",
    "\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  @media only screen and (min-width: 48em) {\n    position: relative;\n    display: inline-block;\n    padding: 0.6em 1em;\n    ",
    ";\n    ::after {\n      content: \"\";\n      position: absolute;\n      clear: both;\n      display: block;\n      bottom: 0px;\n      left: 1em;\n      right: 1em;\n      height: 4px;\n      background: #24a882;\n      background-color: var(--g-theme-inverted-brand, #24a882);\n    }\n  }\n"])), function (props) {
    return props.ariaCurrent && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-left: solid 0.2em var(--g-theme-inverted-brand, #24a882);\n      padding-left: 0.8em;\n    "], ["\n      border-left: solid 0.2em var(--g-theme-inverted-brand, #24a882);\n      padding-left: 0.8em;\n    "])));
}, function (props) {
    return props.ariaCurrent && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border-left: none;\n      "], ["\n        border-left: none;\n      "])));
});
var MainNavLink = function (_a) {
    var ariaCurrent = _a.ariaCurrent, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledLi, null,
        react_1.default.createElement(StyledA, { ariaCurrent: ariaCurrent, "aria-current": ariaCurrent, href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example item text ")))));
};
exports.default = MainNavLink;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MainNavLink.js.map