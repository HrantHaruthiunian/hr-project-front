import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/users'
import userInputForm from '../components/users'
import Requests from './components/requests'
import Notations from './components/notations'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },

  routes =[
    { path: '/users', name: 'users', component: Users },
    { path: '/requests', name: 'requests', component: Requests },
    { path: '/notations', name: 'notations', component: Notations },
    { path: '/addUser', name: 'user', component: userInputForm },
  ],
})






