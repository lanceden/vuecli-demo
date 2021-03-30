import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Loading from 'vue-loading-overlay' //component
import 'vue-loading-overlay/dist/vue-loading.css' //style
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('Loading', Loading)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use({
  install: function (Vue) {
    Vue.prototype.$http = { axios }
  }
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  store.dispatch('setIsLoading', true)
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  setTimeout(() => {
    store.dispatch('setIsLoading', false)
  }, 2000);
  return response;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
