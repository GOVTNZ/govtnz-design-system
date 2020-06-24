import React from 'react';

const Ul = ({ bulleted, spacing, children }) => (
  <ul
    className={`g-list${bulleted ? " g-list--bullet" : ""}${
      spacing ? " g-list--spacing" : ""
    }`}
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ul>
);

export default Ul;
