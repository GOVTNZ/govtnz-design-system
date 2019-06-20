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
var StyledSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.11111;\n  display: block;\n  margin-bottom: 5px;\n  color: #6f777b;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.125rem;\n  line-height: 1.11111;\n  display: block;\n  margin-bottom: 5px;\n  color: #6f777b;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"])));
var CaptionL = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledSpan, null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = CaptionL;
var templateObject_1;
//# sourceMappingURL=CaptionL.js.map