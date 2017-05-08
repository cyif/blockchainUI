import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/dashboard'
import timeLine from '@/views/timeLine'
import chainTrivia from '@/views/chainTrivia'

import chartGeneral from '@/views/chartGeneral'
import overview from '@/views/overview'

import blockTrivia from '@/views/blockTrivia'
import blockInfo from '@/views/blockInfo'

import txsTrivia from '@/views/txsTrivia'
import txsInfo from '@/views/txsInfo'

import addTrivia from '@/views/addTrivia'
import addInfo from '@/views/addInfo'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'dashboard',
          component: dashboard
      },
      {
          path: '/timeLine',
          name: 'timeLine',
          component: timeLine
      },
      {
          path: '/charts',
          name: 'charts',
          component: chartGeneral
      },
      {
          path: '/overview',
          name: 'overview',
          component: overview
      },
      {
          path: '/blockchain',
          name: 'blockchain',
          component: chainTrivia
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
      },
      {
          path: '/address',
          name: 'addressTrivia',
          component: addTrivia
      },
      {
          path: '/address/info/:addressId',
          name: 'addressInfo',
          component: addInfo
      }
  ]
})
