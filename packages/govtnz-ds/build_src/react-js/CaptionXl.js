import React from "react";

const CaptionXl = ({ children }) => (
  <span className="g-caption g-caption-xl">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);

export default CaptionXl;
