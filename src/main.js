import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import destyle from "./assets/style/destyle.css";
import main from "./assets/style/main.css";
import variables from "./assets/style/variables.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  destyle,
  main,
  variables,
  render: h => h(App)
}).$mount("#app");
