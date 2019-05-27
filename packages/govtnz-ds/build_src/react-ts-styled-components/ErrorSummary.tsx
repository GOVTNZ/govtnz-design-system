import * as React from "react";
import * as styled from "styled-components";

type Props = {
  errorSummaryTitle?: string | undefined;
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const StyledDiv = styled.div`
  color: #0b0c0c;
  padding: 15px;
  margin-bottom: 30px;
  border: 4px solid #b10e1e;
  @media print {
    color: #000000;
  }
  @media (min-width: 40.0625em) {
    padding: 20px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 50px;
  }
  :focus {
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }
  @media (min-width: 40.0625em) {
    border: 5px solid #b10e1e;
  }
`;

const StyledH2 = styled.h2`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.11111;
  margin-top: 0;
  margin-bottom: 15px;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.5rem;
    line-height: 1.25;
  }
  @media print {
    font-size: 18pt;
    line-height: 1.15;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
`;

const StyledDiv2 = styled.div`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
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
`;

const StyledP = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 0;
  margin-bottom: 15px;
  @media (min-width: 40.0625em) {
    margin-bottom: 20px;
  }
`;

const StyledUl = styled.ul`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.625;
  color: #2a2a2a;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style-type: none;
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
    margin-bottom: 20px;
  }
  margin-top: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledA = styled.a`
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

const StyledLi2 = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
`;

const StyledA2 = styled.a`
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
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const ErrorSummary = ({
  errorSummaryTitle,
  href,
  rel,
  target,
  href2,
  rel2,
  target2
}: Props) => (
  <StyledDiv
    aria-labelledby={errorSummaryTitle}
    data-module="error-summary"
    role="alert"
    tabIndex={-1}
  >
    <StyledH2 id={errorSummaryTitle}>
      Message to alert the user to a problem goes here
    </StyledH2>
    <StyledDiv2>
      <StyledP>
        Optional description of the errors and how to correct them
      </StyledP>
      <StyledUl>
        <StyledLi>
          <StyledA href={href} rel={rel} target={constants.target[target]}>
            Descriptive link to the question with an error
          </StyledA>
        </StyledLi>
        <StyledLi2>
          <StyledA2 href={href2} rel={rel2} target={constants.target2[target2]}>
            Descriptive link to the question with an error
          </StyledA2>
        </StyledLi2>
      </StyledUl>
    </StyledDiv2>
  </StyledDiv>
);
ErrorSummary.props = [
  "errorSummaryTitle",
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2"
];
export default ErrorSummary;
