import React from "react";

const FormDivider = ({ children }) => (
  <div className="g-form-divider">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example Text</React.Fragment>
    )}
  </div>
);

export default FormDivider;
