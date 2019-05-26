import React from "react";

const TextareaWithLabelAsPageHeading = ({
  textareaWithPageHeading,
  onChange
}) => (
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
