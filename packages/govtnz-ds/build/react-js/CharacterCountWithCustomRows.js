import React from "react";

const CharacterCountWithCustomRows = ({
  customRows,
  onChange,
  customRowsInfo
}) => (
  <div
    className="g-characterCountWithCustomRows-character-count"
    data-maxlength="10"
    data-module="character-count"
  >
    <div className="g-characterCountWithCustomRows-form-group">
      <label
        className="g-characterCountWithCustomRows-label"
        htmlFor={customRows}
      >
        Full address
      </label>
      <textarea
        className="g-characterCountWithCustomRows-textarea js-character-count"
        id={customRows}
        name="custom"
        rows="8"
        onChange={onChange}
      />
      <span
        aria-live="polite"
        className="g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message"
        id={customRowsInfo}
      >
        You have 10 characters remaining
      </span>
    </div>
  </div>
);
CharacterCountWithCustomRows.props = [
  "customRows",
  "onChange",
  "customRowsInfo"
];
export default CharacterCountWithCustomRows;
