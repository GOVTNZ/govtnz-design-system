import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledFooter = styled.footer`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const FooterWrapper = ({ children }: Props) => (
  <StyledFooter>
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Content...</React.Fragment>
    )}{" "}
  </StyledFooter>
);

export default FooterWrapper;
