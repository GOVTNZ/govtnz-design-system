import React from "react";

type Props = {
  spacing?: boolean;
  marginBottom0?: boolean;
  noBullet?: boolean;
  children?: React.ReactNode;
};

const Ul = ({ spacing, marginBottom0, noBullet, children }: Props) => (
  <ul
    className={`g-ul${spacing ? " g-ul--spacing" : ""}${
      marginBottom0 ? " g-ul--mb-0" : ""
    }${noBullet ? " g-ul--no-bullet" : ""}`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
