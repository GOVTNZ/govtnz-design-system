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
var StyledButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  ", "\n  ", "\n"], ["\n  background: transparent;\n  color: var(--g-theme-inverted-color, #ffffff);\n  font-size: 16px;\n  display: none;\n  padding: 1em;\n  border: none;\n  :focus {\n    outline: 3px solid var(--color-theme-focus, #b53cde);\n  }\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.isOpen === "true" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n    "], ["\n      background-color: var(--g-theme-inverted-background-color2, #2a2a2a);\n    "])));
}, function (props) {
    return ["true", "false"].indexOf(props.isOpen) !== -1 && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n    "], ["\n      display: inline-block;\n    "])));
});
var StyledSvg = styled_components_1.default.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  fill: var(--g-theme-inverted-color, #ffffff);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  padding-left: 0.2em;\n  width: 16px;\n  height: 16px;\n  transform: rotate(180deg);\n"], ["\n  display: inline-block;\n  fill: var(--g-theme-inverted-color, #ffffff);\n  transition: transform 0.15s;\n  vertical-align: middle;\n  padding-left: 0.2em;\n  width: 16px;\n  height: 16px;\n  transform: rotate(180deg);\n"])));
var MainNavMobileMenu = function (_a) {
    var isOpen = _a.isOpen, navId = _a.navId, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledButton, { isOpen: isOpen, "aria-controls": navId, "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined, name: name, type: type, onClick: onClick },
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Menu (example text) ")),
        react_1.default.createElement(StyledSvg, { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z", fill: "currentColor", fillRule: "nonzero" }))));
};
exports.default = MainNavMobileMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=MainNavMobileMenu.js.map