import React from "react";

type Props = {
  selectId?: string;
  name: string;
  multiple?: boolean;
  onChange?: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  ref?: React.RefObject<HTMLSelectElement>;
  children?: React.ReactNode;
};

const Select = ({
  selectId,
  name,
  multiple,
  onChange,
  ref,
  children
}: Props) => (
  <select
    className="g-select"
    id={selectId}
    name={name}
    multiple={multiple}
    onChange={onChange}
    ref={ref}
  >
    {" "}
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>
        <option>Options</option>
      </React.Fragment>
    )}{" "}
  </select>
);

export default Select;
