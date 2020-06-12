import React from "react";

type Props = {
  inline?: boolean;
  children?: React.ReactNode;
};

const Radios = ({ inline, children }: Props) => (
  <div className={`g-radios${inline ? " g-radios--inline" : ""}`}>
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Radio components</React.Fragment>
    )}{" "}
  </div>
);

export default Radios;
