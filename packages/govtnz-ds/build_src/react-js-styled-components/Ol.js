import React from "react";
import styled from "styled-components";

const StyledOl = styled.ol`
  margin-top: 0px;
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
