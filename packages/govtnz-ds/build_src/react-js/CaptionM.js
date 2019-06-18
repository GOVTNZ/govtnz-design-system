import React from "react";

const CaptionM = ({ children }) => (
  <span className="g-caption-m">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);

export default CaptionM;
