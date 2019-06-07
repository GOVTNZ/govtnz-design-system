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
var StyledTable = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  width: 100%;\n  margin-bottom: 20px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  width: 100%;\n  margin-bottom: 20px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"])));
var StyledCaption = styled.caption(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #0b0c0c;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.25;\n  display: block;\n  margin-top: 2.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0.5rem;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  font-weight: 700;\n  display: table-caption;\n  text-align: left;\n"], ["\n  color: #0b0c0c;\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1.25;\n  display: block;\n  margin-top: 2.5rem;\n  margin-bottom: 0.5rem;\n  @media print {\n    color: #000000;\n  }\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.5rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 18pt;\n    line-height: 1.15;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 0.5rem;\n  }\n  padding-top: 5px;\n  @media (min-width: 40.0625em) {\n    padding-top: 10px;\n  }\n  font-weight: 700;\n  display: table-caption;\n  text-align: left;\n"])));
var TableTableWithHeadAndCaption = function (_a) { return (React.createElement(StyledTable, null,
    React.createElement(StyledCaption, null, "Caption 1: Months and rates"),
    React.createElement("thead", null,
        React.createElement("tr", null, "Month you apply Rate for bicycles Rate for vehicles")),
    React.createElement("tbody", null,
        React.createElement("tr", null, "January $85 $95"),
        React.createElement("tr", null, "February $75 $55"),
        React.createElement("tr", null, "March $165 $125")))); };
TableTableWithHeadAndCaption.props = [];
exports.default = TableTableWithHeadAndCaption;
var templateObject_1, templateObject_2;
//# sourceMappingURL=TableTableWithHeadAndCaption.js.map