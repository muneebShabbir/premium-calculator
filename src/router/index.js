import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '../views/FormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: FormView
  },
  {
    path: '/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
