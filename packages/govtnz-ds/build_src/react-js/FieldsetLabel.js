import React from "react";

const FieldsetLabel = ({ hintId, hint }) => (
  <div className="g-fieldsetLabel-hint" id={hintId}>
    {hint !== undefined ? hint : <React.Fragment>Hint text</React.Fragment>}
  </div>
);
FieldsetLabel.props = ["hintId", "hint"];
export default FieldsetLabel;
