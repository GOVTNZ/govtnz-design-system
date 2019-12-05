import * as React from "react";

type Props = {
  selectId?: string;
  name: string;
  multiple?: boolean;
  onChange: any;
  children?: React.ReactNode;
};

const Select = ({ selectId, name, multiple, onChange, children }: Props) => (
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

export default Select;
