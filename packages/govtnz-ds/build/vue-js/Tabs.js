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
  }
};

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    tabPastDay: {
      type: String,
      required: false
    },
    pastDay: {
      type: String,
      required: false
    },
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
    tabPastWeek: {
      type: String,
      required: false
    },
    pastWeek: {
      type: String,
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
    tabPastMonth: {
      type: String,
      required: false
    },
    pastMonth: {
      type: String,
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
    tabPastYear: {
      type: String,
      required: false
    },
    pastYear: {
      type: String,
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
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-tabs",attrs:{"data-module":"tabs"}},[_c(\'h2\',{staticClass:"g-tabs__title"},[_v("\\n\\n    Contents\\n  \\n\\n")]),_v(" "),_c(\'ul\',{staticClass:"g-tabs__list",attrs:{"role":"tablist"}},[_c(\'li\',{staticClass:"g-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabs__tab g-tabs__tab--selected",attrs:{"aria-controls":pastDay,"aria-selected":"true","href":href,"id":tabPastDay,"role":"tab","tabindex":"0","rel":rel,"target":computed__target}},[_v("\\n\\n        Past day\\n      \\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabs__tab",attrs:{"aria-controls":pastWeek,"aria-selected":"false","href":href2,"id":tabPastWeek,"role":"tab","tabindex":"-1","rel":rel2,"target":computed__target2}},[_v("\\n\\n        Past week\\n      \\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabs__tab",attrs:{"aria-controls":pastMonth,"aria-selected":"false","href":href3,"id":tabPastMonth,"role":"tab","tabindex":"-1","rel":rel3,"target":computed__target3}},[_v("\\n\\n        Past month\\n      \\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabs__tab",attrs:{"aria-controls":pastYear,"aria-selected":"false","href":href4,"id":tabPastYear,"role":"tab","tabindex":"-1","rel":rel4,"target":computed__target4}},[_v("\\n\\n        Past year\\n      \\n\\n")])])]),_v(" "),_c(\'section\',{staticClass:"g-tabs__panel",attrs:{"aria-labelledby":tabPastDay,"id":pastDay,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabs-heading-l"},[_v("\\nPast day\\n\\n")]),_v(" "),_m(0)]),_v(" "),_c(\'section\',{staticClass:"g-tabs__panel g-tabs__panel--hidden",attrs:{"aria-labelledby":tabPastWeek,"id":pastWeek,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabs-heading-l"},[_v("\\nPast week\\n\\n")]),_v(" "),_m(1)]),_v(" "),_c(\'section\',{staticClass:"g-tabs__panel g-tabs__panel--hidden",attrs:{"aria-labelledby":tabPastMonth,"id":pastMonth,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabs-heading-l"},[_v("\\nPast month\\n\\n")]),_v(" "),_m(2)]),_v(" "),_c(\'section\',{staticClass:"g-tabs__panel g-tabs__panel--hidden",attrs:{"aria-labelledby":tabPastYear,"id":pastYear,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabs-heading-l"},[_v("\\nPast year\\n\\n")]),_v(" "),_m(3)])])}'),
  staticRenderFns: new Function(['with(this){return _c(\'table\',{staticClass:"g-tabs-table"},[_c(\'thead\',{staticClass:"g-tabs-table__head"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Case manager\\n          Cases opened\\n          Cases closed\\n        \\n\\n")])]),_v(" "),_c(\'tbody\',{staticClass:"g-tabs-table__body"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          David Francis\\n          3\\n          0\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Paul Farmer\\n          1\\n          0\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Rita Patel\\n          2\\n          0\\n        \\n\\n")])])])}', 'with(this){return _c(\'table\',{staticClass:"g-tabs-table"},[_c(\'thead\',{staticClass:"g-tabs-table__head"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Case manager\\n          Cases opened\\n          Cases closed\\n        \\n\\n")])]),_v(" "),_c(\'tbody\',{staticClass:"g-tabs-table__body"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          David Francis\\n          24\\n          18\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Paul Farmer\\n          16\\n          20\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Rita Patel\\n          24\\n          27\\n        \\n\\n")])])])}', 'with(this){return _c(\'table\',{staticClass:"g-tabs-table"},[_c(\'thead\',{staticClass:"g-tabs-table__head"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Case manager\\n          Cases opened\\n          Cases closed\\n        \\n\\n")])]),_v(" "),_c(\'tbody\',{staticClass:"g-tabs-table__body"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          David Francis\\n          98\\n          95\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Paul Farmer\\n          122\\n          131\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Rita Patel\\n          126\\n          142\\n        \\n\\n")])])])}', 'with(this){return _c(\'table\',{staticClass:"g-tabs-table"},[_c(\'thead\',{staticClass:"g-tabs-table__head"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Case manager\\n          Cases opened\\n          Cases closed\\n        \\n\\n")])]),_v(" "),_c(\'tbody\',{staticClass:"g-tabs-table__body"},[_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          David Francis\\n          1380\\n          1472\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Paul Farmer\\n          1129\\n          1083\\n        \\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-tabs-table__row"},[_v("\\n\\n          Rita Patel\\n          1539\\n          1265\\n        \\n\\n")])])])}'])
});

exports["default"] = _default;