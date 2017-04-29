import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/dashboard'
import blockTrivia from '@/views/blockTrivia'
import blockInfo from '@/views/blockInfo'
import txsTrivia from '@/views/txsTrivia'
import txsInfo from '@/views/txsInfo'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'dashboard',
          component: dashboard
      },
      {
          path: '/block',
          name: 'blockTrivia',
          component: blockTrivia
      },
      {
          path: '/block/info/:blockId',
          name: 'blockInfo',
          component: blockInfo
      },
      {
          path: '/txs',
          name: 'txsTrivia',
          component: txsTrivia
      },
      {
          path: '/txs/info/:txsId',
          name: 'txsInfo',
          component: txsInfo
      }
  ]
})
