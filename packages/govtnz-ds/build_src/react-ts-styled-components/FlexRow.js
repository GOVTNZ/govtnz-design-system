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
  box-sizing: border-box;
  display: flex;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;
const FlexRow = ({ alignXs, alignSm, alignMd, alignLg, isReversed, children }) => (React.createElement(StyledDiv, { alignXs: alignXs, alignSm: alignSm, alignMd: alignMd, alignLg: alignLg, isReversed: isReversed }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Columns..."))));
FlexRow.props = [
    "alignXs",
    "alignSm",
    "alignMd",
    "alignLg",
    "isReversed",
    "children"
];
exports.default = FlexRow;
//# sourceMappingURL=FlexRow.js.map