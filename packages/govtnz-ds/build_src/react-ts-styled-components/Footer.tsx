import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledFooter = styled.footer`
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
`;

const Footer = ({ children }: Props) => (
  <StyledFooter role="contentinfo">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example footer content </React.Fragment>
    )}
  </StyledFooter>
);

export default Footer;
