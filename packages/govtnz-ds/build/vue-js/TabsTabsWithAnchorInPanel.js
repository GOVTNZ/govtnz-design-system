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
    tabTab1: {
      type: String,
      required: false
    },
    tab1: {
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
    tabTab2: {
      type: String,
      required: false
    },
    tab2: {
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
    anchor: {
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
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs",attrs:{"data-module":"tabs"}},[_c(\'h2\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__title"},[_v("\\n\\n    Contents\\n  \\n\\n")]),_v(" "),_c(\'ul\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__list",attrs:{"role":"tablist"}},[_c(\'li\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected",attrs:{"aria-controls":tab1,"aria-selected":"true","href":href,"id":tabTab1,"role":"tab","tabindex":"0","rel":rel,"target":computed__target}},[_v("\\n\\n        Tab 1\\n      \\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__list-item",attrs:{"role":"presentation"}},[_c(\'a\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__tab",attrs:{"aria-controls":tab2,"aria-selected":"false","href":href2,"id":tabTab2,"role":"tab","tabindex":"-1","rel":rel2,"target":computed__target2}},[_v("\\n\\n        Tab 2\\n      \\n\\n")])])]),_v(" "),_c(\'section\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__panel",attrs:{"aria-labelledby":tabTab1,"id":tab1,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabsTabsWithAnchorInPanel-heading-l"},[_v("\\nTab 1\\n\\n")]),_v(" "),_c(\'p\',[_v("\\n\\n      Testing that when you click the anchor it moves to the anchor point\\n      successfully\\n    \\n\\n")]),_v(" "),_c(\'a\',{staticClass:"g-tabsTabsWithAnchorInPanel-link",attrs:{"href":href3,"rel":rel3,"target":computed__target3}},[_v("\\nAnchor\\n\\n")]),_v(" "),_c(\'a\',{attrs:{"id":anchor,"tabindex":"0","href":href4,"rel":rel4,"target":computed__target4}},[_v("\\nAnchor Point\\n\\n")])]),_v(" "),_c(\'section\',{staticClass:"g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden",attrs:{"aria-labelledby":tabTab2,"id":tab2,"role":"tabpanel"}},[_c(\'h2\',{staticClass:"g-tabsTabsWithAnchorInPanel-heading-l"},[_v("\\nTab 2\\n\\n")])])])}')
});

exports["default"] = _default;