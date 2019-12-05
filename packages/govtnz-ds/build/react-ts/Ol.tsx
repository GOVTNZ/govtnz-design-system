import * as React from "react";

type Props = {
  numbered?: boolean;
  children?: React.ReactNode;
};

const Ol = ({ numbered, children }: Props) => (
  <ol className={`g-ol-list${numbered ? " g-ol-list--number" : ""}`}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </ol>
);

export default Ol;
