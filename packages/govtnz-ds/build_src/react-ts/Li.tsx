import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const Li = ({ children }: Props) => (
  <li>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </li>
);
Li.props = ["children"];
export default Li;
