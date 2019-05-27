import React from "react";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

const Tabs = ({
  tabPastDay,
  pastDay,
  href,
  rel,
  target,
  tabPastWeek,
  pastWeek,
  href2,
  rel2,
  target2,
  tabPastMonth,
  pastMonth,
  href3,
  rel3,
  target3,
  tabPastYear,
  pastYear,
  href4,
  rel4,
  target4
}) => (
  <div className="g-tabs" data-module="tabs">
    <h2 className="g-tabs__title">Contents</h2>

    <ul className="g-tabs__list" role="tablist">
      <li className="g-tabs__list-item" role="presentation">
        <a
          aria-controls={pastDay}
          aria-selected="true"
          className="g-tabs__tab g-tabs__tab--selected"
          href={href}
          id={tabPastDay}
          role="tab"
          tabIndex={0}
          rel={rel}
          target={constants.target[target]}
        >
          Past day
        </a>
      </li>
      <li className="g-tabs__list-item" role="presentation">
        <a
          aria-controls={pastWeek}
          aria-selected="false"
          className="g-tabs__tab"
          href={href2}
          id={tabPastWeek}
          role="tab"
          tabIndex={-1}
          rel={rel2}
          target={constants.target2[target2]}
        >
          Past week
        </a>
      </li>
      <li className="g-tabs__list-item" role="presentation">
        <a
          aria-controls={pastMonth}
          aria-selected="false"
          className="g-tabs__tab"
          href={href3}
          id={tabPastMonth}
          role="tab"
          tabIndex={-1}
          rel={rel3}
          target={constants.target3[target3]}
        >
          Past month
        </a>
      </li>
      <li className="g-tabs__list-item" role="presentation">
        <a
          aria-controls={pastYear}
          aria-selected="false"
          className="g-tabs__tab"
          href={href4}
          id={tabPastYear}
          role="tab"
          tabIndex={-1}
          rel={rel4}
          target={constants.target4[target4]}
        >
          Past year
        </a>
      </li>
    </ul>

    <section
      aria-labelledby={tabPastDay}
      className="g-tabs__panel"
      id={pastDay}
      role="tabpanel"
    >
      <h2 className="g-tabs-heading-l">Past day</h2>
      <table className="g-tabs-table">
        <thead className="g-tabs-table__head">
          <tr className="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>
        <tbody className="g-tabs-table__body">
          <tr className="g-tabs-table__row">David Francis 3 0</tr>
          <tr className="g-tabs-table__row">Paul Farmer 1 0</tr>
          <tr className="g-tabs-table__row">Rita Patel 2 0</tr>
        </tbody>
      </table>
    </section>
    <section
      aria-labelledby={tabPastWeek}
      className="g-tabs__panel g-tabs__panel--hidden"
      id={pastWeek}
      role="tabpanel"
    >
      <h2 className="g-tabs-heading-l">Past week</h2>
      <table className="g-tabs-table">
        <thead className="g-tabs-table__head">
          <tr className="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>
        <tbody className="g-tabs-table__body">
          <tr className="g-tabs-table__row">David Francis 24 18</tr>
          <tr className="g-tabs-table__row">Paul Farmer 16 20</tr>
          <tr className="g-tabs-table__row">Rita Patel 24 27</tr>
        </tbody>
      </table>
    </section>
    <section
      aria-labelledby={tabPastMonth}
      className="g-tabs__panel g-tabs__panel--hidden"
      id={pastMonth}
      role="tabpanel"
    >
      <h2 className="g-tabs-heading-l">Past month</h2>
      <table className="g-tabs-table">
        <thead className="g-tabs-table__head">
          <tr className="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>
        <tbody className="g-tabs-table__body">
          <tr className="g-tabs-table__row">David Francis 98 95</tr>
          <tr className="g-tabs-table__row">Paul Farmer 122 131</tr>
          <tr className="g-tabs-table__row">Rita Patel 126 142</tr>
        </tbody>
      </table>
    </section>
    <section
      aria-labelledby={tabPastYear}
      className="g-tabs__panel g-tabs__panel--hidden"
      id={pastYear}
      role="tabpanel"
    >
      <h2 className="g-tabs-heading-l">Past year</h2>
      <table className="g-tabs-table">
        <thead className="g-tabs-table__head">
          <tr className="g-tabs-table__row">
            Case manager Cases opened Cases closed
          </tr>
        </thead>
        <tbody className="g-tabs-table__body">
          <tr className="g-tabs-table__row">David Francis 1380 1472</tr>
          <tr className="g-tabs-table__row">Paul Farmer 1129 1083</tr>
          <tr className="g-tabs-table__row">Rita Patel 1539 1265</tr>
        </tbody>
      </table>
    </section>
  </div>
);
Tabs.props = [
  "tabPastDay",
  "pastDay",
  "href",
  "rel",
  "target",
  "tabPastWeek",
  "pastWeek",
  "href2",
  "rel2",
  "target2",
  "tabPastMonth",
  "pastMonth",
  "href3",
  "rel3",
  "target3",
  "tabPastYear",
  "pastYear",
  "href4",
  "rel4",
  "target4"
];
export default Tabs;
