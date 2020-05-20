"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MainNavItem = function (_a) {
    var ariaCurrent = _a.ariaCurrent, href = _a.href, rel = _a.rel, target = _a.target, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement("li", { className: "g-main-nav__item" },
        react_1.default.createElement("a", { "aria-current": ariaCurrent, className: "g-main-nav__item__link" + (ariaCurrent ? " g-main-nav__item__link--active" : ""), href: href, rel: rel, target: target, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example item text ")))));
};
exports.default = MainNavItem;
//# sourceMappingURL=MainNavItem.js.map