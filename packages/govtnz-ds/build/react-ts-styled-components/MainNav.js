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
var StyledNav = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n"], ["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n"])));
var StyledUl = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"], ["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"])));
var MainNav = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledNav, { "aria-label": "Main", role: "navigation" },
        react_1.default.createElement(StyledUl, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " MainNavItem components go here ")))));
};
exports.default = MainNav;
var templateObject_1, templateObject_2;
//# sourceMappingURL=MainNav.js.map