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
var StyledNav = styled_components_1.default.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  ", "\n  ", "\n"], ["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.isOpen === "true" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: block;\n    "], ["\n      display: block;\n    "])));
}, function (props) {
    return props.isOpen === "false" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: none;\n    "], ["\n      display: none;\n    "])));
});
var StyledUl = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"], ["\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n"])));
var MainNav = function (_a) {
    var isOpen = _a.isOpen, menuContainer = _a.menuContainer, children = _a.children;
    return (react_1.default.createElement(StyledNav, { isOpen: isOpen, "aria-label": "Main", id: menuContainer, role: "navigation" },
        react_1.default.createElement(StyledUl, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " MainNavItem components go here ")))));
};
exports.default = MainNav;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MainNav.js.map