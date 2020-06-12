import React from "react";

type Props = {
  bulleted?: boolean;
  children?: React.ReactNode;
};

const Ul = ({ bulleted, children }: Props) => (
  <ul className={`g-list${bulleted ? " g-list--bullet" : ""}`}>
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}{" "}
  </ul>
);

export default Ul;
