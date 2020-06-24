import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledFooter = styled.footer`
  background-color: g-theme-inverted-background-color;
  color: g-theme-inverted-color;
  fill: g-theme-inverted-color;
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
