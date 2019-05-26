import React from "react";

const Select = ({ selectId, name, multiple, onChange, children }) => (
  <select
    className="g-select"
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
);
Select.props = ["selectId", "name", "multiple", "onChange", "children"];
export default Select;
