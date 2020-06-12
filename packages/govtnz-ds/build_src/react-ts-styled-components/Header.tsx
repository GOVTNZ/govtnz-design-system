import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledHeader = styled.header`
  position: relative;
  background-color: #363636;
  color: #ffffff;
  fill: #ffffff;
`;

const Header = ({ children }: Props) => (
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
