import React from "react";

type Props = {
  errorId?: boolean;
  selectId?: string;
  label?: React.ReactNode;
  error: boolean;
  name: string;
  required?: boolean;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
  children?: React.ReactNode;
};

const SelectBlock = ({
  errorId,
  selectId,
  label,
  error,
  name,
  required,
  multiple,
  onChange,
  ref,
  children
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
      required={required}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    >
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment>
          <option>Options</option>
        </React.Fragment>
      )}
    </select>
  </div>
);

export default SelectBlock;
