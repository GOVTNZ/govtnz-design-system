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

export default Legend;
