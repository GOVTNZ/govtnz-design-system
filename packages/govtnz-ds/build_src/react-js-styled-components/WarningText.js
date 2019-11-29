import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 0px;
`;

const StyledSpan = styled.span`
  margin-top: 0px;
`;

const StyledStrong = styled.strong`
  margin-top: 0px;
`;

const StyledSpan2 = styled.span`
  margin-top: 0px;
`;

const WarningText = ({}) => (
  <StyledDiv>
    <StyledSpan aria-hidden="true">!</StyledSpan>
    <StyledStrong>
      <StyledSpan2>Warning</StyledSpan2>
      You can be fined up to $5,000 if you don’t register.
    </StyledStrong>
  </StyledDiv>
);

export default WarningText;
