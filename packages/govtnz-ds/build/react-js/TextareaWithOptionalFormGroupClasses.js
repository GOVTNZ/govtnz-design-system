import React from "react";

const TextareaWithOptionalFormGroupClasses = ({
  textareaWithPageHeading,
  onChange
}) => (
  <div className="g-textareaWithOptionalFormGroupClasses-form-group extra-class">
    <label
      className="g-textareaWithOptionalFormGroupClasses-label"
      htmlFor={textareaWithPageHeading}
    >
      Full address
    </label>
    <textarea
      className="g-textareaWithOptionalFormGroupClasses-textarea"
      id={textareaWithPageHeading}
      name="address"
      rows="5"
      onChange={onChange}
    />
  </div>
);
TextareaWithOptionalFormGroupClasses.props = [
  "textareaWithPageHeading",
  "onChange"
];
export default TextareaWithOptionalFormGroupClasses;
