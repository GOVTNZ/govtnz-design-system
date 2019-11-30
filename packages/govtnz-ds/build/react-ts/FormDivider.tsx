import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const FormDivider = ({ children }: Props) => (
  <div className="g-form-divider">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example Text</React.Fragment>
    )}
  </div>
);

export default FormDivider;
