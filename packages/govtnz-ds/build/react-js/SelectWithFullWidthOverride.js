import React from "react";

const SelectWithFullWidthOverride = ({
  select1,
  name,
  multiple,
  onChange,
  selected,
  selected2,
  selected3
}) => (
  <div className="g-selectWithFullWidthOverride-form-group">
    <label className="g-selectWithFullWidthOverride-label" htmlFor={select1}>
      Label text goes here
    </label>
    <select
      className="g-selectWithFullWidthOverride-select g-!-width-full"
      id={select1}
      name={name}
      multiple={multiple}
      onChange={onChange}
    >
      <option value="1" selected={selected}>
        Govt.NZ frontend option 1
      </option>
      <option selected={selected2} value="2">
        Govt.NZ frontend option 2
      </option>
      <option disabled={false} value="3" selected={selected3}>
        Govt.NZ frontend option 3
      </option>
    </select>
  </div>
);
SelectWithFullWidthOverride.props = [
  "select1",
  "name",
  "multiple",
  "onChange",
  "selected",
  "selected2",
  "selected3"
];
export default SelectWithFullWidthOverride;
