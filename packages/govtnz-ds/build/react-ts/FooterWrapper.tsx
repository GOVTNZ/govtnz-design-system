import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const FooterWrapper = ({ children }: Props) => (
  <footer className="g-footer-wrapper">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Content...</React.Fragment>
    )}
  </footer>
);

export default FooterWrapper;
