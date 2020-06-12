import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Footer = ({ children }: Props) => (
  <footer className="g-footer" role="contentinfo">
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example footer content </React.Fragment>
    )}{" "}
  </footer>
);

export default Footer;
