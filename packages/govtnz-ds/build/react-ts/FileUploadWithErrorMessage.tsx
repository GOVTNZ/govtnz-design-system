import * as React from "react";

type Props = {
  fileUpload3?: string | undefined;
  fileUpload3Hint?: string | undefined;
  fileUpload3Error?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  autoFocus?: boolean | undefined;
};

const FileUploadWithErrorMessage = ({
  fileUpload3,
  fileUpload3Hint,
  fileUpload3Error,
  name,
  disabled,
  readOnly,
  autoFocus
}: Props) => (
  <div className="g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error">
    <label className="g-fileUploadWithErrorMessage-label" htmlFor={fileUpload3}>
      Upload a file
    </label>
    <span className="g-fileUploadWithErrorMessage-hint" id={fileUpload3Hint}>
      Your photo may be in your Pictures, Photos, Downloads or Desktop folder.
      Or in an app like iPhoto.
    </span>
    <span
      className="g-fileUploadWithErrorMessage-error-message"
      id={fileUpload3Error}
    >
      Error message goes here
    </span>
    <input
      aria-describedby={
        fileUpload3Hint !== undefined || fileUpload3Error !== undefined
          ? `${fileUpload3Hint ? fileUpload3Hint : ""}${
              fileUpload3Error ? " " + fileUpload3Error : ""
            }`
          : undefined
      }
      className="g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error"
      id={fileUpload3}
      name={name}
      type="file"
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
    />
  </div>
);

export default FileUploadWithErrorMessage;
