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
  target12: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target13: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target14: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target15: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target16: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target17: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target18: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target19: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target20: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target21: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target22: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target23: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target24: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target25: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target26: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target27: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target28: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target29: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target30: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target31: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target32: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target33: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target34: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target35: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target36: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target37: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target38: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target39: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target40: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target41: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target42: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target43: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target44: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target45: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target46: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target47: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target48: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target49: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target50: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target51: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target52: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target53: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target54: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target55: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target56: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target57: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target58: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target59: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target60: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target61: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target62: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target63: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target64: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target65: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target66: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target67: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
  target68: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
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
    },
    href13: { type: String, required: true },
    rel13: { type: String, required: false },
    target13: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href14: { type: String, required: true },
    rel14: { type: String, required: false },
    target14: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href15: { type: String, required: true },
    rel15: { type: String, required: false },
    target15: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href16: { type: String, required: true },
    rel16: { type: String, required: false },
    target16: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href17: { type: String, required: true },
    rel17: { type: String, required: false },
    target17: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href18: { type: String, required: true },
    rel18: { type: String, required: false },
    target18: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href19: { type: String, required: true },
    rel19: { type: String, required: false },
    target19: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href20: { type: String, required: true },
    rel20: { type: String, required: false },
    target20: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href21: { type: String, required: true },
    rel21: { type: String, required: false },
    target21: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href22: { type: String, required: true },
    rel22: { type: String, required: false },
    target22: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href23: { type: String, required: true },
    rel23: { type: String, required: false },
    target23: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href24: { type: String, required: true },
    rel24: { type: String, required: false },
    target24: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href25: { type: String, required: true },
    rel25: { type: String, required: false },
    target25: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href26: { type: String, required: true },
    rel26: { type: String, required: false },
    target26: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href27: { type: String, required: true },
    rel27: { type: String, required: false },
    target27: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href28: { type: String, required: true },
    rel28: { type: String, required: false },
    target28: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href29: { type: String, required: true },
    rel29: { type: String, required: false },
    target29: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href30: { type: String, required: true },
    rel30: { type: String, required: false },
    target30: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href31: { type: String, required: true },
    rel31: { type: String, required: false },
    target31: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href32: { type: String, required: true },
    rel32: { type: String, required: false },
    target32: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href33: { type: String, required: true },
    rel33: { type: String, required: false },
    target33: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href34: { type: String, required: true },
    rel34: { type: String, required: false },
    target34: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href35: { type: String, required: true },
    rel35: { type: String, required: false },
    target35: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href36: { type: String, required: true },
    rel36: { type: String, required: false },
    target36: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href37: { type: String, required: true },
    rel37: { type: String, required: false },
    target37: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href38: { type: String, required: true },
    rel38: { type: String, required: false },
    target38: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href39: { type: String, required: true },
    rel39: { type: String, required: false },
    target39: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href40: { type: String, required: true },
    rel40: { type: String, required: false },
    target40: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href41: { type: String, required: true },
    rel41: { type: String, required: false },
    target41: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href42: { type: String, required: true },
    rel42: { type: String, required: false },
    target42: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href43: { type: String, required: true },
    rel43: { type: String, required: false },
    target43: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href44: { type: String, required: true },
    rel44: { type: String, required: false },
    target44: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href45: { type: String, required: true },
    rel45: { type: String, required: false },
    target45: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href46: { type: String, required: true },
    rel46: { type: String, required: false },
    target46: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href47: { type: String, required: true },
    rel47: { type: String, required: false },
    target47: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href48: { type: String, required: true },
    rel48: { type: String, required: false },
    target48: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href49: { type: String, required: true },
    rel49: { type: String, required: false },
    target49: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href50: { type: String, required: true },
    rel50: { type: String, required: false },
    target50: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href51: { type: String, required: true },
    rel51: { type: String, required: false },
    target51: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href52: { type: String, required: true },
    rel52: { type: String, required: false },
    target52: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href53: { type: String, required: true },
    rel53: { type: String, required: false },
    target53: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href54: { type: String, required: true },
    rel54: { type: String, required: false },
    target54: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href55: { type: String, required: true },
    rel55: { type: String, required: false },
    target55: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href56: { type: String, required: true },
    rel56: { type: String, required: false },
    target56: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href57: { type: String, required: true },
    rel57: { type: String, required: false },
    target57: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href58: { type: String, required: true },
    rel58: { type: String, required: false },
    target58: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href59: { type: String, required: true },
    rel59: { type: String, required: false },
    target59: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href60: { type: String, required: true },
    rel60: { type: String, required: false },
    target60: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href61: { type: String, required: true },
    rel61: { type: String, required: false },
    target61: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href62: { type: String, required: true },
    rel62: { type: String, required: false },
    target62: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href63: { type: String, required: true },
    rel63: { type: String, required: false },
    target63: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href64: { type: String, required: true },
    rel64: { type: String, required: false },
    target64: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href65: { type: String, required: true },
    rel65: { type: String, required: false },
    target65: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href66: { type: String, required: true },
    rel66: { type: String, required: false },
    target66: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href67: { type: String, required: true },
    rel67: { type: String, required: false },
    target67: {
      type: String,
      validator: value => {
        return ["Blank", "Top", "Self", "Parent"].indexOf(value) !== -1;
      },
      required: false
    },
    href68: { type: String, required: true },
    rel68: { type: String, required: false },
    target68: {
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
    },
    computed__target13() {
      return constants[this.target13] !== undefined
        ? constants[this.target13]
        : "";
    },
    computed__target14() {
      return constants[this.target14] !== undefined
        ? constants[this.target14]
        : "";
    },
    computed__target15() {
      return constants[this.target15] !== undefined
        ? constants[this.target15]
        : "";
    },
    computed__target16() {
      return constants[this.target16] !== undefined
        ? constants[this.target16]
        : "";
    },
    computed__target17() {
      return constants[this.target17] !== undefined
        ? constants[this.target17]
        : "";
    },
    computed__target18() {
      return constants[this.target18] !== undefined
        ? constants[this.target18]
        : "";
    },
    computed__target19() {
      return constants[this.target19] !== undefined
        ? constants[this.target19]
        : "";
    },
    computed__target20() {
      return constants[this.target20] !== undefined
        ? constants[this.target20]
        : "";
    },
    computed__target21() {
      return constants[this.target21] !== undefined
        ? constants[this.target21]
        : "";
    },
    computed__target22() {
      return constants[this.target22] !== undefined
        ? constants[this.target22]
        : "";
    },
    computed__target23() {
      return constants[this.target23] !== undefined
        ? constants[this.target23]
        : "";
    },
    computed__target24() {
      return constants[this.target24] !== undefined
        ? constants[this.target24]
        : "";
    },
    computed__target25() {
      return constants[this.target25] !== undefined
        ? constants[this.target25]
        : "";
    },
    computed__target26() {
      return constants[this.target26] !== undefined
        ? constants[this.target26]
        : "";
    },
    computed__target27() {
      return constants[this.target27] !== undefined
        ? constants[this.target27]
        : "";
    },
    computed__target28() {
      return constants[this.target28] !== undefined
        ? constants[this.target28]
        : "";
    },
    computed__target29() {
      return constants[this.target29] !== undefined
        ? constants[this.target29]
        : "";
    },
    computed__target30() {
      return constants[this.target30] !== undefined
        ? constants[this.target30]
        : "";
    },
    computed__target31() {
      return constants[this.target31] !== undefined
        ? constants[this.target31]
        : "";
    },
    computed__target32() {
      return constants[this.target32] !== undefined
        ? constants[this.target32]
        : "";
    },
    computed__target33() {
      return constants[this.target33] !== undefined
        ? constants[this.target33]
        : "";
    },
    computed__target34() {
      return constants[this.target34] !== undefined
        ? constants[this.target34]
        : "";
    },
    computed__target35() {
      return constants[this.target35] !== undefined
        ? constants[this.target35]
        : "";
    },
    computed__target36() {
      return constants[this.target36] !== undefined
        ? constants[this.target36]
        : "";
    },
    computed__target37() {
      return constants[this.target37] !== undefined
        ? constants[this.target37]
        : "";
    },
    computed__target38() {
      return constants[this.target38] !== undefined
        ? constants[this.target38]
        : "";
    },
    computed__target39() {
      return constants[this.target39] !== undefined
        ? constants[this.target39]
        : "";
    },
    computed__target40() {
      return constants[this.target40] !== undefined
        ? constants[this.target40]
        : "";
    },
    computed__target41() {
      return constants[this.target41] !== undefined
        ? constants[this.target41]
        : "";
    },
    computed__target42() {
      return constants[this.target42] !== undefined
        ? constants[this.target42]
        : "";
    },
    computed__target43() {
      return constants[this.target43] !== undefined
        ? constants[this.target43]
        : "";
    },
    computed__target44() {
      return constants[this.target44] !== undefined
        ? constants[this.target44]
        : "";
    },
    computed__target45() {
      return constants[this.target45] !== undefined
        ? constants[this.target45]
        : "";
    },
    computed__target46() {
      return constants[this.target46] !== undefined
        ? constants[this.target46]
        : "";
    },
    computed__target47() {
      return constants[this.target47] !== undefined
        ? constants[this.target47]
        : "";
    },
    computed__target48() {
      return constants[this.target48] !== undefined
        ? constants[this.target48]
        : "";
    },
    computed__target49() {
      return constants[this.target49] !== undefined
        ? constants[this.target49]
        : "";
    },
    computed__target50() {
      return constants[this.target50] !== undefined
        ? constants[this.target50]
        : "";
    },
    computed__target51() {
      return constants[this.target51] !== undefined
        ? constants[this.target51]
        : "";
    },
    computed__target52() {
      return constants[this.target52] !== undefined
        ? constants[this.target52]
        : "";
    },
    computed__target53() {
      return constants[this.target53] !== undefined
        ? constants[this.target53]
        : "";
    },
    computed__target54() {
      return constants[this.target54] !== undefined
        ? constants[this.target54]
        : "";
    },
    computed__target55() {
      return constants[this.target55] !== undefined
        ? constants[this.target55]
        : "";
    },
    computed__target56() {
      return constants[this.target56] !== undefined
        ? constants[this.target56]
        : "";
    },
    computed__target57() {
      return constants[this.target57] !== undefined
        ? constants[this.target57]
        : "";
    },
    computed__target58() {
      return constants[this.target58] !== undefined
        ? constants[this.target58]
        : "";
    },
    computed__target59() {
      return constants[this.target59] !== undefined
        ? constants[this.target59]
        : "";
    },
    computed__target60() {
      return constants[this.target60] !== undefined
        ? constants[this.target60]
        : "";
    },
    computed__target61() {
      return constants[this.target61] !== undefined
        ? constants[this.target61]
        : "";
    },
    computed__target62() {
      return constants[this.target62] !== undefined
        ? constants[this.target62]
        : "";
    },
    computed__target63() {
      return constants[this.target63] !== undefined
        ? constants[this.target63]
        : "";
    },
    computed__target64() {
      return constants[this.target64] !== undefined
        ? constants[this.target64]
        : "";
    },
    computed__target65() {
      return constants[this.target65] !== undefined
        ? constants[this.target65]
        : "";
    },
    computed__target66() {
      return constants[this.target66] !== undefined
        ? constants[this.target66]
        : "";
    },
    computed__target67() {
      return constants[this.target67] !== undefined
        ? constants[this.target67]
        : "";
    },
    computed__target68() {
      return constants[this.target68] !== undefined
        ? constants[this.target68]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'dl\',{staticClass:"g-summaryListExtreme-summary-list"},[_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      Name\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_v("\\n\\n      Barnaby Marmaduke Aloysius Benjy Cobweb Dartagnan Egbert Felix Gaspar\\n      Humbert Ignatius Jayden Kasper Leroy Maximilian Neddy Obiajulu Pepin\\n      Quilliam Rosencrantz Sexton Teddy Upwood Vivatma Wayland Xylon Yardley\\n      Zachary Usansky\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'ul\',{staticClass:"g-summaryListExtreme-summary-list__actions-list"},[_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href,"rel":rel,"target":computed__target}},[_v("\\n Buy\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href2,"rel":rel2,"target":computed__target2}},[_v("\\n Use\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href3,"rel":rel3,"target":computed__target3}},[_v("\\n Break\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href4,"rel":rel4,"target":computed__target4}},[_v("\\n Fix\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href5,"rel":rel5,"target":computed__target5}},[_v("\\n Trash\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href6,"rel":rel6,"target":computed__target6}},[_v("\\n Change\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href7,"rel":rel7,"target":computed__target7}},[_v("\\n Mail\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href8,"rel":rel8,"target":computed__target8}},[_v("\\n Upgrade\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href9,"rel":rel9,"target":computed__target9}},[_v("\\n Charge\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href10,"rel":rel10,"target":computed__target10}},[_v("\\n Point\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href11,"rel":rel11,"target":computed__target11}},[_v("\\n Coom\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href12,"rel":rel12,"target":computed__target12}},[_v("\\n Press\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href13,"rel":rel13,"target":computed__target13}},[_v("\\n Snap\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href14,"rel":rel14,"target":computed__target14}},[_v("\\n Work\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href15,"rel":rel15,"target":computed__target15}},[_v("\\n Quick\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href16,"rel":rel16,"target":computed__target16}},[_v("\\n Erase\\n\\n")])])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      Long website address\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href17,"rel":rel17,"target":computed__target17}},[_v("\\nhttps://cs.wikipedia.org/wiki/Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch\\n\\n")])]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href18,"rel":rel18,"target":computed__target18}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListExtreme-visually-hidden"},[_v("\\n long website address\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      Long email address\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href19,"rel":rel19,"target":computed__target19}},[_v("\\nwebmaster@llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.com\\n\\n")])]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href20,"rel":rel20,"target":computed__target20}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListExtreme-visually-hidden"},[_v("\\n long email address\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      No wrapping allowed\\n    \\n\\n")]),_v(" "),_m(0),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href21,"rel":rel21,"target":computed__target21}},[_v("\\n\\n        Change\\n"),_c(\'span\',{staticClass:"g-summaryListExtreme-visually-hidden"},[_v("\\n no wrapping allowed\\n\\n")])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      Pneumonoultramicroscopicsilicovolcanoconiosis\\n    \\n\\n")]),_v(" "),_m(1),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'ul\',{staticClass:"g-summaryListExtreme-summary-list__actions-list"},[_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href22,"rel":rel22,"target":computed__target22}},[_v("\\n Write\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href23,"rel":rel23,"target":computed__target23}},[_v("\\n Cut\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href24,"rel":rel24,"target":computed__target24}},[_v("\\n Paste\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href25,"rel":rel25,"target":computed__target25}},[_v("\\n Save\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href26,"rel":rel26,"target":computed__target26}},[_v("\\n Load\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href27,"rel":rel27,"target":computed__target27}},[_v("\\n Check\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href28,"rel":rel28,"target":computed__target28}},[_v("\\n Quick\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href29,"rel":rel29,"target":computed__target29}},[_v("\\n Rewrite\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href30,"rel":rel30,"target":computed__target30}},[_v("\\n Plug\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href31,"rel":rel31,"target":computed__target31}},[_v("\\n Play\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href32,"rel":rel32,"target":computed__target32}},[_v("\\n Burn\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href33,"rel":rel33,"target":computed__target33}},[_v("\\n Rip\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href34,"rel":rel34,"target":computed__target34}},[_v("\\n Drag and drop\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href35,"rel":rel35,"target":computed__target35}},[_v("\\n Zip\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href36,"rel":rel36,"target":computed__target36}},[_v("\\n Unzip\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href37,"rel":rel37,"target":computed__target37}},[_v("\\n Lock\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href38,"rel":rel38,"target":computed__target38}},[_v("\\n Fill\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href39,"rel":rel39,"target":computed__target39}},[_v("\\n Curl\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href40,"rel":rel40,"target":computed__target40}},[_v("\\n Find\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href41,"rel":rel41,"target":computed__target41}},[_v("\\n View\\n\\n")])])])])]),_v(" "),_c(\'div\',{staticClass:"g-summaryListExtreme-summary-list__row"},[_c(\'dt\',{staticClass:"g-summaryListExtreme-summary-list__key"},[_v("\\n\\n      Its vanished trees, the trees that had made way for Gatsby’s house,\\n      Pneumonoultramicroscopicsilicovolcanoconiosis had once pandered in\\n      whispers to the last and greatest of all human dreams; for a transitory\\n      enchanted moment man must have held his breath in the presence of this\\n      continent, compelled into an aesthetic contemplation he neither understood\\n      nor desired, face to face for the last time in history with something\\n      commensurate to his capacity for wonder.\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_v("\\n\\n      The Great Gatsby\\n    \\n\\n")]),_v(" "),_c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__actions"},[_c(\'ul\',{staticClass:"g-summaryListExtreme-summary-list__actions-list"},[_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href42,"rel":rel42,"target":computed__target42}},[_v("\\n Code\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href43,"rel":rel43,"target":computed__target43}},[_v("\\n Jam\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href44,"rel":rel44,"target":computed__target44}},[_v("\\n Unlock\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href45,"rel":rel45,"target":computed__target45}},[_v("\\n Surf\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href46,"rel":rel46,"target":computed__target46}},[_v("\\n Scroll\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href47,"rel":rel47,"target":computed__target47}},[_v("\\n Pose\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href48,"rel":rel48,"target":computed__target48}},[_v("\\n Click\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href49,"rel":rel49,"target":computed__target49}},[_v("\\n Cross\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href50,"rel":rel50,"target":computed__target50}},[_v("\\n Crack\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href51,"rel":rel51,"target":computed__target51}},[_v("\\n Twitch\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href52,"rel":rel52,"target":computed__target52}},[_v("\\n Update\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href53,"rel":rel53,"target":computed__target53}},[_v("\\n Name\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href54,"rel":rel54,"target":computed__target54}},[_v("\\n Read\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href55,"rel":rel55,"target":computed__target55}},[_v("\\n Tune\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href56,"rel":rel56,"target":computed__target56}},[_v("\\n Print\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href57,"rel":rel57,"target":computed__target57}},[_v("\\n Scan\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href58,"rel":rel58,"target":computed__target58}},[_v("\\n Send\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href59,"rel":rel59,"target":computed__target59}},[_v("\\n Fax\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href60,"rel":rel60,"target":computed__target60}},[_v("\\n Rename\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href61,"rel":rel61,"target":computed__target61}},[_v("\\n Touch\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href62,"rel":rel62,"target":computed__target62}},[_v("\\n Bring\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href63,"rel":rel63,"target":computed__target63}},[_v("\\n Pay\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href64,"rel":rel64,"target":computed__target64}},[_v("\\n Watch\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href65,"rel":rel65,"target":computed__target65}},[_v("\\n Turn\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href66,"rel":rel66,"target":computed__target66}},[_v("\\n Leave\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href67,"rel":rel67,"target":computed__target67}},[_v("\\n Stop\\n\\n")])]),_v(" "),_c(\'li\',{staticClass:"g-summaryListExtreme-summary-list__actions-list-item"},[_c(\'a\',{staticClass:"g-summaryListExtreme-link",attrs:{"href":href68,"rel":rel68,"target":computed__target68}},[_v("\\n Format\\n\\n")])])])])])])}'
  ),
  staticRenderFns: new Function([
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_c(\'p\',{staticClass:"g-summaryListExtreme-body",staticStyle:{"white-space":"nowrap"}},[_v("\\n\\n        michelle.longish.name@example.com\\n      \\n\\n")])])}',
    'with(this){return _c(\'dd\',{staticClass:"g-summaryListExtreme-summary-list__value"},[_c(\'p\',{staticClass:"g-summaryListExtreme-body"},[_v("\\n\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis\\n        consequat diam. Duis efficitur justo at congue iaculis. Quisque\\n        scelerisque ornare justo nec congue. Duis egestas felis nibh, eu cursus\\n        metus rutrum eget. In dictum lectus diam, dapibus ullamcorper risus\\n        gravida a. Vestibulum tempor mattis sapien, at auctor tellus dignissim\\n        non. Praesent dictum felis nec diam tempor, vel lobortis leo ultricies.\\n      \\n\\n")]),_v(" "),_c(\'p\',{staticClass:"g-summaryListExtreme-body"},[_v("\\n\\n        Suspendisse potenti. Aliquam dictum eu ipsum sed facilisis. Maecenas\\n        hendrerit est eget ultrices venenatis. Nam ex nisl, venenatis eget\\n        molestie quis, hendrerit id tellus. Morbi et posuere ex, vel interdum\\n        sapien. Mauris ac mattis turpis, interdum eleifend erat. Morbi eget\\n        efficitur lectus. Sed suscipit laoreet ipsum et iaculis. Integer ornare\\n        ipsum quis aliquet scelerisque. Proin venenatis dictum suscipit. Nunc\\n        tristique, felis quis fermentum rhoncus, tortor augue egestas ipsum, non\\n        porttitor nulla odio vitae purus. Interdum et malesuada fames ac ante\\n        ipsum primis in faucibus.\\n      \\n\\n")])])}'
  ])
});
