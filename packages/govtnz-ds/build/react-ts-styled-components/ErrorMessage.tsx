import * as React from "react";
import * as styled from "styled-components";

type Props = {};

const StyledSpan = styled.span`
  margin-top: 0px;
`;

const ErrorMessage = ({}: Props) => (
  <StyledSpan>Error message about full name goes here</StyledSpan>
);

export default ErrorMessage;
