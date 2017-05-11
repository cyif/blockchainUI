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
          path: '/charts',
          name: 'charts',
          component: resolve => require(['../views/chartGeneral.vue'], resolve)
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
