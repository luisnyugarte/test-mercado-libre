import Vue from 'vue';
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

window.axios = axios;
window.axios_api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Access-Control-Allow-Origin": "*",
    accept: 'application/json',
    'Content-type': 'application/json',
  },
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
