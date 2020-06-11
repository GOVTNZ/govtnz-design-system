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
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: 40.0625em) {\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n  margin-top: 0px;\n"], ["\n  @media (min-width: 40.0625em) {\n    :after {\n      content: \"\";\n      display: block;\n      clear: both;\n    }\n  }\n  margin-top: 0px;\n"])));
var Radios = function (_a) {
    var inline = _a.inline, children = _a.children;
    return (react_1.default.createElement(StyledDiv, { inline: inline },
        " ",
        children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Radio components")),
        " "));
};
exports.default = Radios;
var templateObject_1;
//# sourceMappingURL=Radios.js.map