import React from "react";

const FormDivider = ({ children }) => (
  <div className="g-radios-form-divider">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example Text</React.Fragment>
    )}
  </div>
);
FormDivider.props = ["children"];
export default FormDivider;
