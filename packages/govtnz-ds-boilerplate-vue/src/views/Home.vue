<template>
  <div class="home">
    <h1>Headings</h1>
    <h-1 styleSize="xxsmall">g-heading-1</h-1>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import H1 from "@govtnz/ds/build/vue-ts/H1.vue";
// import H2 from "@govtnz/ds/build/vue-ts/H2.vue";
// import H3 from "@govtnz/ds/build/vue-ts/H3.vue";
// import H4 from "@govtnz/ds/build/vue-ts/H4.vue";
// import H5 from "@govtnz/ds/build/vue-ts/H5.vue";
// import H6 from "@govtnz/ds/build/vue-ts/H6.vue";

@Component({
  components: {
    HelloWorld,
    "h-1": H1
    // H2,
    // H3,
    // H4,
    // H5,
    // H6
  }
})
export default class Home extends Vue {}
</script>

