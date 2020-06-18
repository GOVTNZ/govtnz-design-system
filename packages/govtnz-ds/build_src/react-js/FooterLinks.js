import React from "react";

const FooterLinks = ({ children }) => (
  <ul className="g-footer-links">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>example link list content</React.Fragment>
    )}
  </ul>
);

export default FooterLinks;
