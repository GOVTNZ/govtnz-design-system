import * as React from "react";
import * as styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledSpan = styled.span`
  margin-top: 0px;
`;

const CaptionL = ({ children }: Props) => (
  <StyledSpan>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledSpan>
);

export default CaptionL;
