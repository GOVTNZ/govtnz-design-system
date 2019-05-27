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
    }
  },
  computed: {
    computed__target: function computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2: function computed__target2() {
      return constants[this.target2] !== undefined ? constants[this.target2] : "";
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs"},[_c(\'ol\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list"},[_c(\'li\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"},[_c(\'a\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\nHome\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item"},[_c(\'a\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\nPassports, travel and living abroad\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-breadcrumbsWithLastBreadcrumbAsCurrentPage-breadcrumbs__list-item",attrs:{"aria-current":"page"}},[_v("\\n\\n      Travel abroad\\n    \\n\\n")])])])}')
});

exports["default"] = _default;