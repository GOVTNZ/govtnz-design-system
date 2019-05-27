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
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  clear: both;
  border-left: 10px solid #bfc1c3;
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
    margin-top: 30px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;
const InsetText = ({}) => (React.createElement(StyledDiv, null, "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."));
InsetText.props = [];
exports.default = InsetText;
//# sourceMappingURL=InsetText.js.map