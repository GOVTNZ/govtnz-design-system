"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CharacterCountWithCustomRows = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  }
};

var CharacterCountWithCustomRows = function CharacterCountWithCustomRows(_ref) {
  var maxLength = _ref.maxLength,
      id = _ref.id,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      rows = _ref.rows,
      cols = _ref.cols,
      autoFocus = _ref.autoFocus,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      value = _ref.value,
      onChange = _ref.onChange,
      remainingCharacters = _ref.remainingCharacters;
  return _react["default"].createElement("div", {
    className: "g-characterCountWithCustomRows-character-count",
    "data-maxlength": maxLength ? maxLength : ""
  }, _react["default"].createElement("div", {
    className: "g-characterCountWithCustomRows-form-group"
  }, _react["default"].createElement("label", {
    className: "g-characterCountWithCustomRows-label",
    htmlFor: id
  }, "Full address"), _react["default"].createElement("textarea", {
    className: "g-characterCountWithCustomRows-textarea",
    id: id,
    name: name,
    rows: rows,
    disabled: disabled,
    readOnly: readOnly,
    cols: cols,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: constants.autoComplete[autoComplete],
    value: value,
    onChange: onChange
  }), _react["default"].createElement("span", {
    "aria-live": "polite",
    className: "g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message"
  }, "You have", " ", remainingCharacters !== undefined ? remainingCharacters : _react["default"].createElement(_react["default"].Fragment, null), " ", "characters remaining")));
};

exports.CharacterCountWithCustomRows = CharacterCountWithCustomRows;

var CharacterCountWithCustomRows__calculated = function CharacterCountWithCustomRows__calculated(props) {
  return _react["default"].createElement(CharacterCountWithCustomRows, (0, _objectSpread2["default"])({}, props, {
    remainingCharacters: function (props) {
      return props.value !== undefined && props.maxLength !== undefined ? parseInt(props.maxLength, 10) - props.value.length : props.maxLength;
    }(props)
  }));
};

var _default = CharacterCountWithCustomRows__calculated;
exports["default"] = _default;