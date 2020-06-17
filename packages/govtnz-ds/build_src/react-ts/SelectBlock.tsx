import React from "react";

type Props = {
  errorId?: boolean;
  selectId?: string;
  label?: React.ReactNode;
  error: boolean;
  name: string;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
};

const SelectBlock = ({
  errorId,
  selectId,
  label,
  error,
  name,
  multiple,
  onChange,
  ref
}: Props) => (
  <div className={errorId ? "g-form-group--error" : ""}>
    <label className="g-selectBlock-label" htmlFor={selectId}>
      {label !== undefined ? (
        label
      ) : (
        <React.Fragment>Example label text</React.Fragment>
      )}
    </label>
    <select
      className={`g-selectBlock-select${
        error ? " g-selectBlock-select--error" : ""
      }`}
      id={selectId}
      name={name}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    >
      Options
    </select>
  </div>
);

export default SelectBlock;
