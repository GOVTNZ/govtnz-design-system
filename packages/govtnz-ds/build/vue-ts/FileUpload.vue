<template>
  <div class="g-form-group">
    <label class="g-label" v-bind:for="id">
      Upload a file
    </label>

    <input
      class="g-file-upload"
      v-bind:id="id"
      v-bind:name="name"
      type="file"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:autofocus="autoFocus"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: { type: String, required: false },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    name: { type: String, required: true }
  },
  computed: {}
});
</script>
<style scoped>
.g-file-upload {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
}
@media print {
  .g-file-upload {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-file-upload {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-file-upload {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-file-upload {
    color: #000000;
  }
}
.g-file-upload:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
.g-fileUpload-hint > * {
  margin-top: 0px;
}
</style>
