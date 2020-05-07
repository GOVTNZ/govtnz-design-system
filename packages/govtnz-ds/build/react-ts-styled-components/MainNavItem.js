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
var StyledLi = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"], ["\n  display: inline-block;\n  margin-right: 1em;\n  :last-child {\n    margin-right: 0px;\n  }\n"])));
var MainNavItem = function (_a) {
    var ariaCurrent = _a.ariaCurrent, href = _a.href, rel = _a.rel, target = _a.target, children = _a.children;
    return (React.createElement(StyledLi, null,
        React.createElement("a", { "aria-current": ariaCurrent ? ariaCurrent : "", href: href, rel: rel, target: target }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, " Example item text ")))));
};
exports.default = MainNavItem;
var templateObject_1;
//# sourceMappingURL=MainNavItem.js.map