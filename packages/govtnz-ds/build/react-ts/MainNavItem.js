"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var MainNavItem = function (_a) {
    var ariaCurrent = _a.ariaCurrent, href = _a.href, rel = _a.rel, target = _a.target, children = _a.children;
    return (React.createElement("li", { className: "g-main-nav__item" },
        React.createElement("a", { "aria-current": ariaCurrent ? ariaCurrent : "", href: href, rel: rel, target: target }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, " Example item text ")))));
};
exports.default = MainNavItem;
//# sourceMappingURL=MainNavItem.js.map