import * as React from "react";

type Props = {
  hintId?: string | undefined;
  legend?: React.ReactNode;
  hint?: React.ReactNode;
  children?: React.ReactNode;
};

const FieldsetBlock = ({ hintId, legend, hint, children }: Props) => (
  <div className="g-fieldsetBlock-form-group">
    <fieldset aria-describedby={hintId} className="g-fieldset">
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
