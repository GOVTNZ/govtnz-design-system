import React from "react";

const Header = ({ children }) => (
  <header className="g-header" role="banner">
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example header content </React.Fragment>
    )}{" "}
  </header>
);

export default Header;
