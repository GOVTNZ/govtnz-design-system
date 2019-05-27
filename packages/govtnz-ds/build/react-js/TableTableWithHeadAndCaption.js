"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var TableTableWithHeadAndCaption = function TableTableWithHeadAndCaption(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("table", {
    className: "g-tableTableWithHeadAndCaption-table"
  }, _react["default"].createElement("caption", {
    className: "g-tableTableWithHeadAndCaption-table__caption g-tableTableWithHeadAndCaption-heading-m"
  }, "Caption 1: Months and rates"), _react["default"].createElement("thead", {
    className: "g-tableTableWithHeadAndCaption-table__head"
  }, _react["default"].createElement("tr", {
    className: "g-tableTableWithHeadAndCaption-table__row"
  }, "Month you apply Rate for bicycles Rate for vehicles")), _react["default"].createElement("tbody", {
    className: "g-tableTableWithHeadAndCaption-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-tableTableWithHeadAndCaption-table__row"
  }, "January $85 $95"), _react["default"].createElement("tr", {
    className: "g-tableTableWithHeadAndCaption-table__row"
  }, "February $75 $55"), _react["default"].createElement("tr", {
    className: "g-tableTableWithHeadAndCaption-table__row"
  }, "March $165 $125")));
};

TableTableWithHeadAndCaption.props = [];
var _default = TableTableWithHeadAndCaption;
exports["default"] = _default;