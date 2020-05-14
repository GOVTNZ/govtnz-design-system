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
            : ""), name: name, type: type, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Menu (example text) "))));
};
exports.default = MainNavMobileMenu;
//# sourceMappingURL=MainNavMobileMenu.js.map