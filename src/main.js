// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import iview from 'iview'
import './theme/my-theme/dist/iview.css';
import {webApi} from './service/WebApi'
import nameMap from './service/NameMap'
import echarts from 'echarts'
import router from './router'

Vue.use(iview);
Vue.prototype.$webApi = webApi;
Vue.prototype.$nameMap = nameMap;
Vue.prototype.$echarts = echarts;
// Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

