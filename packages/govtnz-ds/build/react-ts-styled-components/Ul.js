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
var StyledUl = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var Ul = function (_a) {
    var bulleted = _a.bulleted, children = _a.children;
    return (react_1.default.createElement(StyledUl, { bulleted: bulleted },
        " ",
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text")),
        " "));
};
exports.default = Ul;
var templateObject_1;
//# sourceMappingURL=Ul.js.map