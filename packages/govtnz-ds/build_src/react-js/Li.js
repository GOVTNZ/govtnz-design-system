import React from "react";

const Li = ({ children }) => (
  <li>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </li>
);
Li.props = ["children"];
export default Li;
