import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <header className="g-header" role="banner">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example header content </React.Fragment>
    )}
  </header>
);

export default Header;
