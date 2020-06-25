import React from "react";

const Ul = ({ spacing, children }) => (
  <ul className={`g-ul${spacing ? " g-ul--spacing" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
