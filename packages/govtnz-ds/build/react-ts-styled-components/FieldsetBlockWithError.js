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
const StyledDiv = styled.div `
  margin-bottom: 20px;
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  :last-of-type {
    margin-bottom: 0;
  }
  padding-left: 15px;
  border-left: 5px solid #b10e1e;
  padding: 0;
  border: 0;
  margin-bottom: 5px;
`;
const StyledFieldset = styled.fieldset `
  margin: 0;
  padding: 0;
  border: 0;
  :after {
    content: "";
    display: block;
    clear: both;
  }
`;
const StyledLegend = styled.legend `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 0px;
  padding: 0;
  overflow: hidden;
  white-space: normal;
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
`;
const StyledDiv2 = styled.div `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  color: #595959;
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
  margin-top: -5px;
`;
const StyledDiv3 = styled.div `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-bottom: 15px;
  clear: both;
  color: #b10e1e;
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
`;
const FieldsetBlockWithError = ({ hintId, errorId, legend, hint, error, children }) => (React.createElement(StyledDiv, null,
    React.createElement(StyledFieldset, { "aria-describedby": hintId !== undefined || errorId !== undefined
            ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
            : undefined },
        React.createElement(StyledLegend, null, legend !== undefined ? (legend) : (React.createElement(React.Fragment, null, "Legend text"))),
        React.createElement(StyledDiv2, { id: hintId }, hint !== undefined ? hint : React.createElement(React.Fragment, null, "Hint text")),
        React.createElement(StyledDiv3, { id: errorId }, error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Error text"))),
        React.createElement("div", null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Fieldset contents"))))));
FieldsetBlockWithError.props = [
    "hintId",
    "errorId",
    "legend",
    "hint",
    "error",
    "children"
];
exports.default = FieldsetBlockWithError;
//# sourceMappingURL=FieldsetBlockWithError.js.map