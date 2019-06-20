import * as React from "react";
import * as styled from "styled-components";

type Props = {
  inline?: boolean | undefined;
  children?: React.ReactNode;
};

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

const Radios = ({ inline, children }: Props) => (
  <StyledDiv inline={inline}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Radio components</React.Fragment>
    )}
  </StyledDiv>
);

export default Radios;
