<template>
  <a
    v-bind:class="computed__class"
    v-bind:href="href"
    v-bind:rel="rel"
    v-bind:target="target"
  >
    <slot></slot>
  </a>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    class: { type: String, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: { type: String, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-link " + this.class;
    }
  }
});
</script>
<style scoped>
.g-link {
  font-family: g-theme-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-link {
    font-family: sans-serif;
  }
}
.g-link:focus {
  outline: 3px solid g-theme-focus-ring-color;
  outline-offset: 0;
}
.g-link:link {
  color: g-theme-link-color;
}
.g-link:visited {
  color: g-theme-link-color;
}
.g-link:hover {
  color: g-theme-link-hover-color;
}
.g-link:focus {
  color: g-theme-link-focus-color;
}
</style>
