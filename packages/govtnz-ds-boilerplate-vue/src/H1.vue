<template>
  <h1 v-bind:class="computed__class">
    <slot></slot>
  </h1>
</template>
<script>
import Vue from "vue";

const constants = {
  styleSize: {
    xlarge: "g-heading-xl",
    large: "g-heading-l",
    medium: "g-heading-m",
    small: "g-heading-s",
    xsmall: "g-heading-s",
    xxsmall: "g-heading-s"
  }
};

export default Vue.extend({
  props: {
    styleSize: {
      type: String,
      validator: value => {
        return (
          ["xlarge", "large", "medium", "small", "xsmall", "xxsmall"].indexOf(
            value
          ) !== -1
        );
      },
      required: true
    },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return constants[this.styleSize];
    }
  }
});
</script>
<style>
.g-heading-xl {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.09375;
  display: block;
  margin-top: 0;
  margin-bottom: 30px;
}

@media print {
  .g-heading-xl {
    color: #000000;
  }
}

@media print {
  .g-heading-xl {
    font-family: sans-serif;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-xl {
    font-size: 3rem;
    line-height: 1.04167;
  }
}

@media print {
  .g-heading-xl {
    font-size: 32pt;
    line-height: 1.15;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-xl {
    margin-bottom: 50px;
  }
}

.g-heading-l {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.04167;
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
}

@media print {
  .g-heading-l {
    color: #000000;
  }
}

@media print {
  .g-heading-l {
    font-family: sans-serif;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-l {
    font-size: 2.25rem;
    line-height: 1.11111;
  }
}

@media print {
  .g-heading-l {
    font-size: 24pt;
    line-height: 1.05;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-l {
    margin-bottom: 30px;
  }
}

.g-heading-m {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.11111;
  display: block;
  margin-top: 0;
  margin-bottom: 15px;
}

@media print {
  .g-heading-m {
    color: #000000;
  }
}

@media print {
  .g-heading-m {
    font-family: sans-serif;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-m {
    font-size: 1.5rem;
    line-height: 1.25;
  }
}

@media print {
  .g-heading-m {
    font-size: 18pt;
    line-height: 1.15;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-m {
    margin-bottom: 20px;
  }
}

.g-heading-s {
  color: #0b0c0c;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  margin-top: 0;
  margin-bottom: 15px;
}

@media print {
  .g-heading-s {
    color: #000000;
  }
}

@media print {
  .g-heading-s {
    font-family: sans-serif;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-s {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}

@media print {
  .g-heading-s {
    font-size: 14pt;
    line-height: 1.15;
  }
}

@media (min-width: 40.0625em) {
  .g-heading-s {
    margin-bottom: 20px;
  }
}
</style>
