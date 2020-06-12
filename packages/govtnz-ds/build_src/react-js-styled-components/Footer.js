import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
`;

const Footer = ({ children }) => (
  <StyledFooter role="contentinfo">
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example footer content </React.Fragment>
    )}{" "}
  </StyledFooter>
);

export default Footer;
