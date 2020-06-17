import React from "react";

const Ul = ({ bulleted, children }) => (
  <ul className={`g-list${bulleted ? " g-list--bullet" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
