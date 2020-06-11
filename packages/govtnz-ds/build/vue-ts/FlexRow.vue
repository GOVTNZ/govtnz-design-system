<template>
  <div v-bind:class="computed__class">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

const constants = {
  xsVerticalAlign: {
    top: "g-flexRow-flex-top-xs",
    middle: "g-flexRow-flex-middle-xs",
    bottom: "g-flexRow-flex-bottom-xs"
  },
  smVerticalAlign: {
    top: "g-flexRow-flex-top-sm",
    middle: "g-flexRow-flex-middle-sm",
    bottom: "g-flexRow-flex-bottom-sm"
  },
  mdVerticalAlign: {
    top: "g-flexRow-flex-top-md",
    middle: "g-flexRow-flex-middle-md",
    bottom: "g-flexRow-flex-bottom-md"
  },
  lgVerticalAlign: {
    top: "g-flexRow-flex-top-lg",
    middle: "g-flexRow-flex-middle-lg",
    bottom: "g-flexRow-flex-bottom-lg"
  }
};

export default Vue.extend({
  props: {
    xsVerticalAlign: {
      type: String,
      validator: value => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
      required: false
    },
    smVerticalAlign: {
      type: String,
      validator: value => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
      required: false
    },
    mdVerticalAlign: {
      type: String,
      validator: value => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
      required: false
    },
    lgVerticalAlign: {
      type: String,
      validator: value => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
      required: false
    },
    isReversed: { type: Boolean, default: false, required: false },
    children: { required: false, default: "Columns..." }
  },
  computed: {
    computed__class() {
      return (
        "g-flex-row" +
        (constants.xsVerticalAlign[this.xsVerticalAlign] !== undefined
          ? ` ${constants.xsVerticalAlign[this.xsVerticalAlign]}`
          : "") +
        (constants.smVerticalAlign[this.smVerticalAlign] !== undefined
          ? ` ${constants.smVerticalAlign[this.smVerticalAlign]}`
          : "") +
        (constants.mdVerticalAlign[this.mdVerticalAlign] !== undefined
          ? ` ${constants.mdVerticalAlign[this.mdVerticalAlign]}`
          : "") +
        (constants.lgVerticalAlign[this.lgVerticalAlign] !== undefined
          ? ` ${constants.lgVerticalAlign[this.lgVerticalAlign]}`
          : "") +
        (this.isReversed ? " g-flexRow-flex-reverse" : "")
      );
    }
  }
});
</script>
<style scoped>
.g-flex-row {
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}
.g-flex-row.g-flexRow-flex-reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
.g-flexRow-flex-top-xs {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.g-flexRow-flex-bottom-xs {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}
@media only screen and (min-width: 48em) {
  .g-flexRow-flex-top-sm {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .g-flexRow-flex-middle-sm {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .g-flexRow-flex-bottom-sm {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
}
@media only screen and (min-width: 64em) {
  .g-flexRow-flex-top-md {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .g-flexRow-flex-middle-md {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .g-flexRow-flex-bottom-md {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
}
@media only screen and (min-width: 75em) {
  .g-flexRow-flex-top-lg {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .g-flexRow-flex-middle-lg {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .g-flexRow-flex-bottom-lg {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
}
</style>
