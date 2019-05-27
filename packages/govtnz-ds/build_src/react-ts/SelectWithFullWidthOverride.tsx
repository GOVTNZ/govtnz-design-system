import * as React from "react";

type Props = {
  select1?: string | undefined;
  name: string;
  multiple?: boolean | undefined;
  onChange: any;
  selected?: boolean | undefined;
  selected2?: boolean | undefined;
  selected3?: boolean | undefined;
};

const SelectWithFullWidthOverride = ({
  select1,
  name,
  multiple,
  onChange,
  selected,
  selected2,
  selected3
}: Props) => (
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
