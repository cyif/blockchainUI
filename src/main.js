// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueEvents from 'vue-events'
import App from './App.vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import {webApi} from './service/WebApi'
import nameMap from './service/NameMap'
import Chart from '../node_modules/chart.js'
import vue_scroll from 'vue_scroll'
import echarts from 'echarts'
// import $ from 'jquery'
import axios from 'axios'
import MuseUI from 'muse-ui'
import router from './router'

Vue.use(iview);
// Vue.use(Chart);
Vue.use(VueEvents);
Vue.use(VueChartkick, { Chartkick });
// Vue.use(vue_scroll);
Vue.use(MuseUI);
Vue.prototype.$webApi = webApi;
Vue.prototype.$nameMap = nameMap;
Vue.prototype.$echarts = echarts;
Vue.prototype.$ajax = axios;
// Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

