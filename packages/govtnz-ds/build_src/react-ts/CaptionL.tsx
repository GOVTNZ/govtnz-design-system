import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const CaptionL = ({ children }: Props) => (
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
