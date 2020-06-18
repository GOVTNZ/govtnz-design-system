import React from "react";

const FooterLink = ({ href, rel, target, onClick, children }) => (
  <a
    className="g-footer-link"
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example header content </React.Fragment>
    )}
  </a>
);

export default FooterLink;
