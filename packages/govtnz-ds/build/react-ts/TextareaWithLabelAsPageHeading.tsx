import * as React from "react";

type Props = {
  textareaWithPageHeading?: string | undefined;
  onChange: any;
};

const TextareaWithLabelAsPageHeading = ({
  textareaWithPageHeading,
  onChange
}: Props) => (
  <div className="g-textareaWithLabelAsPageHeading-form-group">
    <h1 className="g-textareaWithLabelAsPageHeading-label-wrapper">
      <label
        className="g-textareaWithLabelAsPageHeading-label"
        htmlFor={textareaWithPageHeading}
      >
        Full address
      </label>
    </h1>
    <textarea
      className="g-textareaWithLabelAsPageHeading-textarea"
      id={textareaWithPageHeading}
      name="address"
      rows="5"
      onChange={onChange}
    />
  </div>
);
TextareaWithLabelAsPageHeading.props = ["textareaWithPageHeading", "onChange"];
export default TextareaWithLabelAsPageHeading;
