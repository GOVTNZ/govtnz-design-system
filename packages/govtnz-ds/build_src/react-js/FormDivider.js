import React from "react";

const FormDivider = ({ children }) => (
  <div className="g-form-divider">
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Contents...</React.Fragment>
    )}{" "}
  </div>
);

export default FormDivider;
