import React from 'react';

type Props = {
  bulleted?: boolean;
  spacing?: boolean;
  children?: React.ReactNode;
};

const Ul = ({ bulleted, spacing, children }: Props) => (
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
