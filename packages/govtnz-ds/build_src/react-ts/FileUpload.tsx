import React from "react";

type Props = {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  ref?: React.RefObject<HTMLInputElement>;
};

const FileUpload = ({
  id,
  required,
  disabled,
  readOnly,
  autoFocus,
  name,
  onChange,
  ref
}: Props) => (
  <div className="g-fileUpload__form-group">
    <label className="g-fileUpload__label" htmlFor={id}>
      Upload a file
    </label>
    <input
      className="g-fileUpload__input"
      id={id}
      name={name}
      type="file"
      required={required}
      disabled={
        disabled !== undefined ? disabled.toString() === "true" : undefined
      }
      readOnly={readOnly}
      autoFocus={autoFocus}
      onChange={onChange}
      ref={ref}
    />
  </div>
);

export default FileUpload;
