import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
  border-collapse: collapse;
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
  font-size: 0.875rem !important;
  line-height: 1.14286 !important;
  @media (min-width: 40.0625em) {
    font-size: 1rem !important;
    line-height: 1.25 !important;
  }
  @media print {
    font-size: 14pt !important;
    line-height: 1.2 !important;
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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

const StyledA9 = styled.a`
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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

const StyledA10 = styled.a`
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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

const StyledA11 = styled.a`
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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

const StyledA12 = styled.a`
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
  @media print {
    ::after {
      content: " (" attr(href) ")";
      font-size: 90%;
      word-wrap: break-word;
    }
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
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const CustomTable = ({
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
  target8,
  href9,
  rel9,
  target9,
  href10,
  rel10,
  target10,
  href11,
  rel11,
  target11,
  href12,
  rel12,
  target12
}) => (
  <div>
    <StyledTable>
      <thead>
        <tr>Who is making the request Form</tr>
      </thead>
      <tbody>
        <tr>
          An individual
          <StyledA href={href} rel={rel} target={constants.target[target]}>
            Form V888
          </StyledA>
        </tr>
        <tr>
          A company
          <StyledA2 href={href2} rel={rel2} target={constants.target2[target2]}>
            Form V8882
          </StyledA2>
        </tr>
        <tr>
          A company that issues parking or trespass charge notices
          <StyledA3 href={href3} rel={rel3} target={constants.target3[target3]}>
            Form V8883
          </StyledA3>
        </tr>
      </tbody>
    </StyledTable>
    <thead>
      <tr>Who is making the request Form</tr>
    </thead>
    <tr>Who is making the request Form</tr>
    Who is making the request Form
    <tbody>
      <tr>
        An individual
        <StyledA4 href={href4} rel={rel4} target={constants.target4[target4]}>
          Form V888
        </StyledA4>
      </tr>
      <tr>
        A company
        <StyledA5 href={href5} rel={rel5} target={constants.target5[target5]}>
          Form V8882
        </StyledA5>
      </tr>
      <tr>
        A company that issues parking or trespass charge notices
        <StyledA6 href={href6} rel={rel6} target={constants.target6[target6]}>
          Form V8883
        </StyledA6>
      </tr>
    </tbody>
    <tr>
      An individual
      <StyledA7 href={href7} rel={rel7} target={constants.target7[target7]}>
        Form V888
      </StyledA7>
    </tr>
    An individual
    <StyledA8 href={href8} rel={rel8} target={constants.target8[target8]}>
      Form V888
    </StyledA8>
    <tr>
      A company
      <StyledA9 href={href9} rel={rel9} target={constants.target9[target9]}>
        Form V8882
      </StyledA9>
    </tr>
    A company
    <StyledA10 href={href10} rel={rel10} target={constants.target10[target10]}>
      Form V8882
    </StyledA10>
    <tr>
      A company that issues parking or trespass charge notices
      <StyledA11
        href={href11}
        rel={rel11}
        target={constants.target11[target11]}
      >
        Form V8883
      </StyledA11>
    </tr>
    A company that issues parking or trespass charge notices
    <StyledA12 href={href12} rel={rel12} target={constants.target12[target12]}>
      Form V8883
    </StyledA12>
  </div>
);

export default CustomTable;
