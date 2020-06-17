import React from "react";

const Fieldset = ({ hintId, children }) => (
  <div className="g-form-group">
    <fieldset aria-describedby={hintId} className="g-fieldset">
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment>Legend and other fieldset contents...</React.Fragment>
      )}
    </fieldset>
  </div>
);

export default Fieldset;
