import React from "react";

const Ol = ({ numbered, children }) => (
  <ol className={`g-list${numbered ? " g-list--number" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);

export default Ol;
