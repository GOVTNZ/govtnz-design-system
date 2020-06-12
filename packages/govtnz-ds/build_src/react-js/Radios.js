import React from "react";

const Radios = ({ inline, big, children }) => (
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
