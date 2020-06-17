import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledDiv = styled.div`
  background-color: #2a2a2a;
  color: #ffffff;
  fill: #ffffff;
  min-height: 146px;
  @media only screen and (min-width: 48em) {
    min-height: 104px;
  }
`;

const Subfooter = ({ children }: Props) => (
  <StyledDiv>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example subfooter content </React.Fragment>
    )}
  </StyledDiv>
);

export default Subfooter;
