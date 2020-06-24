import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
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
  list-style-type: disc;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
    margin-bottom: 1rem;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
    color: g-theme-print-color;
  }
  margin-top: 10px;
  margin-top: 0px;
  margin-top: 0.5rem;
`;

const Ul = ({ spacing, children }) => (
  <StyledUl spacing={spacing}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledUl>
);

export default Ul;
