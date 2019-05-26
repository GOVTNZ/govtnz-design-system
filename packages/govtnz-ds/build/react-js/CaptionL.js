import React from "react";

const CaptionL = ({ children }) => (
  <span className="g-caption-l">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);
CaptionL.props = ["children"];
export default CaptionL;
