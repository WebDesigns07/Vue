import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL: "http://192.168.0.120:8084"
});

const axiosPlugin = {
  install(Vue){
    Vue.prototype.$api = api;
  }
}

Vue.use(axiosPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
