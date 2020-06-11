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
var StyledP = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 0px;\n"], ["\n  margin-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 0px;\n"])));
var P = function (_a) {
    var styleSize = _a.styleSize, children = _a.children;
    return (react_1.default.createElement(StyledP, { styleSize: styleSize }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Example text"))));
};
exports.default = P;
var templateObject_1;
//# sourceMappingURL=P.js.map