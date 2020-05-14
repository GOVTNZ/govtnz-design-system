"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    isOpen: { true: "g-main-nav--open", false: "g-main-nav--closed" }
};
var MainNav = function (_a) {
    var isOpen = _a.isOpen, menuContainer = _a.menuContainer, children = _a.children;
    return (react_1.default.createElement("nav", { "aria-label": "Main", className: "g-main-nav" + (constants.isOpen[isOpen] !== undefined
            ? " " + constants.isOpen[isOpen]
            : ""), id: menuContainer, role: "navigation" },
        react_1.default.createElement("ul", { className: "g-main-nav__ul" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " MainNavItem components go here ")))));
};
exports.default = MainNav;
//# sourceMappingURL=MainNav.js.map