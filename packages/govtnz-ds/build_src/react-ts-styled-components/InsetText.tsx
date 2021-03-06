import React from "react";
import styled from "styled-components";

type Props = {};

const StyledDiv = styled.div`
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: g-theme-color;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  clear: both;
  border-left: 8px solid g-theme-inset-border-color;
  background-color: g-theme-inset-background-color;
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
    margin-top: 30px;
  }
  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
  margin-top: 0px;
`;

const InsetText = ({}: Props) => (
  <StyledDiv>
    It can take up to 8 weeks to register a lasting power of attorney if there
    are no mistakes in the application.
  </StyledDiv>
);

export default InsetText;
