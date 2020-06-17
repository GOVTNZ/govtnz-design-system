import React from "react";

type Props = {
  selectId?: string;
  name: string;
  required?: boolean;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
  children?: React.ReactNode;
};

const Select = ({
  selectId,
  name,
  required,
  multiple,
  onChange,
  ref,
  children
}: Props) => (
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
