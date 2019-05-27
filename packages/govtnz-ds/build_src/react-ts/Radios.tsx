import * as React from "react";

type Props = {
  inline?: boolean | undefined;
  children?: React.ReactNode;
};

const Radios = ({ inline, children }: Props) => (
  <div className={`g-radios${inline ? " g-radios--inline" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Radio components</React.Fragment>
    )}
  </div>
);
Radios.props = ["inline", "children"];
export default Radios;
