import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: {
    moreDetail: { type: String, required: false },
    moreDetailHint: { type: String, required: false }
  },
  computed: {},
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-textarea-form-group"},[_c(\'label\',{staticClass:"g-textarea-label",attrs:{"for":moreDetail}},[_v("\\n\\n    Can you provide more detail?\\n  \\n\\n")]),_v(" "),_c(\'span\',{staticClass:"g-textarea-hint",attrs:{"id":moreDetailHint}},[_v("\\n\\n    Don\'t include personal or financial information, eg your National Insurance\\n    number or credit card details.\\n  \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-textarea",attrs:{"aria-describedby":moreDetailHint,"id":moreDetail,"name":"more-detail","rows":"5"}})])}'
  )
});
