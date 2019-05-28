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

const StyledUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
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

const StyledLi2 = styled.li`
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

const StyledUl2 = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledLi3 = styled.li`
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

const StyledLi4 = styled.li`
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

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SummaryList = ({
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
  target5
}) => (
  <StyledDl>
    <StyledDiv>
      <StyledDt>Name</StyledDt>
      <StyledDd>Firstname Lastname</StyledDd>
      <StyledDd2>
        <StyledUl>
          <StyledLi>
            <StyledA href={href} rel={rel} target={constants.target[target]}>
              Edit<StyledSpan> name</StyledSpan>
            </StyledA>
          </StyledLi>
          <StyledLi2>
            <StyledA2
              href={href2}
              rel={rel2}
              target={constants.target2[target2]}
            >
              Delete<StyledSpan2> name</StyledSpan2>
            </StyledA2>
          </StyledLi2>
        </StyledUl>
      </StyledDd2>
    </StyledDiv>
    <StyledDiv2>
      <StyledDt2>Date of birth</StyledDt2>
      <StyledDd3>13/08/1980</StyledDd3>
      <StyledDd4>
        <StyledA3 href={href3} rel={rel3} target={constants.target3[target3]}>
          Change<StyledSpan3> date of birth</StyledSpan3>
        </StyledA3>
      </StyledDd4>
    </StyledDiv2>
    <StyledDiv3>
      <StyledDt3>Contact information</StyledDt3>
      <StyledDd5>
        <StyledP>email@email.com</StyledP>
        <StyledP2>
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </StyledP2>
      </StyledDd5>
      <StyledDd6>
        <StyledUl2>
          <StyledLi3>
            <StyledA4
              href={href4}
              rel={rel4}
              target={constants.target4[target4]}
            >
              Edit<StyledSpan4> contact information</StyledSpan4>
            </StyledA4>
          </StyledLi3>
          <StyledLi4>
            <StyledA5
              href={href5}
              rel={rel5}
              target={constants.target5[target5]}
            >
              Change<StyledSpan5>contact information</StyledSpan5>
            </StyledA5>
          </StyledLi4>
        </StyledUl2>
      </StyledDd6>
    </StyledDiv3>
  </StyledDl>
);
SummaryList.props = [
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
  "target5"
];
export default SummaryList;
