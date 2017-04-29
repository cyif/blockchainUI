import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/dashboard'
import blockTrivia from '@/views/blockTrivia'

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
      }
  ]
})
