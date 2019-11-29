import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SummaryList = ({
  href,
  rel,
  target,
  href2,
  rel2,
  target2,
  href3,
  rel3,
  target3,
  href4,
  rel4,
  target4,
  href5,
  rel5,
  target5
}) => (
  <dl className="g-summary-list">
    <div className="g-summary-list__row">
      <dt className="g-summary-list__key">Name</dt>
      <dd className="g-summary-list__value">Firstname Lastname</dd>
      <dd className="g-summary-list__actions">
        <ul className="g-summary-list__actions-list">
          <li className="g-summary-list__actions-list-item">
            <a
              className="g-link"
              href={href}
              rel={rel}
              target={constants.target[target]}
            >
              Edit<span className="g-summaryList-visually-hidden"> name</span>
            </a>
          </li>
          <li className="g-summary-list__actions-list-item">
            <a
              className="g-link"
              href={href2}
              rel={rel2}
              target={constants.target2[target2]}
            >
              Delete<span className="g-summaryList-visually-hidden"> name</span>
            </a>
          </li>
        </ul>
      </dd>
    </div>
    <div className="g-summary-list__row">
      <dt className="g-summary-list__key">Date of birth</dt>
      <dd className="g-summary-list__value">13/08/1980</dd>
      <dd className="g-summary-list__actions">
        <a
          className="g-link"
          href={href3}
          rel={rel3}
          target={constants.target3[target3]}
        >
          Change
          <span className="g-summaryList-visually-hidden"> date of birth</span>
        </a>
      </dd>
    </div>
    <div className="g-summary-list__row">
      <dt className="g-summary-list__key">Contact information</dt>
      <dd className="g-summary-list__value">
        <p className="g-summaryList-body">email@email.com</p>
        <p className="g-summaryList-body">
          Address line 1<br />
          Address line 2<br />
          Address line 3<br />
          Address line 4<br />
          Address line 5
        </p>
      </dd>
      <dd className="g-summary-list__actions">
        <ul className="g-summary-list__actions-list">
          <li className="g-summary-list__actions-list-item">
            <a
              className="g-link"
              href={href4}
              rel={rel4}
              target={constants.target4[target4]}
            >
              Edit
              <span className="g-summaryList-visually-hidden">
                {" "}
                contact information
              </span>
            </a>
          </li>
          <li className="g-summary-list__actions-list-item">
            <a
              className="g-link"
              href={href5}
              rel={rel5}
              target={constants.target5[target5]}
            >
              Change
              <span className="g-summaryList-visually-hidden">
                contact information
              </span>
            </a>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
);

export default SummaryList;
