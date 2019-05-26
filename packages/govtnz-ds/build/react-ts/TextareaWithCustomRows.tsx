import * as React from "react";

type Props = {
  fullAddress?: string | undefined;
  onChange: any;
};

const TextareaWithCustomRows = ({ fullAddress, onChange }: Props) => (
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
