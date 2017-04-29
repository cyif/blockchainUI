import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/dashboard'
import blockTrivia from '@/views/blockTrivia'
import blockInfo from '@/views/blockInfo'
import txTrivia from '@/views/txTrivia'

Vue.use(Router)

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
          name: 'txTrivia',
          component: txTrivia
      }
  ]
})
