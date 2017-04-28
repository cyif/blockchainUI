import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/views/dashboard'
import block from '@/views/block'

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
      name: 'block',
      component: block
    }
  ]
})
