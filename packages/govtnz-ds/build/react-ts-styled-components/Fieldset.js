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
const Fieldset = ({ hintId, children }) => (React.createElement(StyledDiv, null,
    React.createElement(StyledFieldset, { "aria-describedby": hintId }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Legend and other fieldset contents...")))));
Fieldset.props = ["hintId", "children"];
exports.default = Fieldset;
//# sourceMappingURL=Fieldset.js.map