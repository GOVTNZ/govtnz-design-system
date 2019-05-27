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
const StyledStrong = styled.strong `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25;
  display: inline-block;
  padding: 4px 8px;
  padding-bottom: 1px;
  outline: 2px solid transparent;
  outline-offset: -2px;
  color: #ffffff;
  background-color: #005ea5;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.25;
  }
`;
const Tag = ({}) => React.createElement(StyledStrong, null, "alpha");
Tag.props = [];
exports.default = Tag;
//# sourceMappingURL=Tag.js.map