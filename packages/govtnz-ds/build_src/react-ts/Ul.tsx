import React from "react";

type Props = {
  spacing?: boolean;
  children?: React.ReactNode;
};

const Ul = ({ spacing, children }: Props) => (
  <ul className={`g-ul${spacing ? " g-ul--spacing" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
