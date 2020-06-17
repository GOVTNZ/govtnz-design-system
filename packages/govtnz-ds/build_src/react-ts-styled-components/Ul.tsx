import React from "react";
import styled from "styled-components";

type Props = {
  bulleted?: boolean;
  children?: React.ReactNode;
};

const StyledUl = styled.ul`
  margin-top: 0px;
`;

const Ul = ({ bulleted, children }: Props) => (
  <StyledUl bulleted={bulleted}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledUl>
);

export default Ul;
