import * as React from "react";
import * as styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledDiv = styled.div`
  margin-top: 0px;
`;

const FormDivider = ({ children }: Props) => (
  <StyledDiv>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example Text</React.Fragment>
    )}
  </StyledDiv>
);

export default FormDivider;
