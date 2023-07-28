import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import "@/assets/CSS/MingCute-main/fonts/MingCute.css";

import config from "@/assets/configuration/config.js";
Vue.config.productionTip = false
store.state.loggedIn = localStorage.getItem("loggedIn");
//  console.log(localStorage.getItem("loggedIn"));
// import { VueMaskDirective } from 'v-mask'
// Vue.directive('mask', VueMaskDirective);

axios.defaults.baseURL = config.BaseUrl;
// console.log(config.BaseUrl);

// axios.defaults.baseURL = config.apiBaseUrl;
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
