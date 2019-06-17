"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _react = _interopRequireDefault(require("react"));

var Table = function Table(_ref) {
  (0, _objectDestructuringEmpty2["default"])(_ref);
  return _react["default"].createElement("table", {
    className: "g-table"
  }, _react["default"].createElement("tbody", {
    className: "g-table__body"
  }, _react["default"].createElement("tr", {
    className: "g-table__row"
  }, "January $85 $95"), _react["default"].createElement("tr", {
    className: "g-table__row"
  }, "February $75 $55"), _react["default"].createElement("tr", {
    className: "g-table__row"
  }, "March $165 $125")));
};

var _default = Table;
exports["default"] = _default;