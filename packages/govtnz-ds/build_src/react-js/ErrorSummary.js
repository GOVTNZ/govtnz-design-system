import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const ErrorSummary = ({
  errorSummaryTitle,
  href,
  rel,
  target,
  href2,
  rel2,
  target2
}) => (
  <div
    aria-labelledby={errorSummaryTitle}
    className="g-error-summary optional-extra-class"
    data-module="error-summary"
    role="alert"
    tabIndex={-1}
  >
    <h2 className="g-error-summary__title" id={errorSummaryTitle}>
      Message to alert the user to a problem goes here
    </h2>
    <div className="g-error-summary__body">
      <p>Optional description of the errors and how to correct them</p>
      <ul className="g-errorSummary-list g-error-summary__list">
        <li>
          <a href={href} rel={rel} target={constants.target[target]}>
            Descriptive link to the question with an error
          </a>
        </li>
        <li>
          <a href={href2} rel={rel2} target={constants.target2[target2]}>
            Descriptive link to the question with an error
          </a>
        </li>
      </ul>
    </div>
  </div>
);
ErrorSummary.props = [
  "errorSummaryTitle",
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2"
];
export default ErrorSummary;
