import React from "react";

const TextareaWithDefaultValue = ({ fullAddress, onChange }) => (
  <div className="g-textareaWithDefaultValue-form-group">
    <label className="g-textareaWithDefaultValue-label" htmlFor={fullAddress}>
      Full address
    </label>
    <textarea
      className="g-textareaWithDefaultValue-textarea"
      id={fullAddress}
      name="address"
      rows="5"
      onChange={onChange}
    >
      221B Baker Street London NW1 6XE
    </textarea>
  </div>
);
TextareaWithDefaultValue.props = ["fullAddress", "onChange"];
export default TextareaWithDefaultValue;
