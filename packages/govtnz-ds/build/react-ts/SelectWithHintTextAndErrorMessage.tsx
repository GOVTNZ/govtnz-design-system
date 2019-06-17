import * as React from "react";

type Props = {
  select2?: string | undefined;
  select2Hint?: string | undefined;
  select2Error?: string | undefined;
  name: string;
  multiple?: boolean | undefined;
  onChange: any;
};

const SelectWithHintTextAndErrorMessage = ({
  select2,
  select2Hint,
  select2Error,
  name,
  multiple,
  onChange
}: Props) => (
  <div className="g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error">
    <label
      className="g-selectWithHintTextAndErrorMessage-label"
      htmlFor={select2}
    >
      Label text goes here
    </label>
    <span className="g-selectWithHintTextAndErrorMessage-hint" id={select2Hint}>
      Hint text goes here
    </span>
    <span
      className="g-selectWithHintTextAndErrorMessage-error-message"
      id={select2Error}
    >
      Error message goes here
    </span>
    <select
      aria-describedby={
        select2Hint !== undefined || select2Error !== undefined
          ? `${select2Hint ? select2Hint : ""}${
              select2Error ? " " + select2Error : ""
            }`
          : undefined
      }
      className="g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error"
      id={select2}
      name={name}
      multiple={multiple}
      onChange={onChange}
    >
      Govt.NZ frontend option 1 Govt.NZ frontend option 2 Govt.NZ frontend
      option 3
    </select>
  </div>
);

export default SelectWithHintTextAndErrorMessage;
