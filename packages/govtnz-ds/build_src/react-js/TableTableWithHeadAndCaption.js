import React from "react";

const TableTableWithHeadAndCaption = ({}) => (
  <table className="g-tableTableWithHeadAndCaption-table">
    <caption className="g-tableTableWithHeadAndCaption-table__caption g-tableTableWithHeadAndCaption-heading-m">
      Caption 1: Months and rates
    </caption>
    <thead className="g-tableTableWithHeadAndCaption-table__head">
      <tr className="g-tableTableWithHeadAndCaption-table__row">
        Month you apply Rate for bicycles Rate for vehicles
      </tr>
    </thead>
    <tbody className="g-tableTableWithHeadAndCaption-table__body">
      <tr className="g-tableTableWithHeadAndCaption-table__row">
        January $85 $95
      </tr>
      <tr className="g-tableTableWithHeadAndCaption-table__row">
        February $75 $55
      </tr>
      <tr className="g-tableTableWithHeadAndCaption-table__row">
        March $165 $125
      </tr>
    </tbody>
  </table>
);

export default TableTableWithHeadAndCaption;
