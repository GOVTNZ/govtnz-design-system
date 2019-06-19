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
var StyledOl = styled.ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.625;\n  color: #2a2a2a;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 0;\n  list-style-type: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 10px;\n  ", "\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.625;\n  color: #2a2a2a;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 0;\n  list-style-type: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 20px;\n  }\n  margin-top: 10px;\n  ",
    "\n  margin-top: 0px;\n"])), function (props) {
    return props.numbered && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding-left: 20px;\n      list-style-type: decimal;\n    "], ["\n      padding-left: 20px;\n      list-style-type: decimal;\n    "])));
});
var Ol = function (_a) {
    var numbered = _a.numbered, children = _a.children;
    return (React.createElement(StyledOl, { numbered: numbered }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
};
exports.default = Ol;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Ol.js.map