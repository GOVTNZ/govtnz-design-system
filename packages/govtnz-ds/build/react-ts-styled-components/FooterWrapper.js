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
var StyledFooter = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"], ["\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"])));
var FooterWrapper = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledFooter, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Content..."))));
};
exports.default = FooterWrapper;
var templateObject_1;
//# sourceMappingURL=FooterWrapper.js.map