import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
`;

const Header = ({ children }) => (
  <StyledHeader role="banner">
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example header content </React.Fragment>
    )}{" "}
  </StyledHeader>
);

export default Header;
