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

export default Li;
