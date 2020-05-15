"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants = {
    isOpen: {
        true: "g-main-nav-mobile-menu--open",
        false: "g-main-nav-mobile-menu--closed"
    }
};
var MainNavMobileMenu = function (_a) {
    var isOpen = _a.isOpen, navId = _a.navId, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("button", { "aria-controls": navId, "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined, className: "g-main-nav-mobile-menu" + (constants.isOpen[isOpen] !== undefined
            ? " " + constants.isOpen[isOpen]
            : ""), name: name, type: type, onClick: onClick },
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Menu (example text) ")),
        react_1.default.createElement("svg", { className: "g-main-nav-mobile-menu__icon", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z", fill: "currentColor", fillRule: "nonzero" }))));
};
exports.default = MainNavMobileMenu;
//# sourceMappingURL=MainNavMobileMenu.js.map