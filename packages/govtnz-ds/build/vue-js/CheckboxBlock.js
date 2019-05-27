"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {
    fakeFocus: {
      type: Boolean,
      "default": false,
      required: false
    },
    checkboxId: {
      type: String,
      required: false
    },
    hintId: {
      type: String,
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
    checked: {
      type: Boolean,
      "default": false,
      required: false
    },
    label: {
      required: false,
      "default": "Label text"
    },
    hint: {
      required: false,
      "default": "Hint text"
    }
  },
  computed: {
    computed__class: function computed__class() {
      return "g-checkboxes__input" + (this.fakeFocus ? " :focus" : "");
    }
  },
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-checkboxes__item"},[_c(\'input\',{class:computed__class,attrs:{"aria-describedby":hintId,"id":checkboxId,"type":"checkbox","name":name,"disabled":disabled,"readonly":readOnly,"autofocus":autoFocus},domProps:{"value":value,"checked":checked}}),_v(" "),_c(\'label\',{staticClass:"g-checkboxBlock-label g-checkboxes__label",attrs:{"for":checkboxId}},[_t("label")],2),_v(" "),_c(\'div\',{staticClass:"g-checkboxBlock-hint g-checkboxes__hint",attrs:{"id":hintId}},[_t("hint")],2)])}')
});

exports["default"] = _default;