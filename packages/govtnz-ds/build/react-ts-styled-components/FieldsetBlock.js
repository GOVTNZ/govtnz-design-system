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
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"], ["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"])));
var StyledFieldset = styled.fieldset(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  :after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n"])));
var StyledLegend = styled.legend(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  box-sizing: border-box;\n  display: table;\n  max-width: 100%;\n  margin-bottom: 0px;\n  padding: 0;\n  overflow: hidden;\n  white-space: normal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  box-sizing: border-box;\n  display: table;\n  max-width: 100%;\n  margin-bottom: 0px;\n  padding: 0;\n  overflow: hidden;\n  white-space: normal;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"])));
var StyledDiv2 = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n"])));
var FieldsetBlock = function (_a) {
    var hintId = _a.hintId, legend = _a.legend, hint = _a.hint, children = _a.children;
    return (React.createElement(StyledDiv, null,
        React.createElement(StyledFieldset, { "aria-describedby": hintId },
            React.createElement(StyledLegend, null, legend !== undefined ? (legend) : (React.createElement(React.Fragment, null, "Legend text"))),
            hintId !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement(StyledDiv2, { id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Hint text"))))) : (""),
            React.createElement("div", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Fieldset contents"))))));
};
exports.default = FieldsetBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=FieldsetBlock.js.map