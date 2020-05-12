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
var StyledLi = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"], ["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"])));
var StyledA = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 0.6em 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-weight: bold;\n  text-decoration: none;\n"], ["\n  display: inline-block;\n  padding: 0.6em 1em;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-weight: bold;\n  text-decoration: none;\n"])));
var MainNavItem = function (_a) {
    var ariaCurrent = _a.ariaCurrent, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledLi, null,
        react_1.default.createElement(StyledA, { "aria-current": ariaCurrent, href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example item text ")))));
};
exports.default = MainNavItem;
var templateObject_1, templateObject_2;
//# sourceMappingURL=MainNavItem.js.map