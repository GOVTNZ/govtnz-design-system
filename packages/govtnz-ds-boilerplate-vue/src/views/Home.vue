<template>
  <div class="home">
    <h1>Headings</h1>
    <h-1 styleSize="large" id="sdfsdf">Testicvfng h1</h-1>
    <flex-container width="fixed">
      <flex-row>
        <flex-column xs="4" sm="4" md="4" lg="4">.g-flex-col .g-flex-col-md-4</flex-column>
        <flex-column xs="4" sm="4" md="4" lg="4">.g-flex-col .g-flex-col-md-4</flex-column>
        <flex-column xs="4" sm="4" md="4" lg="4">.g-flex-col .g-flex-col-md-4</flex-column>
      </flex-row>
    </flex-container>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import H1 from "@govtnz/ds/build/vue-js/H1.vue";
import FlexContainer from "@govtnz/ds/build/vue-js/FlexContainer.vue";
import FlexRow from "@govtnz/ds/build/vue-js/FlexRow.vue";
import FlexColumn from "@govtnz/ds/build/vue-js/FlexColumn.vue";
// import "@govtnz/ds/build/css/FlexContainer.css";
// import "@govtnz/ds/build/css/FlexRow.css";
// import "@govtnz/ds/build/css/FlexColumn.css";

// import H2 from "@govtnz/ds/build/vue-ts/H2.vue";
// import H3 from "@govtnz/ds/build/vue-ts/H3.vue";
// import H4 from "@govtnz/ds/build/vue-ts/H4.vue";
// import H5 from "@govtnz/ds/build/vue-ts/H5.vue";
// import H6 from "@govtnz/ds/build/vue-ts/H6.vue";

@Component({
  components: {
    HelloWorld,
    "h-1": H1,
    "flex-container": FlexContainer,
    "flex-row": FlexRow,
    "flex-column": FlexColumn
    // H2,
    // H3,
    // H4,
    // H5,
    // H6
  }
})
export default class Home extends Vue {}
</script>
