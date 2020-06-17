import React from "react";

const Subfooter = ({ children }) => (
  <div className="g-subfooter">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment> Example subfooter content </React.Fragment>
    )}
  </div>
);

export default Subfooter;
