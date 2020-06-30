import React from "react";

type Props = {
  children?: React.ReactNode;
};

const CaptionM = ({ children }: Props) => (
  <span className="g-caption g-caption-m">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);

export default CaptionM;
