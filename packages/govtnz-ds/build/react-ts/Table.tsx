import * as React from "react";

type Props = {};

const Table = ({  }: Props) => (
  <table className="g-table">
    <tbody className="g-table__body">
      <tr className="g-table__row">January $85 $95</tr>
      <tr className="g-table__row">February $75 $55</tr>
      <tr className="g-table__row">March $165 $125</tr>
    </tbody>
  </table>
);
Table.props = [];
export default Table;
