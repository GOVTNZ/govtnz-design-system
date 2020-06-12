import React from "react";

type Props = {
  inline?: boolean;
  big?: boolean;
  children?: React.ReactNode;
};

const Radios = ({ inline, big, children }: Props) => (
  <div
    className={`g-radios${inline ? " g-radios--inline" : ""}${
      big ? " g-radios--big" : ""
    }`}
  >
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Radio components</React.Fragment>
    )}{" "}
  </div>
);

export default Radios;
