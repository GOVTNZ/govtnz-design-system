import React from "react";

const Footer = ({ children }) => (
  <footer className="g-footer" role="contentinfo">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example footer content </React.Fragment>
    )}
  </footer>
);

export default Footer;
