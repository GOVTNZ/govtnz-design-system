import * as React from "react";

type Props = {
  fileUpload1?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
};

const FileUpload = ({
  fileUpload1,
  name,
  disabled,
  readOnly,
  autoFocus
}: Props) => (
  <div className="g-fileUpload-form-group">
    <label className="g-fileUpload-label" htmlFor={fileUpload1}>
      Upload a file
    </label>
    <input
      className="g-file-upload"
      id={fileUpload1}
      name={name}
      type="file"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  </div>
);

export default FileUpload;
