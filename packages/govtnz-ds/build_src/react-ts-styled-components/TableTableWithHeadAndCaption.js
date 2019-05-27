"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styled = __importStar(require("styled-components"));
const StyledTable = styled.table `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
  @media print {
    color: #000000;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;
const StyledCaption = styled.caption `
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 18pt;
    line-height: 1.15;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0.5rem;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  font-weight: 700;
  display: table-caption;
  text-align: left;
`;
const TableTableWithHeadAndCaption = ({}) => (React.createElement(StyledTable, null,
    React.createElement(StyledCaption, null, "Caption 1: Months and rates"),
    React.createElement("thead", null,
        React.createElement("tr", null, "Month you apply Rate for bicycles Rate for vehicles")),
    React.createElement("tbody", null,
        React.createElement("tr", null, "January $85 $95"),
        React.createElement("tr", null, "February $75 $55"),
        React.createElement("tr", null, "March $165 $125"))));
TableTableWithHeadAndCaption.props = [];
exports.default = TableTableWithHeadAndCaption;
//# sourceMappingURL=TableTableWithHeadAndCaption.js.map