<template>
  <div v-bind:class="computed__class">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  xs: {
    "1": "g-flex-col-xs-1",
    "2": "g-flex-col-xs-2",
    "3": "g-flex-col-xs-3",
    "4": "g-flex-col-xs-4",
    "5": "g-flex-col-xs-5",
    "6": "g-flex-col-xs-6",
    "7": "g-flex-col-xs-7",
    "8": "g-flex-col-xs-8",
    "9": "g-flex-col-xs-9",
    "10": "g-flex-col-xs-10",
    "11": "g-flex-col-xs-11",
    "12": "g-flex-col-xs-12",
    auto: "g-flex-col-xs"
  },
  sm: {
    "1": "g-flex-col-sm-1",
    "2": "g-flex-col-sm-2",
    "3": "g-flex-col-sm-3",
    "4": "g-flex-col-sm-4",
    "5": "g-flex-col-sm-5",
    "6": "g-flex-col-sm-6",
    "7": "g-flex-col-sm-7",
    "8": "g-flex-col-sm-8",
    "9": "g-flex-col-sm-9",
    "10": "g-flex-col-sm-10",
    "11": "g-flex-col-sm-11",
    "12": "g-flex-col-sm-12",
    auto: "g-flex-col-sm"
  },
  md: {
    "1": "g-flex-col-md-1",
    "2": "g-flex-col-md-2",
    "3": "g-flex-col-md-3",
    "4": "g-flex-col-md-4",
    "5": "g-flex-col-md-5",
    "6": "g-flex-col-md-6",
    "7": "g-flex-col-md-7",
    "8": "g-flex-col-md-8",
    "9": "g-flex-col-md-9",
    "10": "g-flex-col-md-10",
    "11": "g-flex-col-md-11",
    "12": "g-flex-col-md-12",
    auto: "g-flex-col-md"
  },
  lg: {
    "1": "g-flex-col-lg-1",
    "2": "g-flex-col-lg-2",
    "3": "g-flex-col-lg-3",
    "4": "g-flex-col-lg-4",
    "5": "g-flex-col-lg-5",
    "6": "g-flex-col-lg-6",
    "7": "g-flex-col-lg-7",
    "8": "g-flex-col-lg-8",
    "9": "g-flex-col-lg-9",
    "10": "g-flex-col-lg-10",
    "11": "g-flex-col-lg-11",
    "12": "g-flex-col-lg-12",
    auto: "g-flex-col-md"
  },
  xsOffset: {
    "0": "g-flex-col-xs-offset-0",
    "1": "g-flex-col-xs-offset-1",
    "2": "g-flex-col-xs-offset-2",
    "3": "g-flex-col-xs-offset-3",
    "4": "g-flex-col-xs-offset-4",
    "5": "g-flex-col-xs-offset-5",
    "6": "g-flex-col-xs-offset-6",
    "7": "g-flex-col-xs-offset-7",
    "8": "g-flex-col-xs-offset-8",
    "9": "g-flex-col-xs-offset-9",
    "10": "g-flex-col-xs-offset-10",
    "11": "g-flex-col-xs-offset-11",
    "12": "g-flex-col-xs-offset-12"
  },
  smOffset: {
    "0": "g-flex-col-sm-offset-0",
    "1": "g-flex-col-sm-offset-1",
    "2": "g-flex-col-sm-offset-2",
    "3": "g-flex-col-sm-offset-3",
    "4": "g-flex-col-sm-offset-4",
    "5": "g-flex-col-sm-offset-5",
    "6": "g-flex-col-sm-offset-6",
    "7": "g-flex-col-sm-offset-7",
    "8": "g-flex-col-sm-offset-8",
    "9": "g-flex-col-sm-offset-9",
    "10": "g-flex-col-sm-offset-10",
    "11": "g-flex-col-sm-offset-11",
    "12": "g-flex-col-sm-offset-12"
  },
  mdOffset: {
    "0": "g-flex-col-md-offset-0",
    "1": "g-flex-col-md-offset-1",
    "2": "g-flex-col-md-offset-2",
    "3": "g-flex-col-md-offset-3",
    "4": "g-flex-col-md-offset-4",
    "5": "g-flex-col-md-offset-5",
    "6": "g-flex-col-md-offset-6",
    "7": "g-flex-col-md-offset-7",
    "8": "g-flex-col-md-offset-8",
    "9": "g-flex-col-md-offset-9",
    "10": "g-flex-col-md-offset-10",
    "11": "g-flex-col-md-offset-11",
    "12": "g-flex-col-md-offset-12"
  },
  lgOffset: {
    "0": "g-flex-col-lg-offset-0",
    "1": "g-flex-col-lg-offset-1",
    "2": "g-flex-col-lg-offset-2",
    "3": "g-flex-col-lg-offset-3",
    "4": "g-flex-col-lg-offset-4",
    "5": "g-flex-col-lg-offset-5",
    "6": "g-flex-col-lg-offset-6",
    "7": "g-flex-col-lg-offset-7",
    "8": "g-flex-col-lg-offset-8",
    "9": "g-flex-col-lg-offset-9",
    "10": "g-flex-col-lg-offset-10",
    "11": "g-flex-col-lg-offset-11",
    "12": "g-flex-col-lg-offset-12"
  }
};

