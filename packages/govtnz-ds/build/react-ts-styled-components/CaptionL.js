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
const StyledSpan = styled.span `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-bottom: 5px;
  color: #6f777b;
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
    margin-bottom: 0;
  }
`;
const CaptionL = ({ children }) => (React.createElement(StyledSpan, null, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
CaptionL.props = ["children"];
exports.default = CaptionL;
//# sourceMappingURL=CaptionL.js.map