import React from "react";

const SelectBlock = ({
  selectId,
  label,
  hasError,
  name,
  multiple,
  onChange,
  children
}) => (
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
        hasError ? " g-selectBlock-select--error" : ""
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
SelectBlock.props = [
  "selectId",
  "label",
  "hasError",
  "name",
  "multiple",
  "onChange",
  "children"
];
export default SelectBlock;
