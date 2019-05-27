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
    fileUpload2: {
      type: String,
      required: false
    },
    fileUpload2Hint: {
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
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'div\',{staticClass:"g-fileUploadWithHintText-form-group"},[_c(\'label\',{staticClass:"g-fileUploadWithHintText-label",attrs:{"for":fileUpload2}},[_v("\\n\\n    Upload your photo\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-fileUploadWithHintText-hint",attrs:{"id":fileUpload2Hint}},[_v("\\n\\n    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or\\n    in an app like iPhoto.\\n  \\n\\n")]),_v(" "),_c(\'input\',{staticClass:"g-fileUploadWithHintText-file-upload",attrs:{"aria-describedby":fileUpload2Hint,"id":fileUpload2,"name":name,"type":"file","disabled":disabled,"readonly":readOnly,"autofocus":autoFocus}})])}')
});

exports["default"] = _default;