import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Subfooter = ({ children }: Props) => (
  <div className="g-subfooter">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example subfooter content </React.Fragment>
    )}
  </div>
);

export default Subfooter;
