import * as React from "react";

type Props = {
  href: string;
  rel?: string | undefined;
  target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href2: string;
  rel2?: string | undefined;
  target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href3: string;
  rel3?: string | undefined;
  target3?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href4: string;
  rel4?: string | undefined;
  target4?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href5: string;
  rel5?: string | undefined;
  target5?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href6: string;
  rel6?: string | undefined;
  target6?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href7: string;
  rel7?: string | undefined;
  target7?: "Blank" | "Top" | "Self" | "Parent" | undefined;
  href8: string;
  rel8?: string | undefined;
  target8?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const SummaryListCheckYourAnswers = ({
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
  target5,
  href6,
  rel6,
  target6,
  href7,
  rel7,
  target7,
  href8,
  rel8,
  target8
}: Props) => (
  <dl className="g-summaryListCheckYourAnswers-summary-list">
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">Name</dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        Sarah Philips
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href}
          rel={rel}
          target={constants.target[target]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            name
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Date of birth
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        5 January 1978
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href2}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            date of birth
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Contact information
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href3}
          rel={rel3}
          target={constants.target3[target3]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            contact information
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Contact details
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        07700 900457
        <br />
        sarah.phillips@example.com
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href4}
          rel={rel4}
          target={constants.target4[target4]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            contact details
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Previous application number
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        502135326
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href5}
          rel={rel5}
          target={constants.target5[target5]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            previous application number
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Licence type
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        For personal use
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href6}
          rel={rel6}
          target={constants.target6[target6]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            licence type
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Home address
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        <p className="g-summaryListCheckYourAnswers-body">
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </p>
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href7}
          rel={rel7}
          target={constants.target7[target7]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            home address
          </span>
        </a>
      </dd>
    </div>
    <div className="g-summaryListCheckYourAnswers-summary-list__row">
      <dt className="g-summaryListCheckYourAnswers-summary-list__key">
        Licence period
      </dt>
      <dd className="g-summaryListCheckYourAnswers-summary-list__value">
        <p className="g-summaryListCheckYourAnswers-body">
          This is a longer paragraph of text provided by the user to provide
          additional information.
        </p>
        <p className="g-summaryListCheckYourAnswers-body">
          This is a second paragraph of text provided by the user.
        </p>
      </dd>
      <dd className="g-summaryListCheckYourAnswers-summary-list__actions">
        <a
          className="g-summaryListCheckYourAnswers-link"
          href={href8}
          rel={rel8}
          target={constants.target8[target8]}
        >
          Change
          <span className="g-summaryListCheckYourAnswers-visually-hidden">
            {" "}
            licence period
          </span>
        </a>
      </dd>
    </div>
  </dl>
);
SummaryListCheckYourAnswers.props = [
  "href",
  "rel",
  "target",
  "href2",
  "rel2",
  "target2",
  "href3",
  "rel3",
  "target3",
  "href4",
  "rel4",
  "target4",
  "href5",
  "rel5",
  "target5",
  "href6",
  "rel6",
  "target6",
  "href7",
  "rel7",
  "target7",
  "href8",
  "rel8",
  "target8"
];
export default SummaryListCheckYourAnswers;
