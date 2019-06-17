import React from "react";

const WarningText = ({}) => (
  <div className="g-warning-text">
    <span aria-hidden="true" className="g-warning-text__icon">
      !
    </span>
    <strong className="g-warning-text__text">
      <span className="g-warning-text__assistive">Warning</span>
      You can be fined up to $5,000 if you don’t register.
    </strong>
  </div>
);

export default WarningText;
