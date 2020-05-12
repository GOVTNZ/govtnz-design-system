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
var StyledLi = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 0.25rem;\n  margin-bottom: 0;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 5px;\n  }\n  margin-top: 0px;\n"])));
var Li = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledLi, null, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = Li;
var templateObject_1;
//# sourceMappingURL=Li.js.map