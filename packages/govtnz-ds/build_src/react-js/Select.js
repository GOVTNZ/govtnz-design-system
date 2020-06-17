import React from "react";

const Select = ({
  selectId,
  name,
  required,
  multiple,
  onChange,
  ref,
  children
}) => (
  <select
    className="g-select"
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
);

export default Select;
