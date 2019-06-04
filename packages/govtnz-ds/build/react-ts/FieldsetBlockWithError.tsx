import * as React from "react";

type Props = {
  hintId?: string | undefined;
  errorId?: string | undefined;
  legend?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  children?: React.ReactNode;
};

const FieldsetBlockWithError = ({
  hintId,
  errorId,
  legend,
  hint,
  error,
  children
}: Props) => (
  <div className="g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error">
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
      <div className="g-fieldsetBlockWithError-hint" id={hintId}>
        {hint !== undefined ? hint : <React.Fragment>Hint text</React.Fragment>}
      </div>
      <div className="g-fieldsetBlockWithError-error-message" id={errorId}>
        <span className="g-fieldsetBlockWithError-visually-hidden">
          Error:{" "}
        </span>
        {error !== undefined ? (
          error
        ) : (
          <React.Fragment>Error text</React.Fragment>
        )}
      </div>
      <div className="g-fieldsetBlockWithError-children">
        {children !== undefined ? (
          children
        ) : (
          <React.Fragment>Fieldset contents</React.Fragment>
        )}
      </div>
    </fieldset>
  </div>
);
FieldsetBlockWithError.props = [
  "hintId",
  "errorId",
  "legend",
  "hint",
  "error",
  "children"
];
export default FieldsetBlockWithError;
