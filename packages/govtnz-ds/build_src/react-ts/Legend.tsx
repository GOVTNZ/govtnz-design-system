import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const Legend = ({ children }: Props) => (
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