export default Vue.extend({
  props: {
    xs: {
      type: String,
      validator: value => {
        return (
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "auto"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    sm: {
      type: String,
      validator: value => {
        return (
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "auto"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    md: {
      type: String,
      validator: value => {
        return (
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "auto"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    lg: {
      type: String,
      validator: value => {
        return (
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "auto"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    xsOffset: {
      type: String,
      validator: value => {
        return (
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ].indexOf(value) !== -1
        );
      },
      required: false
    },
    smOffset: {
      type: String,
      validator: value => {
        return (
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ].indexOf(value) !== -1
        );
      },
      required: false
    },
    mdOffset: {
      type: String,
      validator: value => {
        return (
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ].indexOf(value) !== -1
        );
      },
      required: false
    },
    lgOffset: {
      type: String,
      validator: value => {
        return (
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ].indexOf(value) !== -1
        );
      },
      required: false
    },
    isReversed: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Content..." }
  },
  computed: {
    computed__class() {
      return (
        "g-flex-col" +
        (constants.xs[this.xs] !== undefined
          ? ` ${constants.xs[this.xs]}`
          : "") +
        (constants.sm[this.sm] !== undefined
          ? ` ${constants.sm[this.sm]}`
          : "") +
        (constants.md[this.md] !== undefined
          ? ` ${constants.md[this.md]}`
          : "") +
        (constants.lg[this.lg] !== undefined
          ? ` ${constants.lg[this.lg]}`
          : "") +
        (constants.xsOffset[this.xsOffset] !== undefined
          ? ` ${constants.xsOffset[this.xsOffset]}`
          : "") +
        (constants.smOffset[this.smOffset] !== undefined
          ? ` ${constants.smOffset[this.smOffset]}`
          : "") +
        (constants.mdOffset[this.mdOffset] !== undefined
          ? ` ${constants.mdOffset[this.mdOffset]}`
          : "") +
        (constants.lgOffset[this.lgOffset] !== undefined
          ? ` ${constants.lgOffset[this.lgOffset]}`
          : "") +
        (this.isReversed ? " g-flex-reverse" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-flex-col.g-flex-reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
}
.g-flex-col-xs,
.g-flex-col-xs-1,
.g-flex-col-xs-10,
.g-flex-col-xs-11,
.g-flex-col-xs-12,
.g-flex-col-xs-2,
.g-flex-col-xs-3,
.g-flex-col-xs-4,
.g-flex-col-xs-5,
.g-flex-col-xs-6,
.g-flex-col-xs-7,
.g-flex-col-xs-8,
.g-flex-col-xs-9,
.g-flex-col-xs-offset-0,
.g-flex-col-xs-offset-1,
.g-flex-col-xs-offset-10,
.g-flex-col-xs-offset-11,
.g-flex-col-xs-offset-12,
.g-flex-col-xs-offset-2,
.g-flex-col-xs-offset-3,
.g-flex-col-xs-offset-4,
.g-flex-col-xs-offset-5,
.g-flex-col-xs-offset-6,
.g-flex-col-xs-offset-7,
.g-flex-col-xs-offset-8,
.g-flex-col-xs-offset-9 {
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.g-flex-col-xs {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  max-width: 100%;
}
.g-flex-col-xs-1 {
  -ms-flex-preferred-size: 8.33333333%;
  flex-basis: 8.33333333%;
  max-width: 8.33333333%;
}
.g-flex-col-xs-2 {
  -ms-flex-preferred-size: 16.66666667%;
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
}
.g-flex-col-xs-3 {
  -ms-flex-preferred-size: 25%;
  flex-basis: 25%;
  max-width: 25%;
}
.g-flex-col-xs-4 {
  -ms-flex-preferred-size: 33.33333333%;
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
}
.g-flex-col-xs-5 {
  -ms-flex-preferred-size: 41.66666667%;
  flex-basis: 41.66666667%;
  max-width: 41.66666667%;
}
.g-flex-col-xs-6 {
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-width: 50%;
}
.g-flex-col-xs-7 {
  -ms-flex-preferred-size: 58.33333333%;
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
}
.g-flex-col-xs-8 {
  -ms-flex-preferred-size: 66.66666667%;
  flex-basis: 66.66666667%;
  max-width: 66.66666667%;
}
.g-flex-col-xs-9 {
  -ms-flex-preferred-size: 75%;
  flex-basis: 75%;
  max-width: 75%;
}
.g-flex-col-xs-10 {
  -ms-flex-preferred-size: 83.33333333%;
  flex-basis: 83.33333333%;
  max-width: 83.33333333%;
}
.g-flex-col-xs-11 {
  -ms-flex-preferred-size: 91.66666667%;
  flex-basis: 91.66666667%;
  max-width: 91.66666667%;
}
.g-flex-col-xs-12 {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}
.g-flex-col-xs-offset-0 {
  margin-left: 0;
}
.g-flex-col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.g-flex-col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.g-flex-col-xs-offset-3 {
  margin-left: 25%;
}
.g-flex-col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.g-flex-col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.g-flex-col-xs-offset-6 {
  margin-left: 50%;
}
.g-flex-col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.g-flex-col-xs-offset-9 {
  margin-left: 75%;
}
.g-flex-col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.g-flex-col-xs-offset-11 {
  margin-left: 91.66666667%;
}
@media only screen and (min-width: 48em) {
  .g-flex-col-sm,
  .g-flex-col-sm-1,
  .g-flex-col-sm-2,
  .g-flex-col-sm-3,
  .g-flex-col-sm-4,
  .g-flex-col-sm-5,
  .g-flex-col-sm-6,
  .g-flex-col-sm-7,
  .g-flex-col-sm-8,
  .g-flex-col-sm-9,
  .g-flex-col-sm-10,
  .g-flex-col-sm-11,
  .g-flex-col-sm-12,
  .g-flex-col-sm-offset-0,
  .g-flex-col-sm-offset-1,
  .g-flex-col-sm-offset-10,
  .g-flex-col-sm-offset-11,
  .g-flex-col-sm-offset-12,
  .g-flex-col-sm-offset-2,
  .g-flex-col-sm-offset-3,
  .g-flex-col-sm-offset-4,
  .g-flex-col-sm-offset-5,
  .g-flex-col-sm-offset-6,
  .g-flex-col-sm-offset-7,
  .g-flex-col-sm-offset-8,
  .g-flex-col-sm-offset-9 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .g-flex-col-sm {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }
  .g-flex-col-sm-1 {
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }
  .g-flex-col-sm-2 {
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }
  .g-flex-col-sm-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .g-flex-col-sm-4 {
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }
  .g-flex-col-sm-5 {
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }
  .g-flex-col-sm-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .g-flex-col-sm-7 {
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }
  .g-flex-col-sm-8 {
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }
  .g-flex-col-sm-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .g-flex-col-sm-10 {
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }
  .g-flex-col-sm-11 {
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }
  .g-flex-col-sm-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
  .g-flex-col-sm-offset-0 {
    margin-left: 0;
  }
  .g-flex-col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .g-flex-col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .g-flex-col-sm-offset-3 {
    margin-left: 25%;
  }
  .g-flex-col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .g-flex-col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .g-flex-col-sm-offset-6 {
    margin-left: 50%;
  }
  .g-flex-col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .g-flex-col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .g-flex-col-sm-offset-9 {
    margin-left: 75%;
  }
  .g-flex-col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .g-flex-col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
}
@media only screen and (min-width: 64em) {
  .g-flex-col-md,
  .g-flex-col-md-1,
  .g-flex-col-md-10,
  .g-flex-col-md-11,
  .g-flex-col-md-12,
  .g-flex-col-md-2,
  .g-flex-col-md-3,
  .g-flex-col-md-4,
  .g-flex-col-md-5,
  .g-flex-col-md-6,
  .g-flex-col-md-7,
  .g-flex-col-md-8,
  .g-flex-col-md-9,
  .g-flex-col-md-offset-0,
  .g-flex-col-md-offset-1,
  .g-flex-col-md-offset-10,
  .g-flex-col-md-offset-11,
  .g-flex-col-md-offset-12,
  .g-flex-col-md-offset-2,
  .g-flex-col-md-offset-3,
  .g-flex-col-md-offset-4,
  .g-flex-col-md-offset-5,
  .g-flex-col-md-offset-6,
  .g-flex-col-md-offset-7,
  .g-flex-col-md-offset-8,
  .g-flex-col-md-offset-9 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .g-flex-col-md {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }
  .g-flex-col-md-1 {
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }
  .g-flex-col-md-2 {
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }
  .g-flex-col-md-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .g-flex-col-md-4 {
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }
  .g-flex-col-md-5 {
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }
  .g-flex-col-md-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .g-flex-col-md-7 {
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }
  .g-flex-col-md-8 {
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }
  .g-flex-col-md-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .g-flex-col-md-10 {
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }
  .g-flex-col-md-11 {
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }
  .g-flex-col-md-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
  .g-flex-col-md-offset-0 {
    margin-left: 0;
  }
  .g-flex-col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .g-flex-col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .g-flex-col-md-offset-3 {
    margin-left: 25%;
  }
  .g-flex-col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .g-flex-col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .g-flex-col-md-offset-6 {
    margin-left: 50%;
  }
  .g-flex-col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .g-flex-col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .g-flex-col-md-offset-9 {
    margin-left: 75%;
  }
  .g-flex-col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .g-flex-col-md-offset-11 {
    margin-left: 91.66666667%;
  }
}
@media only screen and (min-width: 75em) {
  .g-flex-col-lg-1,
  .g-flex-col-lg-10,
  .g-flex-col-lg-11,
  .g-flex-col-lg-12,
  .g-flex-col-lg-2,
  .g-flex-col-lg-3,
  .g-flex-col-lg-4,
  .g-flex-col-lg-5,
  .g-flex-col-lg-6,
  .g-flex-col-lg-7,
  .g-flex-col-lg-8,
  .g-flex-col-lg-9,
  .g-flex-col-lg-offset-0,
  .g-flex-col-lg-offset-1,
  .g-flex-col-lg-offset-10,
  .g-flex-col-lg-offset-11,
  .g-flex-col-lg-offset-12,
  .g-flex-col-lg-offset-2,
  .g-flex-col-lg-offset-3,
  .g-flex-col-lg-offset-4,
  .g-flex-col-lg-offset-5,
  .g-flex-col-lg-offset-6,
  .g-flex-col-lg-offset-7,
  .g-flex-col-lg-offset-8,
  .g-flex-col-lg-offset-9 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .g-flex-col-lg-1 {
    -ms-flex-preferred-size: 8.33333333%;
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }
  .g-flex-col-lg-2 {
    -ms-flex-preferred-size: 16.66666667%;
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }
  .g-flex-col-lg-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }
  .g-flex-col-lg-4 {
    -ms-flex-preferred-size: 33.33333333%;
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }
  .g-flex-col-lg-5 {
    -ms-flex-preferred-size: 41.66666667%;
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }
  .g-flex-col-lg-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }
  .g-flex-col-lg-7 {
    -ms-flex-preferred-size: 58.33333333%;
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }
  .g-flex-col-lg-8 {
    -ms-flex-preferred-size: 66.66666667%;
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }
  .g-flex-col-lg-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }
  .g-flex-col-lg-10 {
    -ms-flex-preferred-size: 83.33333333%;
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }
  .g-flex-col-lg-11 {
    -ms-flex-preferred-size: 91.66666667%;
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }
  .g-flex-col-lg-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
  .g-flex-col-lg-offset-0 {
    margin-left: 0;
  }
  .g-flex-col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .g-flex-col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .g-flex-col-lg-offset-3 {
    margin-left: 25%;
  }
  .g-flex-col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .g-flex-col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .g-flex-col-lg-offset-6 {
    margin-left: 50%;
  }
  .g-flex-col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .g-flex-col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .g-flex-col-lg-offset-9 {
    margin-left: 75%;
  }
  .g-flex-col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
}
</style>
