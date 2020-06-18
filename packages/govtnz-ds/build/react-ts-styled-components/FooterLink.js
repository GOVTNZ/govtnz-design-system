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
var StyledA = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  padding: 0.7em 1em;\n  color: #d3d3d3;\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  @media only screen and (min-width: 48em) {\n    :first-child {\n      margin-left: -1em;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  :hover {\n    color: #fff;\n  }\n"], ["\n  display: block;\n  padding: 0.7em 1em;\n  color: #d3d3d3;\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  @media only screen and (min-width: 48em) {\n    :first-child {\n      margin-left: -1em;\n    }\n    display: inline-block;\n    margin-right: 1em;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n  :hover {\n    color: #fff;\n  }\n"])));
var FooterLink = function (_a) {
    var href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledA, { href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example header content "))));
};
exports.default = FooterLink;
var templateObject_1;
//# sourceMappingURL=FooterLink.js.map