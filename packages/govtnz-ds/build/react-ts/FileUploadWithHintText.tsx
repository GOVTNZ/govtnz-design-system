import * as React from "react";

type Props = {
  fileUpload2?: string | undefined;
  fileUpload2Hint?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
};

const FileUploadWithHintText = ({
  fileUpload2,
  fileUpload2Hint,
  name,
  disabled,
  readOnly,
  autoFocus
}: Props) => (
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
