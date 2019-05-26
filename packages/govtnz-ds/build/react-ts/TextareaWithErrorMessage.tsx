import * as React from "react";

type Props = {
  noNiReason?: string | undefined;
  noNiReasonError?: string | undefined;
  onChange: any;
};

const TextareaWithErrorMessage = ({
  noNiReason,
  noNiReasonError,
  onChange
}: Props) => (
  <div className="g-textareaWithErrorMessage-form-group g-textareaWithErrorMessage-form-group--error">
    <label className="g-textareaWithErrorMessage-label" htmlFor={noNiReason}>
      Why can't you provide a National Insurance number?
    </label>
    <span
      className="g-textareaWithErrorMessage-error-message"
      id={noNiReasonError}
    >
      You must provide an explanation
    </span>
    <textarea
      aria-describedby={noNiReasonError}
      className="g-textareaWithErrorMessage-textarea g-textareaWithErrorMessage-textarea--error"
      id={noNiReason}
      name="no-ni-reason"
      rows="5"
      onChange={onChange}
    />
  </div>
);
TextareaWithErrorMessage.props = ["noNiReason", "noNiReasonError", "onChange"];
export default TextareaWithErrorMessage;
