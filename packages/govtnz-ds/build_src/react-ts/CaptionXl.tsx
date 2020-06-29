import React from "react";

type Props = {
  children?: React.ReactNode;
};

const CaptionXl = ({ children }: Props) => (
  <span className="g-caption-xl">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);

export default CaptionXl;
