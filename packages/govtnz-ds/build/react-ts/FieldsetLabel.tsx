import * as React from "react";

type Props = {
  hintId?: string | undefined;
  hint?: React.ReactNode;
};

const FieldsetLabel = ({ hintId, hint }: Props) => (
  <div className="g-fieldsetLabel-hint" id={hintId}>
    {hint !== undefined ? hint : <React.Fragment>Hint text</React.Fragment>}
  </div>
);

export default FieldsetLabel;
