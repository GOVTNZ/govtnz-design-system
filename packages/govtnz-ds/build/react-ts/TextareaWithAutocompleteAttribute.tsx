import * as React from "react";

type Props = {
  textareaWithAutocompleteAttribute?: string | undefined;
  onChange: any;
};

const TextareaWithAutocompleteAttribute = ({
  textareaWithAutocompleteAttribute,
  onChange
}: Props) => (
  <div className="g-textareaWithAutocompleteAttribute-form-group">
    <label
      className="g-textareaWithAutocompleteAttribute-label"
      htmlFor={textareaWithAutocompleteAttribute}
    >
      Full address
    </label>
    <textarea
      autoComplete="street-address"
      className="g-textareaWithAutocompleteAttribute-textarea"
      id={textareaWithAutocompleteAttribute}
      name="address"
      rows="5"
      onChange={onChange}
    />
  </div>
);
TextareaWithAutocompleteAttribute.props = [
  "textareaWithAutocompleteAttribute",
  "onChange"
];
export default TextareaWithAutocompleteAttribute;
