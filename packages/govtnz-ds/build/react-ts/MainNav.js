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
var MainNav = function (_a) {
    var children = _a.children;
    return (React.createElement("nav", { "aria-label": "Main", className: "g-main-nav", role: "navigation" },
        React.createElement("ul", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, " MainNavItem components go here ")))));
};
exports.default = MainNav;
//# sourceMappingURL=MainNav.js.map