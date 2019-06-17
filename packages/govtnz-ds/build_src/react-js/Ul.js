import React from "react";

const Ul = ({ bulleted, children }) => (
  <ul className={`g-ul-list${bulleted ? " g-ul-list--bullet" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
