"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  list-style: none;\n"], ["\n  display: block;\n  list-style: none;\n"])));
var MainNav = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledNav, { "aria-label": "Main", role: "navigation" },
        React.createElement("ul", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, " MainNavItem components go here ")))));
};
exports.default = MainNav;
var templateObject_1;
//# sourceMappingURL=MainNav.js.map