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
    var isOpen = _a.isOpen, id = _a.id, name = _a.name, type = _a.type, onClick = _a.onClick, button = _a.button, children = _a.children;
    return (react_1.default.createElement("nav", { "aria-label": "Main", className: "g-main-nav", role: "navigation" },
        react_1.default.createElement("button", { "aria-controls": id, "aria-expanded": isOpen !== undefined ? isOpen.toString() === "true" : undefined, className: "g-main-nav__button" + (constants.isOpen[isOpen] !== undefined
                ? " " + constants.isOpen[isOpen]
                : ""), name: name, type: type, onClick: onClick },
            button !== undefined ? button : react_1.default.createElement(react_1.default.Fragment, null, " Menu "),
            react_1.default.createElement("svg", { className: "g-main-nav__button__icon", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z", fill: "currentColor", fillRule: "nonzero" }))),
        react_1.default.createElement("div", { id: id },
            react_1.default.createElement("ul", { className: "g-main-nav__ul" + (constants.isOpen[isOpen] !== undefined
                    ? " " + constants.isOpen[isOpen]
                    : "") }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " MainNavItem components go here "))))));
};
exports.default = MainNav;
//# sourceMappingURL=MainNav.js.map