"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  alignXs: {
    start: "start-xs",
    center: "center-xs",
    end: "end-xs"
  },
  alignSm: {
    start: "start-sm",
    center: "center-sm",
    end: "end-sm"
  },
  alignMd: {
    start: "start-md",
    center: "center-md",
    end: "end-md"
  },
  alignLg: {
    start: "start-lg",
    center: "center-lg",
    end: "end-lg"
  }
};

var FlexRow = function FlexRow(_ref) {
  var alignXs = _ref.alignXs,
      alignSm = _ref.alignSm,
      alignMd = _ref.alignMd,
      alignLg = _ref.alignLg,
      isReversed = _ref.isReversed,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-flex-row".concat(constants.alignXs[alignXs] !== undefined ? " " + constants.alignXs[alignXs] : "").concat(constants.alignSm[alignSm] !== undefined ? " " + constants.alignSm[alignSm] : "").concat(constants.alignMd[alignMd] !== undefined ? " " + constants.alignMd[alignMd] : "").concat(constants.alignLg[alignLg] !== undefined ? " " + constants.alignLg[alignLg] : "").concat(isReversed ? " g-flex-reverse" : "")
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Columns..."));
};

FlexRow.props = ["alignXs", "alignSm", "alignMd", "alignLg", "isReversed", "children"];
var _default = FlexRow;
exports["default"] = _default;