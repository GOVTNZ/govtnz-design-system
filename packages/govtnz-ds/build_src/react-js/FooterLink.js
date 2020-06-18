import React from "react";

const FooterLink = ({ href, rel, target, onClick, children }) => (
  <li className="g-footer-link">
    <a
      className="g-footer-link__a"
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
  </li>
);

export default FooterLink;
