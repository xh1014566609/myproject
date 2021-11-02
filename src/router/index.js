import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'

Vue.use(Router)

import Home from '../components/home'

export default new Router({
  routes: [{
    path: '/login',
    name: 'HelloWorld',
    component: Login
  }, {
    path: '/',
    name: 'home',
    component: Home
  }, 
]
})
