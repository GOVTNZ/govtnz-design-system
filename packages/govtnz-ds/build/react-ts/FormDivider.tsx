import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const FormDivider = ({ children }: Props) => (
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
