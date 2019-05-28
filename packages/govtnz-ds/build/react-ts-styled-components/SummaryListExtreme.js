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
const StyledDl = styled.dl `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin: 0;
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
    display: table;
    width: 100%;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`;
const StyledDiv = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledDd2 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledUl = styled.ul `
  width: 100%;
  margin: 0;
  padding: 0;
`;
const StyledLi = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi2 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA2 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi3 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
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
const StyledLi4 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA4 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi5 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA5 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi6 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA6 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi7 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA7 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi8 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA8 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi9 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA9 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi10 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA10 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi11 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA11 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi12 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA12 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi13 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA13 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi14 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA14 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi15 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA15 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi16 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA16 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledDiv2 = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt2 = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd3 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledA17 = styled.a `font-family: Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
@media print{
font-family: sans-serif;;
}
:focus{
outline: 3px solid #ffbf47;
outline-offset: 0;
}
:link{
color: #005ea5;
}
:visited{
color: #4c2c92;
}
:hover{
color: #2b8cc4;
}
:active{
color: #2b8cc4;
}
:focus{
color: #0b0c0c;
}
@media print{
://"]::after,://"]::after{
content: " (" attr(href) ")";
font-size: 90%;
word-wrap: break-word;
};
}
font-weight: 700;
:focus{
outline: 3px solid #ffbf47;
outline-offset: 0;
background-color: #ffbf47;
}
:link,:visited,:hover,:active{
color: #b10e1e;
}
:focus{
color: #0b0c0c;
}
font-family: Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-weight: 700;
font-size: 0.875rem;
line-height: 1.14286;
white-space: nowrap;
@media print{
font-family: sans-serif;;
}
@media (min-width: 40.0625em){
font-size: 1rem;
line-height: 1.25;;
}
@media print{
font-size: 14pt;
line-height: 1.2;;
}
:link,:hover,:visited{
color: #1d8feb;
}
:focus{
color: #0b0c0c;
}`;
const StyledDd4 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledA18 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledSpan = styled.span `
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;
const StyledDiv3 = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt3 = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd5 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledA19 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledDd6 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledA20 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledSpan2 = styled.span `
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;
const StyledDiv4 = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt4 = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd7 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledP = styled.p `
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
  @media print {
    color: #000000;
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
    margin-bottom: 20px;
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
const StyledDd8 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledA21 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledSpan3 = styled.span `
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;
const StyledDiv5 = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt5 = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd9 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledP2 = styled.p `
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
  @media print {
    color: #000000;
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
    margin-bottom: 20px;
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
const StyledP3 = styled.p `
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 15px;
  @media print {
    color: #000000;
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
    margin-bottom: 20px;
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
const StyledDd10 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledUl2 = styled.ul `
  width: 100%;
  margin: 0;
  padding: 0;
`;
const StyledLi17 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA22 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi18 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA23 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi19 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA24 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi20 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA25 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi21 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA26 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi22 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA27 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi23 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA28 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi24 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA29 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi25 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA30 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi26 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA31 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi27 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA32 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi28 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA33 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi29 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA34 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi30 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA35 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi31 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA36 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi32 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA37 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi33 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA38 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi34 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA39 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi35 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA40 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi36 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA41 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledDiv6 = styled.div `
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;
const StyledDt6 = styled.dt `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  margin-bottom: 5px;
  font-weight: 700;
  @media (min-width: 40.0625em) {
    width: 30%;
  }
  border: 0;
`;
const StyledDd11 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  word-break: break-all;
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }
  border: 0;
`;
const StyledDd12 = styled.dd `
  margin: 0;
  @media (min-width: 40.0625em) {
    display: table-cell;
    padding-right: 20px;
  }
  @media (min-width: 40.0625em) {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #bfc1c3;
  }
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    padding-right: 0;
    text-align: right;
  }
  border: 0;
`;
const StyledUl3 = styled.ul `
  width: 100%;
  margin: 0;
  padding: 0;
`;
const StyledLi37 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA42 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi38 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA43 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi39 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA44 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi40 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA45 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi41 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA46 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi42 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA47 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi43 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA48 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi44 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA49 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi45 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA50 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi46 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA51 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi47 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA52 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi48 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA53 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi49 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA54 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi50 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA55 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi51 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA56 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi52 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA57 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi53 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA58 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi54 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA59 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi55 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA60 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi56 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA61 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi57 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA62 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi58 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA63 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi59 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA64 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi60 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA65 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi61 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA66 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi62 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA67 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const StyledLi63 = styled.li `
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  display: inline;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #bfc1c3;
  :last-child {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
`;
const StyledA68 = styled.a `
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media print {
    font-family: sans-serif;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
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
const constants = {
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target9: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target10: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target11: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target13: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target14: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target15: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target16: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target17: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target18: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target19: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target20: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target21: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target22: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target23: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target24: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target25: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target26: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target27: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target28: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target29: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target30: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target31: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target32: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target33: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target34: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target35: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target36: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target37: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target38: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target39: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target40: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target41: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target42: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target43: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target44: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target45: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target46: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target47: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target48: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target49: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target50: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target51: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target52: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target53: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target54: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target55: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target56: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target57: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target58: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target59: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target60: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target61: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target62: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target63: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target64: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target65: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target66: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target67: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target68: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const SummaryListExtreme = ({ href, rel, target, href2, rel2, target2, href3, rel3, target3, href4, rel4, target4, href5, rel5, target5, href6, rel6, target6, href7, rel7, target7, href8, rel8, target8, href9, rel9, target9, href10, rel10, target10, href11, rel11, target11, href12, rel12, target12, href13, rel13, target13, href14, rel14, target14, href15, rel15, target15, href16, rel16, target16, href17, rel17, target17, href18, rel18, target18, href19, rel19, target19, href20, rel20, target20, href21, rel21, target21, href22, rel22, target22, href23, rel23, target23, href24, rel24, target24, href25, rel25, target25, href26, rel26, target26, href27, rel27, target27, href28, rel28, target28, href29, rel29, target29, href30, rel30, target30, href31, rel31, target31, href32, rel32, target32, href33, rel33, target33, href34, rel34, target34, href35, rel35, target35, href36, rel36, target36, href37, rel37, target37, href38, rel38, target38, href39, rel39, target39, href40, rel40, target40, href41, rel41, target41, href42, rel42, target42, href43, rel43, target43, href44, rel44, target44, href45, rel45, target45, href46, rel46, target46, href47, rel47, target47, href48, rel48, target48, href49, rel49, target49, href50, rel50, target50, href51, rel51, target51, href52, rel52, target52, href53, rel53, target53, href54, rel54, target54, href55, rel55, target55, href56, rel56, target56, href57, rel57, target57, href58, rel58, target58, href59, rel59, target59, href60, rel60, target60, href61, rel61, target61, href62, rel62, target62, href63, rel63, target63, href64, rel64, target64, href65, rel65, target65, href66, rel66, target66, href67, rel67, target67, href68, rel68, target68 }) => (React.createElement(StyledDl, null,
    React.createElement(StyledDiv, null,
        React.createElement(StyledDt, null, "Name"),
        React.createElement(StyledDd, null, "Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley Zachary Usansky"),
        React.createElement(StyledDd2, null,
            React.createElement(StyledUl, null,
                React.createElement(StyledLi, null,
                    React.createElement(StyledA, { href: href, rel: rel, target: constants.target[target] },
                        " ",
                        "Buy")),
                React.createElement(StyledLi2, null,
                    React.createElement(StyledA2, { href: href2, rel: rel2, target: constants.target2[target2] },
                        " ",
                        "Use")),
                React.createElement(StyledLi3, null,
                    React.createElement(StyledA3, { href: href3, rel: rel3, target: constants.target3[target3] },
                        " ",
                        "Break")),
                React.createElement(StyledLi4, null,
                    React.createElement(StyledA4, { href: href4, rel: rel4, target: constants.target4[target4] },
                        " ",
                        "Fix")),
                React.createElement(StyledLi5, null,
                    React.createElement(StyledA5, { href: href5, rel: rel5, target: constants.target5[target5] },
                        " ",
                        "Trash")),
                React.createElement(StyledLi6, null,
                    React.createElement(StyledA6, { href: href6, rel: rel6, target: constants.target6[target6] },
                        " ",
                        "Change")),
                React.createElement(StyledLi7, null,
                    React.createElement(StyledA7, { href: href7, rel: rel7, target: constants.target7[target7] },
                        " ",
                        "Mail")),
                React.createElement(StyledLi8, null,
                    React.createElement(StyledA8, { href: href8, rel: rel8, target: constants.target8[target8] },
                        " ",
                        "Upgrade")),
                React.createElement(StyledLi9, null,
                    React.createElement(StyledA9, { href: href9, rel: rel9, target: constants.target9[target9] },
                        " ",
                        "Charge")),
                React.createElement(StyledLi10, null,
                    React.createElement(StyledA10, { href: href10, rel: rel10, target: constants.target10[target10] },
                        " ",
                        "Point")),
                React.createElement(StyledLi11, null,
                    React.createElement(StyledA11, { href: href11, rel: rel11, target: constants.target11[target11] },
                        " ",
                        "Coom")),
                React.createElement(StyledLi12, null,
                    React.createElement(StyledA12, { href: href12, rel: rel12, target: constants.target12[target12] },
                        " ",
                        "Press")),
                React.createElement(StyledLi13, null,
                    React.createElement(StyledA13, { href: href13, rel: rel13, target: constants.target13[target13] },
                        " ",
                        "Snap")),
                React.createElement(StyledLi14, null,
                    React.createElement(StyledA14, { href: href14, rel: rel14, target: constants.target14[target14] },
                        " ",
                        "Work")),
                React.createElement(StyledLi15, null,
                    React.createElement(StyledA15, { href: href15, rel: rel15, target: constants.target15[target15] },
                        " ",
                        "Quick")),
                React.createElement(StyledLi16, null,
                    React.createElement(StyledA16, { href: href16, rel: rel16, target: constants.target16[target16] },
                        " ",
                        "Erase"))))),
    React.createElement(StyledDiv2, null,
        React.createElement(StyledDt2, null, "Long website address"),
        React.createElement(StyledDd3, null,
            React.createElement(StyledA17, { href: href17, rel: rel17, target: constants.target17[target17] }, "https://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch")),
        React.createElement(StyledDd4, null,
            React.createElement(StyledA18, { href: href18, rel: rel18, target: constants.target18[target18] },
                "Change",
                React.createElement(StyledSpan, null, " long website address")))),
    React.createElement(StyledDiv3, null,
        React.createElement(StyledDt3, null, "Long email address"),
        React.createElement(StyledDd5, null,
            React.createElement(StyledA19, { href: href19, rel: rel19, target: constants.target19[target19] }, "webmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com")),
        React.createElement(StyledDd6, null,
            React.createElement(StyledA20, { href: href20, rel: rel20, target: constants.target20[target20] },
                "Change",
                React.createElement(StyledSpan2, null, " long email address")))),
    React.createElement(StyledDiv4, null,
        React.createElement(StyledDt4, null, "No wrapping allowed"),
        React.createElement(StyledDd7, null,
            React.createElement(StyledP, { style: { whiteSpace: "nowrap" } }, "michelle.longish.name@example.com")),
        React.createElement(StyledDd8, null,
            React.createElement(StyledA21, { href: href21, rel: rel21, target: constants.target21[target21] },
                "Change",
                React.createElement(StyledSpan3, null, " no wrapping allowed")))),
    React.createElement(StyledDiv5, null,
        React.createElement(StyledDt5, null, "Pneumonoultramicroscopicsilicovolcanoconiosis"),
        React.createElement(StyledDd9, null,
            React.createElement(StyledP2, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis consequat diam. Duis efficitur justo at congue iaculis. Quisque scelerisque ornare justo nec congue. Duis egestas felis nibh, eu cursus metus rutrum eget. In dictum lectus diam, dapibus ullamcorper risus gravida a. Vestibulum tempor mattis sapien, at auctor tellus dignissim non. Praesent dictum felis nec diam tempor, vel lobortis leo ultricies."),
            React.createElement(StyledP3, null, "Suspendisse potenti. Aliquam dictum eu ipsum sed facilisis. Maecenas hendrerit est eget ultrices venenatis. Nam ex nisl, venenatis eget molestie quis, hendrerit id tellus. Morbi et posuere ex, vel interdum sapien. Mauris ac mattis turpis, interdum eleifend erat. Morbi eget efficitur lectus. Sed suscipit laoreet ipsum et iaculis. Integer ornare ipsum quis aliquet scelerisque. Proin venenatis dictum suscipit. Nunc tristique, felis quis fermentum rhoncus, tortor augue egestas ipsum, non porttitor nulla odio vitae purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.")),
        React.createElement(StyledDd10, null,
            React.createElement(StyledUl2, null,
                React.createElement(StyledLi17, null,
                    React.createElement(StyledA22, { href: href22, rel: rel22, target: constants.target22[target22] },
                        " ",
                        "Write")),
                React.createElement(StyledLi18, null,
                    React.createElement(StyledA23, { href: href23, rel: rel23, target: constants.target23[target23] },
                        " ",
                        "Cut")),
                React.createElement(StyledLi19, null,
                    React.createElement(StyledA24, { href: href24, rel: rel24, target: constants.target24[target24] },
                        " ",
                        "Paste")),
                React.createElement(StyledLi20, null,
                    React.createElement(StyledA25, { href: href25, rel: rel25, target: constants.target25[target25] },
                        " ",
                        "Save")),
                React.createElement(StyledLi21, null,
                    React.createElement(StyledA26, { href: href26, rel: rel26, target: constants.target26[target26] },
                        " ",
                        "Load")),
                React.createElement(StyledLi22, null,
                    React.createElement(StyledA27, { href: href27, rel: rel27, target: constants.target27[target27] },
                        " ",
                        "Check")),
                React.createElement(StyledLi23, null,
                    React.createElement(StyledA28, { href: href28, rel: rel28, target: constants.target28[target28] },
                        " ",
                        "Quick")),
                React.createElement(StyledLi24, null,
                    React.createElement(StyledA29, { href: href29, rel: rel29, target: constants.target29[target29] },
                        " ",
                        "Rewrite")),
                React.createElement(StyledLi25, null,
                    React.createElement(StyledA30, { href: href30, rel: rel30, target: constants.target30[target30] },
                        " ",
                        "Plug")),
                React.createElement(StyledLi26, null,
                    React.createElement(StyledA31, { href: href31, rel: rel31, target: constants.target31[target31] },
                        " ",
                        "Play")),
                React.createElement(StyledLi27, null,
                    React.createElement(StyledA32, { href: href32, rel: rel32, target: constants.target32[target32] },
                        " ",
                        "Burn")),
                React.createElement(StyledLi28, null,
                    React.createElement(StyledA33, { href: href33, rel: rel33, target: constants.target33[target33] },
                        " ",
                        "Rip")),
                React.createElement(StyledLi29, null,
                    React.createElement(StyledA34, { href: href34, rel: rel34, target: constants.target34[target34] },
                        " ",
                        "Drag and drop")),
                React.createElement(StyledLi30, null,
                    React.createElement(StyledA35, { href: href35, rel: rel35, target: constants.target35[target35] },
                        " ",
                        "Zip")),
                React.createElement(StyledLi31, null,
                    React.createElement(StyledA36, { href: href36, rel: rel36, target: constants.target36[target36] },
                        " ",
                        "Unzip")),
                React.createElement(StyledLi32, null,
                    React.createElement(StyledA37, { href: href37, rel: rel37, target: constants.target37[target37] },
                        " ",
                        "Lock")),
                React.createElement(StyledLi33, null,
                    React.createElement(StyledA38, { href: href38, rel: rel38, target: constants.target38[target38] },
                        " ",
                        "Fill")),
                React.createElement(StyledLi34, null,
                    React.createElement(StyledA39, { href: href39, rel: rel39, target: constants.target39[target39] },
                        " ",
                        "Curl")),
                React.createElement(StyledLi35, null,
                    React.createElement(StyledA40, { href: href40, rel: rel40, target: constants.target40[target40] },
                        " ",
                        "Find")),
                React.createElement(StyledLi36, null,
                    React.createElement(StyledA41, { href: href41, rel: rel41, target: constants.target41[target41] },
                        " ",
                        "View"))))),
    React.createElement(StyledDiv6, null,
        React.createElement(StyledDt6, null, "Its vanished trees, the trees that had made way for Gatsby\u2019s house, Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in whispers to the last and greatest of all human dreams; for a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder."),
        React.createElement(StyledDd11, null, "The Great Gatsby"),
        React.createElement(StyledDd12, null,
            React.createElement(StyledUl3, null,
                React.createElement(StyledLi37, null,
                    React.createElement(StyledA42, { href: href42, rel: rel42, target: constants.target42[target42] },
                        " ",
                        "Code")),
                React.createElement(StyledLi38, null,
                    React.createElement(StyledA43, { href: href43, rel: rel43, target: constants.target43[target43] },
                        " ",
                        "Jam")),
                React.createElement(StyledLi39, null,
                    React.createElement(StyledA44, { href: href44, rel: rel44, target: constants.target44[target44] },
                        " ",
                        "Unlock")),
                React.createElement(StyledLi40, null,
                    React.createElement(StyledA45, { href: href45, rel: rel45, target: constants.target45[target45] },
                        " ",
                        "Surf")),
                React.createElement(StyledLi41, null,
                    React.createElement(StyledA46, { href: href46, rel: rel46, target: constants.target46[target46] },
                        " ",
                        "Scroll")),
                React.createElement(StyledLi42, null,
                    React.createElement(StyledA47, { href: href47, rel: rel47, target: constants.target47[target47] },
                        " ",
                        "Pose")),
                React.createElement(StyledLi43, null,
                    React.createElement(StyledA48, { href: href48, rel: rel48, target: constants.target48[target48] },
                        " ",
                        "Click")),
                React.createElement(StyledLi44, null,
                    React.createElement(StyledA49, { href: href49, rel: rel49, target: constants.target49[target49] },
                        " ",
                        "Cross")),
                React.createElement(StyledLi45, null,
                    React.createElement(StyledA50, { href: href50, rel: rel50, target: constants.target50[target50] },
                        " ",
                        "Crack")),
                React.createElement(StyledLi46, null,
                    React.createElement(StyledA51, { href: href51, rel: rel51, target: constants.target51[target51] },
                        " ",
                        "Twitch")),
                React.createElement(StyledLi47, null,
                    React.createElement(StyledA52, { href: href52, rel: rel52, target: constants.target52[target52] },
                        " ",
                        "Update")),
                React.createElement(StyledLi48, null,
                    React.createElement(StyledA53, { href: href53, rel: rel53, target: constants.target53[target53] },
                        " ",
                        "Name")),
                React.createElement(StyledLi49, null,
                    React.createElement(StyledA54, { href: href54, rel: rel54, target: constants.target54[target54] },
                        " ",
                        "Read")),
                React.createElement(StyledLi50, null,
                    React.createElement(StyledA55, { href: href55, rel: rel55, target: constants.target55[target55] },
                        " ",
                        "Tune")),
                React.createElement(StyledLi51, null,
                    React.createElement(StyledA56, { href: href56, rel: rel56, target: constants.target56[target56] },
                        " ",
                        "Print")),
                React.createElement(StyledLi52, null,
                    React.createElement(StyledA57, { href: href57, rel: rel57, target: constants.target57[target57] },
                        " ",
                        "Scan")),
                React.createElement(StyledLi53, null,
                    React.createElement(StyledA58, { href: href58, rel: rel58, target: constants.target58[target58] },
                        " ",
                        "Send")),
                React.createElement(StyledLi54, null,
                    React.createElement(StyledA59, { href: href59, rel: rel59, target: constants.target59[target59] },
                        " ",
                        "Fax")),
                React.createElement(StyledLi55, null,
                    React.createElement(StyledA60, { href: href60, rel: rel60, target: constants.target60[target60] },
                        " ",
                        "Rename")),
                React.createElement(StyledLi56, null,
                    React.createElement(StyledA61, { href: href61, rel: rel61, target: constants.target61[target61] },
                        " ",
                        "Touch")),
                React.createElement(StyledLi57, null,
                    React.createElement(StyledA62, { href: href62, rel: rel62, target: constants.target62[target62] },
                        " ",
                        "Bring")),
                React.createElement(StyledLi58, null,
                    React.createElement(StyledA63, { href: href63, rel: rel63, target: constants.target63[target63] },
                        " ",
                        "Pay")),
                React.createElement(StyledLi59, null,
                    React.createElement(StyledA64, { href: href64, rel: rel64, target: constants.target64[target64] },
                        " ",
                        "Watch")),
                React.createElement(StyledLi60, null,
                    React.createElement(StyledA65, { href: href65, rel: rel65, target: constants.target65[target65] },
                        " ",
                        "Turn")),
                React.createElement(StyledLi61, null,
                    React.createElement(StyledA66, { href: href66, rel: rel66, target: constants.target66[target66] },
                        " ",
                        "Leave")),
                React.createElement(StyledLi62, null,
                    React.createElement(StyledA67, { href: href67, rel: rel67, target: constants.target67[target67] },
                        " ",
                        "Stop")),
                React.createElement(StyledLi63, null,
                    React.createElement(StyledA68, { href: href68, rel: rel68, target: constants.target68[target68] },
                        " ",
                        "Format")))))));
SummaryListExtreme.props = [
    "href",
    "rel",
    "target",
    "href2",
    "rel2",
    "target2",
    "href3",
    "rel3",
    "target3",
    "href4",
    "rel4",
    "target4",
    "href5",
    "rel5",
    "target5",
    "href6",
    "rel6",
    "target6",
    "href7",
    "rel7",
    "target7",
    "href8",
    "rel8",
    "target8",
    "href9",
    "rel9",
    "target9",
    "href10",
    "rel10",
    "target10",
    "href11",
    "rel11",
    "target11",
    "href12",
    "rel12",
    "target12",
    "href13",
    "rel13",
    "target13",
    "href14",
    "rel14",
    "target14",
    "href15",
    "rel15",
    "target15",
    "href16",
    "rel16",
    "target16",
    "href17",
    "rel17",
    "target17",
    "href18",
    "rel18",
    "target18",
    "href19",
    "rel19",
    "target19",
    "href20",
    "rel20",
    "target20",
    "href21",
    "rel21",
    "target21",
    "href22",
    "rel22",
    "target22",
    "href23",
    "rel23",
    "target23",
    "href24",
    "rel24",
    "target24",
    "href25",
    "rel25",
    "target25",
    "href26",
    "rel26",
    "target26",
    "href27",
    "rel27",
    "target27",
    "href28",
    "rel28",
    "target28",
    "href29",
    "rel29",
    "target29",
    "href30",
    "rel30",
    "target30",
    "href31",
    "rel31",
    "target31",
    "href32",
    "rel32",
    "target32",
    "href33",
    "rel33",
    "target33",
    "href34",
    "rel34",
    "target34",
    "href35",
    "rel35",
    "target35",
    "href36",
    "rel36",
    "target36",
    "href37",
    "rel37",
    "target37",
    "href38",
    "rel38",
    "target38",
    "href39",
    "rel39",
    "target39",
    "href40",
    "rel40",
    "target40",
    "href41",
    "rel41",
    "target41",
    "href42",
    "rel42",
    "target42",
    "href43",
    "rel43",
    "target43",
    "href44",
    "rel44",
    "target44",
    "href45",
    "rel45",
    "target45",
    "href46",
    "rel46",
    "target46",
    "href47",
    "rel47",
    "target47",
    "href48",
    "rel48",
    "target48",
    "href49",
    "rel49",
    "target49",
    "href50",
    "rel50",
    "target50",
    "href51",
    "rel51",
    "target51",
    "href52",
    "rel52",
    "target52",
    "href53",
    "rel53",
    "target53",
    "href54",
    "rel54",
    "target54",
    "href55",
    "rel55",
    "target55",
    "href56",
    "rel56",
    "target56",
    "href57",
    "rel57",
    "target57",
    "href58",
    "rel58",
    "target58",
    "href59",
    "rel59",
    "target59",
    "href60",
    "rel60",
    "target60",
    "href61",
    "rel61",
    "target61",
    "href62",
    "rel62",
    "target62",
    "href63",
    "rel63",
    "target63",
    "href64",
    "rel64",
    "target64",
    "href65",
    "rel65",
    "target65",
    "href66",
    "rel66",
    "target66",
    "href67",
    "rel67",
    "target67",
    "href68",
    "rel68",
    "target68"
];
exports.default = SummaryListExtreme;
//# sourceMappingURL=SummaryListExtreme.js.map