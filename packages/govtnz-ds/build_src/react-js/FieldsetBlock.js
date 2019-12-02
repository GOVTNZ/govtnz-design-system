import React from "react";

const FieldsetBlock = ({
  hintId,
  errorId,
  legend,
  hint,
  errorId2,
  error,
  children
}) => (
  <div className="g-fieldsetBlock-form-group">
    <fieldset
      aria-describedby={
        hintId !== undefined || errorId !== undefined
          ? `${hintId ? hintId : ""}${errorId ? " " + errorId : ""}`
          : undefined
      }
      className="g-fieldset"
    >
      <legend className="g-fieldset__legend">
        {legend !== undefined ? (
          legend
        ) : (
          <React.Fragment>Legend text</React.Fragment>
        )}
      </legend>
      {hintId !== undefined ? (
        <React.Fragment>
          <div className="g-fieldsetBlock-hint" id={hintId}>
            {hint !== undefined ? (
              hint
            ) : (
              <React.Fragment>Hint text</React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
      {errorId2 !== undefined ? (
        <React.Fragment>
          <div className="g-fieldsetBlock-error-message" id={errorId}>
            <span className="g-fieldsetBlock-visually-hidden">Error:</span>
            {error !== undefined ? (
              error
            ) : (
              <React.Fragment>Error text</React.Fragment>
            )}
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
      <div>
        {children !== undefined ? (
          children
        ) : (
          <React.Fragment>Fieldset contents</React.Fragment>
        )}
      </div>
    </fieldset>
  </div>
);

export default FieldsetBlock;
