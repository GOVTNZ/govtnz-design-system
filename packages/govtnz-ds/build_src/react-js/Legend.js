import React from "react";

const Legend = ({ children }) => (
  <legend className="g-fieldset__legend">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Legend text</React.Fragment>
    )}
  </legend>
);
Legend.props = ["children"];
export default Legend;
