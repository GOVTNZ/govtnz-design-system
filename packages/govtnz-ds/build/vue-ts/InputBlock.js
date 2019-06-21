"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vue = _interopRequireDefault(require("vue"));

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
  type: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
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

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    error: (0, _defineProperty2["default"])({
      type: Boolean,
      "default": false,
      required: false
    }, "default", "Example text"),
    inputId: {
      type: String,
      required: false
    },
    label: {
      required: false,
      "default": "Example text"
    },
    hint: {
      required: false,
      "default": "Example text"
    },
    hintId: {
      type: String,
      required: false
    },
    errorId: {
      type: String,
      required: false
    },
    width: {
      type: String,
      validator: function validator(value) {
        return ["30", "20", "10", "5", "4", "3", "2"].indexOf(value) !== -1;
      },
      required: false
    },
    hasError: {
      type: Boolean,
      "default": false,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      "default": false,
      required: false
    },
    readOnly: {
      type: Boolean,
      "default": false,
      required: false
    },
    autoFocus: {
      type: Boolean,
      "default": false,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ["Button", "Checkbox", "Color", "Date", "DateTime: Local", "Email", "File", "Hidden", "Image", "Month", "Number", "Password", "Radio", "Range", "Reset", "Search", "Submit", "Telephone", "Text", "Time", "URL", "Week"].indexOf(value) !== -1;
      },
      required: true
    },
    spellCheck: {
      type: Boolean,
      "default": false,
      required: false
    },
    maxLength: {
      type: String,
      required: false
    },
    autoComplete: {
      type: String,
      validator: function validator(value) {
        return ["Off", "On", "Name", "Honorific: Prefix", "Given Name", "Additional Name", "Family Name", "Honorific: Suffix", "Nickname", "Email", "Username", "New Password", "Current Password", "Organization Title", "Organization", "Street Address", "Address Line 1", "Address Line 2", "Address Line 3", "Address Level 4", "Address Level 3", "Address Level 2", "Address Level 1", "Country", "Country Name", "Postal Code", "Credit Card: Name", "Credit Card: Given Name", "Credit Card: Additional Name", "Credit Card: Family Name", "Credit Card: Number", "Credit Card: Expiry", "Credit Card: Expiry Month", "Credit Card: Expiry Year", "Credit Card: CSC", "Credit Card: Type", "Transaction: Currency", "Transaction: Amount", "Language", "Birthday", "Birthday: Day", "Birthday: Month", "Birthday: Year", "Sex", "Telephone", "Telephone: Country Code", "Telephone: National", "Telephone: Area Code", "Telephone: Local", "Telephone: Extension", "IMPP", "URL", "Photo"].indexOf(value) !== -1;
      },
      required: true
    }
  },
  computed: {
    computed__class: function computed__class() {
      return "g-inputBlock-form-group" + (this.error ? " g-inputBlock-form-group--error" : "");
    },
    computed__ariaDescribedby: function computed__ariaDescribedby() {
      return +this.hintId + +this.errorId;
    },
    computed__class2: function computed__class2() {
      return "g-inputBlock-input" + (constants[this.width] !== undefined ? " ".concat(constants[this.width]) : "") + (this.hasError ? " g-inputBlock-input--error" : "");
    },
    computed__type: function computed__type() {
      return constants[this.type] !== undefined ? constants[this.type] : "";
    },
    computed__autocomplete: function computed__autocomplete() {
      return constants[this.autoComplete] !== undefined ? constants[this.autoComplete] : "";
    }
  },
  render: new Function('with(this){return _c(\'div\',{class:computed__class},[_c(\'label\',{staticClass:"g-inputBlock-label",attrs:{"for":inputId}},[_t("label")],2),_v(" "),_c(\'div\',{staticClass:"g-inputBlock-hint",attrs:{"id":hintId}},[_t("hint")],2),_v(" "),_c(\'div\',{staticClass:"g-inputBlock-error-message",attrs:{"id":errorId}},[_c(\'span\',{staticClass:"g-inputBlock-visually-hidden"},[_v("\\nError: \\n\\n")]),_v(" "),_t("error")],2),_v(" "),_c(\'input\',{class:computed__class2,attrs:{"aria-describedby":computed__ariaDescribedby,"id":inputId,"name":name,"type":computed__type,"disabled":disabled,"readonly":readOnly,"autofocus":autoFocus,"spellcheck":spellCheck,"maxlength":maxLength,"autocomplete":computed__autocomplete},domProps:{"value":value}})])}')
});

exports["default"] = _default;