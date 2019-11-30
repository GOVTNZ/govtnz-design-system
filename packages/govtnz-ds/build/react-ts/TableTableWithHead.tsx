import * as React from "react";

type Props = {};

const TableTableWithHead = ({}: Props) => (
  <table className="g-tableTableWithHead-table">
    <thead className="g-tableTableWithHead-table__head">
      <tr className="g-tableTableWithHead-table__row">
        Month you apply Rate for bicycles Rate for vehicles
      </tr>
    </thead>
    <tbody className="g-tableTableWithHead-table__body">
      <tr className="g-tableTableWithHead-table__row">January $85 $95</tr>
      <tr className="g-tableTableWithHead-table__row">February $75 $55</tr>
      <tr className="g-tableTableWithHead-table__row">March $165 $125</tr>
    </tbody>
  </table>
);

export default TableTableWithHead;
