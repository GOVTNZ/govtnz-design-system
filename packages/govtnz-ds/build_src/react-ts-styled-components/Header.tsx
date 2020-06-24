import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledHeader = styled.header`
  position: relative;
  background-color: g-theme-inverted-background-color;
  color: g-theme-inverted-color;
  fill: g-theme-inverted-color;
`;

const Header = ({ children }: Props) => (
  <StyledHeader role="banner">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example header content </React.Fragment>
    )}
  </StyledHeader>
);

export default Header;
