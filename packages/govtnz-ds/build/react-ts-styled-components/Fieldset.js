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
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"], ["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n  margin-top: 0px;\n"])));
var StyledFieldset = styled_components_1.default.fieldset(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"], ["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  margin-top: 0px;\n"])));
var Fieldset = function (_a) {
    var hintId = _a.hintId, children = _a.children;
    return (react_1.default.createElement(StyledDiv, null,
        react_1.default.createElement(StyledFieldset, { "aria-describedby": hintId }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, "Legend and other fieldset contents...")))));
};
exports.default = Fieldset;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Fieldset.js.map