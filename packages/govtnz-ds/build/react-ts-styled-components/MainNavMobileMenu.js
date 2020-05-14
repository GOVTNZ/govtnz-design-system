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
var StyledButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: red;\n  color: white;\n  display: none;\n  ", "\n    ::after {\n    display: inline;\n    content: \"(open)\";\n  }\n  ::after {\n    display: inline;\n    content: \"(close)\";\n  }\n"], ["\n  background: red;\n  color: white;\n  display: none;\n  ",
    "\n    ::after {\n    display: inline;\n    content: \"(open)\";\n  }\n  ::after {\n    display: inline;\n    content: \"(close)\";\n  }\n"])), function (props) {
    return ["true", "false"].indexOf(props.isOpen) !== -1 && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: inline-block;\n      "], ["\n        display: inline-block;\n      "])));
});
var MainNavMobileMenu = function (_a) {
    var ariaExpanded = _a.ariaExpanded, isOpen = _a.isOpen, menuContainer = _a.menuContainer, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledButton, { isOpen: isOpen, "aria-controls": menuContainer, "aria-expanded": ariaExpanded !== undefined && ariaExpanded.toString() === "true", name: name, type: type, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Menu (example text) "))));
};
exports.default = MainNavMobileMenu;
var templateObject_1, templateObject_2;
//# sourceMappingURL=MainNavMobileMenu.js.map