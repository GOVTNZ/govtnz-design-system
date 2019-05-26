import Vue from "vue";

import H1 from "./H1.vue";
Vue.component("H1", H1);

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
