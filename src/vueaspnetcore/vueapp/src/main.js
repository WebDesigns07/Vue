import Vue from "vue";
import App from "./App.vue";
import router from './router';
import axios from "axios";
import { store } from "./stores/profiles";
import "./components/generic/index.js";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL: "https://localhost:5001"
});

const axiosPlugin = {
  install(Vue){
    Vue.prototype.$api = api;
  }
}

Vue.use(axiosPlugin);

// const routerPlugin = {
//   install(Vue) {
//     Vue.prototype.$router = router;
//   }
// }

// Vue.use(routerPlugin);

// const storePlugin = {
//   install(Vue) {
//     Vue.prototype.$store = store;
//   }
// }
// Vue.use(storePlugin);

// Vue.prototype.$eventBus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
