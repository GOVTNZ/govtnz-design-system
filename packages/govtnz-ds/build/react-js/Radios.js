import React from "react";

const Radios = ({ inline, children }) => (
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
