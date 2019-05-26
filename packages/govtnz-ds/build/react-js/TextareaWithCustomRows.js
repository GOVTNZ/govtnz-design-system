import React from "react";

const TextareaWithCustomRows = ({ fullAddress, onChange }) => (
  <div className="g-textareaWithCustomRows-form-group">
    <label className="g-textareaWithCustomRows-label" htmlFor={fullAddress}>
      Full address
    </label>
    <textarea
      className="g-textareaWithCustomRows-textarea"
      id={fullAddress}
      name="address"
      rows="8"
      onChange={onChange}
    />
  </div>
);
TextareaWithCustomRows.props = ["fullAddress", "onChange"];
export default TextareaWithCustomRows;
