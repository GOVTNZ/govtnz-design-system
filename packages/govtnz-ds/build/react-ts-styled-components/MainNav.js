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
var StyledNav = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n  margin: 0px -1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px;\n    background-color: transparent;\n    margin: 0px -2rem;\n  }\n"], ["\n  display: block;\n  padding: 0px;\n  margin: 0px;\n  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n  margin: 0px -1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px;\n    background-color: transparent;\n    margin: 0px -2rem;\n  }\n"])));
var StyledButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  display: inline-block;\n  @media only screen and (min-width: 48em) {\n    display: none;\n  }\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n"], ["\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  display: inline-block;\n  @media only screen and (min-width: 48em) {\n    display: none;\n  }\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n"])));
var StyledSvg = styled_components_1.default.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  fill: var(--g-theme-inverted-color, #ffffff);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  padding-left: 0.2em;\n  width: 16px;\n  height: 16px;\n  transform: rotate(180deg);\n"], ["\n  display: inline-block;\n  fill: var(--g-theme-inverted-color, #ffffff);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  padding-left: 0.2em;\n  width: 16px;\n  height: 16px;\n  transform: rotate(180deg);\n"])));
var StyledUl = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0px;\n  margin: 0px 0px 0px 1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px 2rem;\n  }\n  display: block;\n  display: none;\n  @media only screen and (min-width: 48em) {\n    display: block;\n  }\n"], ["\n  list-style: none;\n  padding: 0px;\n  margin: 0px 0px 0px 1rem;\n  @media only screen and (min-width: 48em) {\n    margin: 0px 2rem;\n  }\n  display: block;\n  display: none;\n  @media only screen and (min-width: 48em) {\n    display: block;\n  }\n"])));
var MainNav = function (_a) {
    var isOpen = _a.isOpen, id = _a.id, name = _a.name, type = _a.type, onClick = _a.onClick, button = _a.button, children = _a.children;
    return (react_1.default.createElement(StyledNav, { "aria-label": "Main", role: "navigation" },
        react_1.default.createElement(StyledButton, { isOpen: isOpen, "aria-controls": id, "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined, name: name, type: type, onClick: onClick },
            button !== undefined ? button : react_1.default.createElement(react_1.default.Fragment, null, " Menu "),
            react_1.default.createElement(StyledSvg, { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z", fill: "currentColor", fillRule: "nonzero" }))),
        react_1.default.createElement("div", { id: id },
            react_1.default.createElement(StyledUl, { isOpen: isOpen }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " MainNavItem components go here "))))));
};
exports.default = MainNav;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MainNav.js.map