import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 0px;
`;

const FormDivider = ({ children }) => (
  <StyledDiv>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example Text</React.Fragment>
    )}
  </StyledDiv>
);

export default FormDivider;
