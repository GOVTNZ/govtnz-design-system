import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media (min-width: 40.0625em) {
    :after {
      content: "";
      display: block;
      clear: both;
    }
  }
  margin-top: 0px;
`;

const Radios = ({ inline, children }) => (
  <StyledDiv inline={inline}>
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Radio components</React.Fragment>
    )}{" "}
  </StyledDiv>
);

export default Radios;
