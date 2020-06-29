import React from "react";

type Props = {
  children?: React.ReactNode;
};

const FooterLinks = ({ children }: Props) => (
  <ul className="g-footer-links">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>example link list content</React.Fragment>
    )}
  </ul>
);

export default FooterLinks;
