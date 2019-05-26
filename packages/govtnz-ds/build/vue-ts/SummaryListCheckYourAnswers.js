import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href2: { type: String, required: true },
    rel2: { type: String, required: false },
    target2: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href3: { type: String, required: true },
    rel3: { type: String, required: false },
    target3: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href4: { type: String, required: true },
    rel4: { type: String, required: false },
    target4: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href5: { type: String, required: true },
    rel5: { type: String, required: false },
    target5: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href6: { type: String, required: true },
    rel6: { type: String, required: false },
    target6: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href7: { type: String, required: true },
    rel7: { type: String, required: false },
    target7: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href8: { type: String, required: true },
    rel8: { type: String, required: false },
    target8: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    }
  },
  computed: {
    computed__target() {
      return constants[this.target] !== undefined ? constants[this.target] : "";
    },
    computed__target2() {
      return constants[this.target2] !== undefined
        ? constants[this.target2]
        : "";
    },
    computed__target3() {
      return constants[this.target3] !== undefined
        ? constants[this.target3]
        : "";
    },
    computed__target4() {
      return constants[this.target4] !== undefined
        ? constants[this.target4]
        : "";
    },
    computed__target5() {
      return constants[this.target5] !== undefined
        ? constants[this.target5]
        : "";
    },
    computed__target6() {
      return constants[this.target6] !== undefined
        ? constants[this.target6]
        : "";
    },
    computed__target7() {
      return constants[this.target7] !== undefined
        ? constants[this.target7]
        : "";
    },
    computed__target8() {
      return constants[this.target8] !== undefined
        ? constants[this.target8]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'dl\',{staticClass:"g-summaryListCheckYourAnswers-summary-list"},[_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Name\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      Sarah Philips\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n name\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Date of birth\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      5 January 1978\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n date of birth\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Contact information\\n    \\n\\n")]),_v(" "),_m(0),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href3,"rel":rel3,"target":computed__target3}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n contact information\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Contact details\\n    \\n\\n")]),_v(" "),_m(1),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href4,"rel":rel4,"target":computed__target4}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n contact details\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Previous application number\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      502135326\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href5,"rel":rel5,"target":computed__target5}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n\\n          previous application number\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Licence type\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      For personal use\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href6,"rel":rel6,"target":computed__target6}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n licence type\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Home address\\n    \\n\\n")]),_v(" "),_m(2),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href7,"rel":rel7,"target":computed__target7}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n home address\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__key"},[_v("\\n\\n      Licence period\\n    \\n\\n")]),_v(" "),_m(3),_v(" "),_c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListCheckYourAnswers-link",attrs:{"href":href8,"rel":rel8,"target":computed__target8}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListCheckYourAnswers-visually-hidden"},[_v("\\n licence period\\n\\n")])])])])])}'
  ),
  staticRenderFns: new Function([
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      72 Guild Street\\n"),_c(\'br\'),_v("\\n\\n      London\\n"),_c(\'br\'),_v("\\n\\n      SE23 6FH\\n    \\n\\n")])}',
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_v("\\n\\n      07700 900457\\n"),_c(\'br\'),_v("\\n\\n      sarah.phillips@example.com\\n    \\n\\n")])}',
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_c(\'p\',{staticClass:"g-summaryListCheckYourAnswers-body"},[_v("\\n\\n        72 Guild Street\\n"),_c(\'br\'),_v("\\n\\n        London\\n"),_c(\'br\'),_v("\\n\\n        SE23 6FH\\n      \\n\\n")])])}',
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListCheckYourAnswers-summary-list__value"},[_c(\'p\',{staticClass:"g-summaryListCheckYourAnswers-body"},[_v("\\n\\n        This is a longer paragraph of text provided by the user to provide\\n        additional information.\\n      \\n\\n")]),_v(" "),_c(\'p\',{staticClass:"g-summaryListCheckYourAnswers-body"},[_v("\\n\\n        This is a second paragraph of text provided by the user.\\n      \\n\\n")])])}'
  ])
});
