import React from "react";

const FileUploadWithHintText = ({
  fileUpload2,
  fileUpload2Hint,
  name,
  disabled,
  readOnly,
  autoFocus
}) => (
  <div className="g-fileUploadWithHintText-form-group">
    <label className="g-fileUploadWithHintText-label" htmlFor={fileUpload2}>
      Upload your photo
    </label>
    <span className="g-fileUploadWithHintText-hint" id={fileUpload2Hint}>
      Your photo may be in your Pictures, Photos, Downloads or Desktop folder.
      Or in an app like iPhoto.
    </span>
    <input
      aria-describedby={fileUpload2Hint}
      className="g-fileUploadWithHintText-file-upload"
      id={fileUpload2}
      name={name}
      type="file"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  </div>
);
FileUploadWithHintText.props = [
  "fileUpload2",
  "fileUpload2Hint",
  "name",
  "disabled",
  "readOnly",
  "autoFocus"
];
export default FileUploadWithHintText;
