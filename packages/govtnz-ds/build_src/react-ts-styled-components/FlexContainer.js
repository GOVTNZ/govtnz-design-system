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
  ${props => ["fixed", "fluid"].indexOf(props.width) !== -1 &&
    styled.css `
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    `}
  ${props => props.width === "fixed" &&
    styled.css `
      max-width: 85.375rem;
      box-sizing: border-box;
    `}
@media only screen and (min-width: 48em) {
    ${props => ["fixed", "fluid"].indexOf(props.width) !== -1 &&
    styled.css `
        padding-right: 2rem;
        padding-left: 2rem;
      `};
  }
  @media only screen and (min-width: 75em) {
    ${props => ["fixed", "fluid"].indexOf(props.width) !== -1 &&
    styled.css `
        padding-right: 2.5rem;
        padding-left: 2.5rem;
      `};
  }
`;
const FlexContainer = ({ width, children }) => (React.createElement(StyledDiv, { width: width }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Rows..."))));
FlexContainer.props = ["width", "children"];
exports.default = FlexContainer;
//# sourceMappingURL=FlexContainer.js.map