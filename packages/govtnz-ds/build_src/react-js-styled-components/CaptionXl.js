import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  margin-top: 0px;
`;

const CaptionXl = ({ children }) => (
  <StyledSpan>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledSpan>
);

export default CaptionXl;
