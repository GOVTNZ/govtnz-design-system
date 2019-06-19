import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin-bottom: 5px;
  margin-bottom: 0;
  @media (min-width: 40.0625em) {
    margin-bottom: 5px;
  }
  margin-top: 0px;
`;

const Li = ({ children }) => (
  <StyledLi>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledLi>
);

export default Li;
