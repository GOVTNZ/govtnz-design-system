import React from "react";

const Ul = ({ spacing, marginBottom0, noBullet, children }) => (
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
