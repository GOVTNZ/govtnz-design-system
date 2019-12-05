import * as React from "react";

type Props = {
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  name: string;
};

const FileUpload = ({ id, disabled, readOnly, autoFocus, name }: Props) => (
  <div className="g-fileUpload-form-group">
    <label className="g-fileUpload-label" htmlFor={id}>
      Upload a file
    </label>
    <input
      className="g-file-upload"
      id={id}
      name={name}
      type="file"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  </div>
);

export default FileUpload;
