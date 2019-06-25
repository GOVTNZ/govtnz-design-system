import React from "react";
import styled from "styled-components";

const StyledOl = styled.ol`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.25rem;
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
    margin-bottom: 1rem;
  }
  margin-top: 10px;
  ${props =>
    props.numbered &&
    styled.css`
      padding-left: 20px;
      list-style-type: decimal;
    `}
  margin-top: 0px;
  margin-top: 0.5rem;
`;

const Ol = ({ numbered, children }) => (
  <StyledOl numbered={numbered}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledOl>
);

export default Ol;
