import * as React from "react";

type Props = {
  selectId?: string;
  label?: React.ReactNode;
  error: boolean;
  name: string;
  multiple?: boolean;
  onChange: any;
  children?: React.ReactNode;
};

const SelectBlock = ({
  selectId,
  label,
  error,
  name,
  multiple,
  onChange,
  children
}: Props) => (
  <div>
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
