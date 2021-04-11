import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './components/users'
import Requests from './components/requests'
import Notations from './components/notations'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  { path: '/v1/users', name: 'users', component: Users },
  { path: '/v1/requests', name: 'requests', component: Requests },
  { path: '/v1/notations', name: 'notations', component: Notations },
]

const router = new VueRouter({
  routes
})

export default router