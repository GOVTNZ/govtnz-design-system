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
const StyledDetails = styled.details `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-bottom: 20px;
  display: block;
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
const StyledSummary = styled.summary `
  display: inline-block;
  position: relative;
  margin-bottom: 5px;
  padding-left: 25px;
  color: #005ea5;
  cursor: pointer;
  :hover {
    color: #2b8cc4;
  }
  :focus {
    outline: 4px solid #ffbf47;
    outline-offset: -1px;
    color: #0b0c0c;
    background: #ffbf47;
  }
  ::-webkit-details-marker {
    display: none;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    border-width: 7px 0 7px 12.124px;
    border-left-color: inherit;
  }
  :before {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
    border-width: 12.124px 7px 0 7px;
    border-top-color: inherit;
  }
`;
const StyledSpan = styled.span `
  text-decoration: underline;
`;
const StyledDiv = styled.div `
  padding: 15px;
  padding-left: 20px;
  border-left: 5px solid #bfc1c3;
`;
const DetailsExpanded = ({ helpWithNationality, detailsContent3E1674E973084F93B79C1A8694B6F4D5 }) => (React.createElement(StyledDetails, { id: helpWithNationality, open: "", role: "group" },
    React.createElement(StyledSummary, { "aria-controls": detailsContent3E1674E973084F93B79C1A8694B6F4D5, "aria-expanded": "true", role: "button" },
        React.createElement(StyledSpan, null, "Help with nationality")),
    React.createElement(StyledDiv, { "aria-hidden": "false", id: detailsContent3E1674E973084F93B79C1A8694B6F4D5 }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post.")));
DetailsExpanded.props = [
    "helpWithNationality",
    "detailsContent3E1674E973084F93B79C1A8694B6F4D5"
];
exports.default = DetailsExpanded;
//# sourceMappingURL=DetailsExpanded.js.map