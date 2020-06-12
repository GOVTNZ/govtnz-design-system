import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const FooterWrapper = ({ children }) => (
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
