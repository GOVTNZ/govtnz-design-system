import React from "react";

type Props = {
  children?: React.ReactNode;
};

const FormDivider = ({ children }: Props) => (
  <div className="g-form-divider">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Contents...</React.Fragment>
    )}
  </div>
);

export default FormDivider;
