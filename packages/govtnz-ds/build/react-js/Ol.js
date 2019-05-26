import React from "react";

const Ol = ({ numbered, children }) => (
  <ol className={`g-ol-list${numbered ? " g-ol-list--number" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);
Ol.props = ["numbered", "children"];
export default Ol;
