"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var constants = {
  target: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target2: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target3: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target4: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  },
  target5: {
    Blank: "_blank",
    Top: "_top",
    Self: "_self",
    Parent: "_parent"
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    href: {
      type: String,
      required: true
    },
    rel: {
      type: String,
      required: false
    },
    target: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href2: {
      type: String,
      required: true
    },
    rel2: {
      type: String,
      required: false
    },
    target2: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href3: {
      type: String,
      required: true
    },
    rel3: {
      type: String,
      required: false
    },
    target3: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href4: {
      type: String,
      required: true
    },
    rel4: {
      type: String,
      required: false
    },
    target4: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href5: {
      type: String,
      required: true
    },
    rel5: {
      type: String,
      required: false
    },
    target5: {
      type: String,
      validator: function validator(value) {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target: function computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2: function computed__target2() {
      return constants[this.target2] !== undefined ? constants[this.target2] : "";
    },
    computed__target3: function computed__target3() {
      return constants[this.target3] !== undefined ? constants[this.target3] : "";
    },
    computed__target4: function computed__target4() {
      return constants[this.target4] !== undefined ? constants[this.target4] : "";
    },
    computed__target5: function computed__target5() {
      return constants[this.target5] !== undefined ? constants[this.target5] : "";
    }
  },
  render: new Function('with(this){return _c(\'dl\',{staticClass:"g-summary-list"},[_c(\'div\',{staticClass:"g-summary-list__row"},[_c(\'dt\',{staticClass:"g-summary-list__key"},[_v("\\n\\n      Name\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summary-list__value"},[_v("\\n\\n      Firstname Lastname\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summary-list__actions"},[_c(\'ul\',{staticClass:"g-summary-list__actions-list"},[_c(\'li\',{staticClass:"g-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryList-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\n\\n            Edit\\n"),_c(\'span\',{staticClass:"g-summaryList-visually-hidden"},[_v("\\n name\\n\\n")])])]),_v(" "),_c(\'li\',{staticClass:"g-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryList-link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\n\\n            Delete\\n"),_c(\'span\',{staticClass:"g-summaryList-visually-hidden"},[_v("\\n name\\n\\n")])])])])])]),_v(" "),_c(\'div\',{staticClass:"g-summary-list__row"},[_c(\'dt\',{staticClass:"g-summary-list__key"},[_v("\\n\\n      Date of birth\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summary-list__value"},[_v("\\n\\n      13/08/1980\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryList-link",attrs:{"href":href3,"rel":rel3,"target":computed__target3}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryList-visually-hidden"},[_v("\\n date of birth\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summary-list__row"},[_c(\'dt\',{staticClass:"g-summary-list__key"},[_v("\\n\\n      Contact information\\n    \\n\\n")]),_v(" "),_m(0),_v(" "),_c(\'dd\',{staticClass:"g-summary-list__actions"},[_c(\'ul\',{staticClass:"g-summary-list__actions-list"},[_c(\'li\',{staticClass:"g-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryList-link",attrs:{"href":href4,"rel":rel4,"target":computed__target4}},[_v("\\n\\n            Edit\\n"),_c(\'span\',{staticClass:"g-summaryList-visually-hidden"},[_v("\\n contact information\\n\\n")])])]),_v(" "),_c(\'li\',{staticClass:"g-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryList-link",attrs:{"href":href5,"rel":rel5,"target":computed__target5}},[_v("\\n\\n            Change\\n"),_c(\'span\',{staticClass:"g-summaryList-visually-hidden"},[_v("\\n\\n              contact information\\n\\n")])])])])])])])}'),
  staticRenderFns: new Function(['with(this){return _c(\'dd\',{staticClass:"g-summary-list__value"},[_c(\'p\',{staticClass:"g-summaryList-body"},[_v("\\n\\n        email@email.com\\n      \\n\\n")]),_v(" "),_c(\'p\',{staticClass:"g-summaryList-body"},[_v("\\n\\n        Address line 1\\n"),_c(\'br\'),_v("\\n\\n        Address line 2\\n"),_c(\'br\'),_v("\\n\\n        Address line 3\\n"),_c(\'br\'),_v("\\n\\n        Address line 4\\n"),_c(\'br\'),_v("\\n\\n        Address line 5\\n      \\n\\n")])])}'])
});

exports["default"] = _default;