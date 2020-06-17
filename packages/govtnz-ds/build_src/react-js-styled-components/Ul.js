import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin-top: 0px;
`;

const Ul = ({ bulleted, children }) => (
  <StyledUl bulleted={bulleted}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledUl>
);

export default Ul;
