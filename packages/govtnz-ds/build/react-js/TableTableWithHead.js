"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var TableTableWithHead = function TableTableWithHead(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("table", {
    className: "g-tableTableWithHead-table"
  }, _react["default"].createElement("thead", {
    className: "g-tableTableWithHead-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tableTableWithHead-table__row"
  }, "Month you apply Rate for bicycles Rate for vehicles")), _react["default"].createElement("tbody", {
    className: "g-tableTableWithHead-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tableTableWithHead-table__row"
  }, "January $85 $95"), _react["default"].createElement("tr", {
    className: "g-tableTableWithHead-table__row"
  }, "February $75 $55"), _react["default"].createElement("tr", {
    className: "g-tableTableWithHead-table__row"
  }, "March $165 $125")));
};

var _default = TableTableWithHead;
exports["default"] = _default;