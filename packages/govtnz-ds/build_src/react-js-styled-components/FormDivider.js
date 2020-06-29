import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-formdivider-color;
  width: 40px;
  margin-bottom: 10px;
  text-align: center;
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
  margin-top: 0px;
`;

const FormDivider = ({ children }) => (
  <StyledDiv>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Contents...</React.Fragment>
    )}
  </StyledDiv>
);

export default FormDivider;
