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
  margin-top: 5px;
  margin-bottom: 20px;
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
    margin-top: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;
const StyledH2 = styled.h2 `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 5px;
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
  @media (min-width: 40.0625em) {
    display: none;
  }
`;
const StyledUl = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 40.0525em) {
    margin-bottom: 20px;
  }
  @media (max-width: 40.0525em) and (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  @media (min-width: 40.0625em) {
    border-bottom: 1px solid #bfc1c3;
    :after {
      content: "";
      display: block;
      clear: both;
    }
  }
`;
const StyledLi = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
`;
const StyledA = styled.a `
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
    margin-top: -5px;
    margin-bottom: -1px;
    padding-top: 14px;
    padding-right: 19px;
    padding-bottom: 16px;
    padding-left: 19px;
    border: 1px solid #bfc1c3;
    border-bottom: 0;
    color: #0b0c0c;
    background-color: #ffffff;
    :focus {
      background-color: transparent;
    }
  }
`;
const StyledLi2 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-left: 25px;
  ::before {
    content: "— ";
    margin-left: -25px;
    padding-right: 5px;
  }
  @media (min-width: 40.0625em) {
    margin-left: 0;
    ::before {
      content: none;
    }
  }
`;
const StyledA2 = styled.a `
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
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
  @media (min-width: 40.0625em) {
    margin-right: 5px;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    color: #0b0c0c;
    background-color: #f8f8f8;
    text-align: center;
    text-decoration: none;
  }
`;
const StyledSection = styled.section `
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
`;
const StyledH22 = styled.h2 `
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
`;
const StyledP = styled.p `
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
`;
const StyledA3 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link {
    color: #005ea5;
  }
  :visited {
    color: #4c2c92;
  }
  :hover {
    color: #2b8cc4;
  }
  :active {
    color: #2b8cc4;
  }
  :focus {
    color: #0b0c0c;
  }
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
`;
const StyledA4 = styled.a `
  font-weight: 700;
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
    background-color: #ffbf47;
  }
  :link,
  :visited,
  :hover,
  :active {
    color: #b10e1e;
  }
  :focus {
    color: #0b0c0c;
  }
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.14286;
  white-space: nowrap;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.2;
  }
  :link,
  :hover,
  :visited {
    color: #1d8feb;
  }
  :focus {
    color: #0b0c0c;
  }
`;
const StyledSection2 = styled.section `
  margin-bottom: 30px;
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 0;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border: 1px solid #bfc1c3;
    border-top: 0;
  }
  @media (min-width: 40.0625em) and (min-width: 40.0625em) {
    margin-bottom: 0;
  }
  @media (min-width: 40.0625em) {
    display: none;
  }
`;
const StyledH23 = styled.h2 `
  color: #2a2a2a;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.2;
  display: block;
  margin-top: 3.5rem;
  margin-bottom: 0.5rem;
  @media print {
    color: #000000;
  }
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 24pt;
    line-height: 1.05;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
`;
const constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const TabsTabsWithAnchorInPanel = ({ tabTab1, tab1, href, rel, target, tabTab2, tab2, href2, rel2, target2, href3, rel3, target3, anchor, href4, rel4, target4 }) => (React.createElement(StyledDiv, { "data-module": "tabs" },
    React.createElement(StyledH2, null, "Contents"),
    React.createElement(StyledUl, { role: "tablist" },
        React.createElement(StyledLi, { role: "presentation" },
            React.createElement(StyledA, { "aria-controls": tab1, "aria-selected": "true", href: href, id: tabTab1, role: "tab", tabIndex: 0, rel: rel, target: constants.target[target] }, "Tab 1")),
        React.createElement(StyledLi2, { role: "presentation" },
            React.createElement(StyledA2, { "aria-controls": tab2, "aria-selected": "false", href: href2, id: tabTab2, role: "tab", tabIndex: -1, rel: rel2, target: constants.target2[target2] }, "Tab 2"))),
    React.createElement(StyledSection, { "aria-labelledby": tabTab1, id: tab1, role: "tabpanel" },
        React.createElement(StyledH22, null, "Tab 1"),
        React.createElement(StyledP, null, "Testing that when you click the anchor it moves to the anchor point successfully"),
        React.createElement(StyledA3, { href: href3, rel: rel3, target: constants.target3[target3] }, "Anchor"),
        React.createElement(StyledA4, { id: anchor, tabIndex: 0, href: href4, rel: rel4, target: constants.target4[target4] }, "Anchor Point")),
    React.createElement(StyledSection2, { "aria-labelledby": tabTab2, id: tab2, role: "tabpanel" },
        React.createElement(StyledH23, null, "Tab 2"))));
TabsTabsWithAnchorInPanel.props = [
    "tabTab1",
    "tab1",
    "href",
    "rel",
    "target",
    "tabTab2",
    "tab2",
    "href2",
    "rel2",
    "target2",
    "href3",
    "rel3",
    "target3",
    "anchor",
    "href4",
    "rel4",
    "target4"
];
exports.default = TabsTabsWithAnchorInPanel;
//# sourceMappingURL=TabsTabsWithAnchorInPanel.js.map