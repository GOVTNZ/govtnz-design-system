"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  width: {
    "2": "g-inputBlock-input--width-2",
    "3": "g-inputBlock-input--width-3",
    "4": "g-inputBlock-input--width-4",
    "5": "g-inputBlock-input--width-5",
    "10": "g-inputBlock-input--width-10",
    "20": "g-inputBlock-input--width-20",
    "30": "g-inputBlock-input--width-30"
  },
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

var InputBlock = function InputBlock(_ref) {
  var error = _ref.error,
      inputId = _ref.inputId,
      label = _ref.label,
      hint = _ref.hint,
      hintId = _ref.hintId,
      errorId = _ref.errorId,
      width = _ref.width,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    className: "g-inputBlock-form-group".concat(error ? " g-inputBlock-form-group--error" : "")
  }, _react["default"].createElement("label", {
    className: "g-inputBlock-label",
    htmlFor: inputId
  }, label !== undefined ? label : _react["default"].createElement(_react["default"].Fragment, null, "Example text")), hint !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-inputBlock-hint",
    id: hintId
  }, hint !== undefined ? hint : _react["default"].createElement(_react["default"].Fragment, null, "Example text"))) : "", error !== undefined ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "g-inputBlock-error-message",
    id: errorId
  }, _react["default"].createElement("span", {
    className: "g-inputBlock-visually-hidden"
  }, "Error: "), error !== undefined ? error : _react["default"].createElement(_react["default"].Fragment, null, "Example text"))) : "", _react["default"].createElement("input", {
    "aria-describedby": hintId !== undefined || errorId !== undefined ? "".concat(hintId ? hintId : "").concat(errorId ? " " + errorId : "") : undefined,
    className: "g-inputBlock-input".concat(constants.width[width] !== undefined ? " " + constants.width[width] : "").concat(error ? " g-inputBlock-input--error" : ""),
    id: inputId,
    name: name,
    type: "text",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    maxLength: maxLength,
    autoComplete: constants.autoComplete[autoComplete],
    onChange: onChange
  }));
};

var _default = InputBlock;
exports["default"] = _default;