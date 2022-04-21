import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/students',
    name: 'Student',
    component: () => import(/* webpackChunkName: "about" */ '../views/Student.vue')
  },
  {
    path: '/add-student',
    name: 'AddStudent',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddStudent.vue')
  },
  {
    path: '/account',
    name: 'Accounts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Accounts.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
