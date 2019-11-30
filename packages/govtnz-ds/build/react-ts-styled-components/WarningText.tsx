import * as React from "react";
import * as styled from "styled-components";

type Props = {};

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

const WarningText = ({}: Props) => (
  <StyledDiv>
    <StyledSpan aria-hidden="true">!</StyledSpan>
    <StyledStrong>
      <StyledSpan2>Warning</StyledSpan2>
      You can be fined up to $5,000 if you don’t register.
    </StyledStrong>
  </StyledDiv>
);

export default WarningText;
