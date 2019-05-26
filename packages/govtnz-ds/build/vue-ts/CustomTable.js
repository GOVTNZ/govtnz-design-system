import Vue from "vue";

const constants = {
  target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target9: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target10: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target11: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
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
    },
    href9: { type: String, required: true },
    rel9: { type: String, required: false },
    target9: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href10: { type: String, required: true },
    rel10: { type: String, required: false },
    target10: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href11: { type: String, required: true },
    rel11: { type: String, required: false },
    target11: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href12: { type: String, required: true },
    rel12: { type: String, required: false },
    target12: {
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
    },
    computed__target9() {
      return constants[this.target9] !== undefined
        ? constants[this.target9]
        : "";
    },
    computed__target10() {
      return constants[this.target10] !== undefined
        ? constants[this.target10]
        : "";
    },
    computed__target11() {
      return constants[this.target11] !== undefined
        ? constants[this.target11]
        : "";
    },
    computed__target12() {
      return constants[this.target12] !== undefined
        ? constants[this.target12]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-customTable-fragment"},[_c(\'table\',{staticClass:"g-customTable-table g-!-font-size-16"},[_m(0),_v(" "),_c(\'tbody\',{staticClass:"g-customTable-table__body"},[_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n        An individual\\n        \\n          \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\nForm V888\\n\\n")])]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n        A company\\n        \\n          \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\nForm V8882\\n\\n")])]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n        \\n          A company that issues parking or trespass charge notices\\n        \\n        \\n          \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href3,"rel":rel3,"target":computed__target3}},[_v("\\nForm V8883\\n\\n")])])])]),_v(" "),_m(1),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n    Who is making the request\\n    Form\\n  \\n\\n")]),_v("\\n\\n\\n  Who is making the request\\n  Form\\n  \\n"),_c(\'tbody\',{staticClass:"g-customTable-table__body"},[_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n      An individual\\n      \\n        \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href4,"rel":rel4,"target":computed__target4}},[_v("\\nForm V888\\n\\n")])]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n      A company\\n      \\n        \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href5,"rel":rel5,"target":computed__target5}},[_v("\\nForm V8882\\n\\n")])]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n      \\n        A company that issues parking or trespass charge notices\\n      \\n      \\n        \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href6,"rel":rel6,"target":computed__target6}},[_v("\\nForm V8883\\n\\n")])])]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n    An individual\\n    \\n      \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href7,"rel":rel7,"target":computed__target7}},[_v("\\nForm V888\\n\\n")])]),_v("\\n\\n\\n  An individual\\n  \\n    \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href8,"rel":rel8,"target":computed__target8}},[_v("\\nForm V888\\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n    A company\\n    \\n      \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href9,"rel":rel9,"target":computed__target9}},[_v("\\nForm V8882\\n\\n")])]),_v("\\n\\n\\n  A company\\n  \\n    \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href10,"rel":rel10,"target":computed__target10}},[_v("\\nForm V8882\\n\\n")]),_v(" "),_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n    \\n      A company that issues parking or trespass charge notices\\n    \\n    \\n      \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href11,"rel":rel11,"target":computed__target11}},[_v("\\nForm V8883\\n\\n")])]),_v("\\n\\n\\n  \\n    A company that issues parking or trespass charge notices\\n  \\n  \\n    \\n"),_c(\'a\',{staticClass:"g-customTable-link",attrs:{"href":href12,"rel":rel12,"target":computed__target12}},[_v("\\nForm V8883\\n\\n")])])}'
  ),
  staticRenderFns: new Function([
    'with(this){return _c(\'thead\',{staticClass:"g-customTable-table__head"},[_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n        \\n          Who is making the request\\n        \\n        Form\\n      \\n\\n")])])}',
    'with(this){return _c(\'thead\',{staticClass:"g-customTable-table__head"},[_c(\'tr\',{staticClass:"g-customTable-table__row"},[_v("\\n\\n      Who is making the request\\n      Form\\n    \\n\\n")])])}'
  ])
});
