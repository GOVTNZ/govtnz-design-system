import React from "react";
import styled from "styled-components";

const StyledOl = styled.ol`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625;
  color: g-theme-color;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 20px;
  list-style-type: decimal;
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
    color: g-theme-print-color;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 1rem;
  }
  list-style-type: lower-alpha;
  margin-top: 10px;
  margin-top: 0px;
  margin-top: 0.5rem;
`;

const Ol = ({ children }) => (
  <StyledOl>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledOl>
);

export default Ol;
