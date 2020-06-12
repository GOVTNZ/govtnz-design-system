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
    isMuted: { type: Boolean, default: false, required: false },
    href: { type: String, required: true },
    rel: { type: String, required: false },
    target: { type: String, required: false },
    children: { required: false, default: "Example text" }
  },
  computed: {
    computed__class() {
      return "g-link" + (this.isMuted ? " g-link--muted" : "");
    }
  }
});
</script>
<style scoped>
.g-link {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media print {
  .g-link {
    font-family: sans-serif;
  }
}
.g-link:focus {
  outline: 3px solid #b53cde;
  outline-offset: 0;
}
.g-link:link {
  color: #005ea5;
}
.g-link:visited {
  color: #4c2c92;
}
.g-link:hover {
  color: #2b8cc4;
}
.g-link:active {
  color: #2b8cc4;
}
.g-link:focus {
  color: #0b0c0c;
}
.g-link--muted:link,
.g-link--muted:visited,
.g-link--muted:hover,
.g-link--muted:active {
  color: #6f777b;
}
.g-link--muted:focus {
  color: #0b0c0c;
}
</style>
