import React from "react";

const Ol = ({ children }) => (
  <ol className="g-ol">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);

export default Ol;
