import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-bottom: 5px;
  color: #6f777b;
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
    margin-bottom: 0;
  }
`;

const CaptionL = ({ children }) => (
  <StyledSpan>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledSpan>
);

export default CaptionL;
