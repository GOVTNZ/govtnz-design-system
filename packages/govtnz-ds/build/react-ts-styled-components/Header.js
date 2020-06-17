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
var StyledHeader = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background-color: #363636;\n  color: #ffffff;\n  fill: #ffffff;\n"], ["\n  position: relative;\n  background-color: #363636;\n  color: #ffffff;\n  fill: #ffffff;\n"])));
var Header = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledHeader, { role: "banner" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example header content "))));
};
exports.default = Header;
var templateObject_1;
//# sourceMappingURL=Header.js.map