import React from "react";
import styled from "styled-components";

const StyledDl = styled.dl`
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

const StyledDiv = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt = styled.dt`
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

const StyledDd = styled.dd`
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

const StyledDd2 = styled.dd`
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

const StyledA = styled.a`
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

const StyledSpan = styled.span`
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

const StyledDiv2 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt2 = styled.dt`
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

const StyledDd3 = styled.dd`
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

const StyledDd4 = styled.dd`
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

const StyledA2 = styled.a`
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

const StyledSpan2 = styled.span`
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

const StyledDiv3 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt3 = styled.dt`
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

const StyledDd5 = styled.dd`
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

const StyledDd6 = styled.dd`
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

const StyledA3 = styled.a`
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

const StyledSpan3 = styled.span`
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

const StyledDiv4 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt4 = styled.dt`
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

const StyledDd7 = styled.dd`
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

const StyledDd8 = styled.dd`
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

const StyledA4 = styled.a`
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

const StyledSpan4 = styled.span`
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

const StyledDiv5 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt5 = styled.dt`
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

const StyledDd9 = styled.dd`
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

const StyledDd10 = styled.dd`
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

const StyledA5 = styled.a`
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

const StyledSpan5 = styled.span`
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

const StyledDiv6 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt6 = styled.dt`
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

const StyledDd11 = styled.dd`
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

const StyledDd12 = styled.dd`
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

const StyledA6 = styled.a`
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

const StyledSpan6 = styled.span`
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

const StyledDiv7 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt7 = styled.dt`
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

const StyledDd13 = styled.dd`
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

const StyledP = styled.p`
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

const StyledDd14 = styled.dd`
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

const StyledA7 = styled.a`
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

const StyledSpan7 = styled.span`
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

const StyledDiv8 = styled.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid #bfc1c3;
  }
  @media (min-width: 40.0625em) {
    display: table-row;
  }
  border: 0;
`;

const StyledDt8 = styled.dt`
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

const StyledDd15 = styled.dd`
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

const StyledP2 = styled.p`
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

const StyledP3 = styled.p`
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

const StyledDd16 = styled.dd`
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

const StyledA8 = styled.a`
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

const StyledSpan8 = styled.span`
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

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SummaryListCheckYourAnswers = ({
  href,
  rel,
  target,
  href2,
  rel2,
  target2,
  href3,
  rel3,
  target3,
  href4,
  rel4,
  target4,
  href5,
  rel5,
  target5,
  href6,
  rel6,
  target6,
  href7,
  rel7,
  target7,
  href8,
  rel8,
  target8
}) => (
  <StyledDl>
    <StyledDiv>
      <StyledDt>Name</StyledDt>
      <StyledDd>Sarah Philips</StyledDd>
      <StyledDd2>
        <StyledA href={href} rel={rel} target={constants.target[target]}>
          Change<StyledSpan> name</StyledSpan>
        </StyledA>
      </StyledDd2>
    </StyledDiv>
    <StyledDiv2>
      <StyledDt2>Date of birth</StyledDt2>
      <StyledDd3>5 January 1978</StyledDd3>
      <StyledDd4>
        <StyledA2 href={href2} rel={rel2} target={constants.target2[target2]}>
          Change<StyledSpan2> date of birth</StyledSpan2>
        </StyledA2>
      </StyledDd4>
    </StyledDiv2>
    <StyledDiv3>
      <StyledDt3>Contact information</StyledDt3>
      <StyledDd5>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </StyledDd5>
      <StyledDd6>
        <StyledA3 href={href3} rel={rel3} target={constants.target3[target3]}>
          Change<StyledSpan3> contact information</StyledSpan3>
        </StyledA3>
      </StyledDd6>
    </StyledDiv3>
    <StyledDiv4>
      <StyledDt4>Contact details</StyledDt4>
      <StyledDd7>
        07700 900457
        <br />
        sarah.phillips@example.com
      </StyledDd7>
      <StyledDd8>
        <StyledA4 href={href4} rel={rel4} target={constants.target4[target4]}>
          Change<StyledSpan4> contact details</StyledSpan4>
        </StyledA4>
      </StyledDd8>
    </StyledDiv4>
    <StyledDiv5>
      <StyledDt5>Previous application number</StyledDt5>
      <StyledDd9>502135326</StyledDd9>
      <StyledDd10>
        <StyledA5 href={href5} rel={rel5} target={constants.target5[target5]}>
          Change<StyledSpan5>previous application number</StyledSpan5>
        </StyledA5>
      </StyledDd10>
    </StyledDiv5>
    <StyledDiv6>
      <StyledDt6>Licence type</StyledDt6>
      <StyledDd11>For personal use</StyledDd11>
      <StyledDd12>
        <StyledA6 href={href6} rel={rel6} target={constants.target6[target6]}>
          Change<StyledSpan6> licence type</StyledSpan6>
        </StyledA6>
      </StyledDd12>
    </StyledDiv6>
    <StyledDiv7>
      <StyledDt7>Home address</StyledDt7>
      <StyledDd13>
        <StyledP>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </StyledP>
      </StyledDd13>
      <StyledDd14>
        <StyledA7 href={href7} rel={rel7} target={constants.target7[target7]}>
          Change<StyledSpan7> home address</StyledSpan7>
        </StyledA7>
      </StyledDd14>
    </StyledDiv7>
    <StyledDiv8>
      <StyledDt8>Licence period</StyledDt8>
      <StyledDd15>
        <StyledP2>
          This is a longer paragraph of text provided by the user to provide
          additional information.
        </StyledP2>
        <StyledP3>
          This is a second paragraph of text provided by the user.
        </StyledP3>
      </StyledDd15>
      <StyledDd16>
        <StyledA8 href={href8} rel={rel8} target={constants.target8[target8]}>
          Change<StyledSpan8> licence period</StyledSpan8>
        </StyledA8>
      </StyledDd16>
    </StyledDiv8>
  </StyledDl>
);
SummaryListCheckYourAnswers.props = [
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
  "target8"
];
export default SummaryListCheckYourAnswers;
