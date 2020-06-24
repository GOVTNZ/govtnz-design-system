import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Ol = ({ children }: Props) => (
  <ol className="g-ol">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);

export default Ol;
