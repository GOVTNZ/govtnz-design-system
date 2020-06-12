import React from "react";

type Props = {
  numbered?: boolean;
  children?: React.ReactNode;
};

const Ol = ({ numbered, children }: Props) => (
  <ol className={`g-list${numbered ? " g-list--number" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);

export default Ol;
