import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'dashboard',
          component: resolve => require(['../views/dashboard.vue'], resolve)
      },
      {
          path: '/timeLine',
          name: 'timeLine',
          component: resolve => require(['../views/timeLine.vue'], resolve)
      },
      {
          path: '/miningChart',
          name: 'miningChart',
          component: resolve => require(['../views/miningChart.vue'], resolve)
      },
      {
          path: '/addChart',
          name: 'addChart',
          component: resolve => require(['../views/addChart.vue'], resolve)
      },
      {
          path: '/blockChart',
          name: 'blockChart',
          component: resolve => require(['../views/blockChart.vue'], resolve)
      },
      {
          path: '/marketChart',
          name: 'marketChart',
          component: resolve => require(['../views/marketChart.vue'], resolve)
      },
      {
          path: '/txsChart',
          name: 'txsChart',
          component: resolve => require(['../views/txsChart.vue'], resolve)
      },
      {
          path: '/overview',
          name: 'overview',
          component: resolve => require(['../views/overview.vue'], resolve)
      },
      {
          path: '/blockchain',
          name: 'blockchain',
          component: resolve => require(['../views/chainTrivia.vue'], resolve)
      },
      {
          path: '/block',
          name: 'blockTrivia',
          component: resolve => require(['../views/blockTrivia.vue'], resolve)
      },
      {
          path: '/block/info/:blockId',
          name: 'blockInfo',
          component: resolve => require(['../views/blockInfo.vue'], resolve)
      },
      {
          path: '/txs',
          name: 'txsTrivia',
          component: resolve => require(['../views/txsTrivia.vue'], resolve)
      },
      {
          path: '/txs/info/:txsId',
          name: 'txsInfo',
          component: resolve => require(['../views/txsInfo.vue'], resolve)
      },
      {
          path: '/address',
          name: 'addressTrivia',
          component: resolve => require(['../views/addTrivia.vue'], resolve)
      },
      {
          path: '/address/info/:addressId',
          name: 'addressInfo',
          component: resolve => require(['../views/addInfo.vue'], resolve)
      }
  ]
})
