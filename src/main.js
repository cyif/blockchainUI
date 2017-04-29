// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueEvents from 'vue-events'
import App from './App.vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import axios from 'axios'
import Chart from '../node_modules/chart.js'
import vue_scroll from 'vue_scroll'

// import $ from 'jquery'
import MuseUI from 'muse-ui'
import router from './router'

Vue.use(iview);
// Vue.use(Chart);
Vue.use(VueEvents);
Vue.use(VueChartkick, { Chartkick });
// Vue.use(vue_scroll);
Vue.use(MuseUI);
Vue.prototype.$http = axios;

// Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

