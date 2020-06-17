import React from "react";

const FooterWrapper = ({ children }) => (
  <footer className="g-footer-wrapper">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Content...</React.Fragment>
    )}
  </footer>
);

export default FooterWrapper;
