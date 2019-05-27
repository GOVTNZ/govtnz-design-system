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
const StyledP = styled.p `
  ${props => props.styleSize === "large" &&
    styled.css `
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.11111;
      margin-top: 0;
      margin-bottom: 20px;
    `}
  @media print {
    ${props => props.styleSize === "large" &&
    styled.css `
        color: #000000;
      `};
  }
  @media print {
    ${props => props.styleSize === "large" &&
    styled.css `
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "large" &&
    styled.css `
        font-size: 1.5rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props => props.styleSize === "large" &&
    styled.css `
        font-size: 18pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "large" &&
    styled.css `
        margin-bottom: 30px;
      `};
  }
  ${props => props.styleSize === "medium" &&
    styled.css `
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    `}
  @media print {
    ${props => props.styleSize === "medium" &&
    styled.css `
        color: #000000;
      `};
  }
  @media print {
    ${props => props.styleSize === "medium" &&
    styled.css `
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "medium" &&
    styled.css `
        font-size: 1.1875rem;
        line-height: 1.31579;
      `};
  }
  @media print {
    ${props => props.styleSize === "medium" &&
    styled.css `
        font-size: 14pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "medium" &&
    styled.css `
        margin-bottom: 20px;
      `};
  }
  ${props => props.styleSize === "small" &&
    styled.css `
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.625;
      margin-top: 0;
      margin-bottom: 1rem;
    `}
  @media print {
    ${props => props.styleSize === "small" &&
    styled.css `
        color: #000000;
      `};
  }
  @media print {
    ${props => props.styleSize === "small" &&
    styled.css `
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "small" &&
    styled.css `
        font-size: 1rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props => props.styleSize === "small" &&
    styled.css `
        font-size: 14pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "small" &&
    styled.css `
        margin-bottom: 20px;
      `};
  }
  ${props => props.styleSize === "x-small" &&
    styled.css `
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.25;
      margin-top: 0;
      margin-bottom: 15px;
    `}
  @media print {
    ${props => props.styleSize === "x-small" &&
    styled.css `
        color: #000000;
      `};
  }
  @media print {
    ${props => props.styleSize === "x-small" &&
    styled.css `
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "x-small" &&
    styled.css `
        font-size: 0.875rem;
        line-height: 1.42857;
      `};
  }
  @media print {
    ${props => props.styleSize === "x-small" &&
    styled.css `
        font-size: 12pt;
        line-height: 1.2;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props => props.styleSize === "x-small" &&
    styled.css `
        margin-bottom: 20px;
      `};
  }
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
`;
const P = ({ styleSize, children }) => (React.createElement(StyledP, { styleSize: styleSize }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
P.props = ["styleSize", "children"];
exports.default = P;
//# sourceMappingURL=P.js.map