import React from "react";

const FileUpload = ({ fileUpload1, name, disabled, readOnly, autoFocus }) => (
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
