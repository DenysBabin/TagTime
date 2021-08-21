import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Hello from '../views/HelloPage.vue'
import HoursAddPage from '../views/HoursAddPage.vue'
import HoursEditPage from '../views/HoursEditPage.vue'
import MyProfilePage from '../views/MyProfilePage.vue'
import MainPage from '../views/MainPage.vue'
import HoursPage from '../views/HoursPage.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Главная страница',
    component: MainPage
  },
  {
    path: '/hour',
    name: 'Часы',
    component: HoursPage,
  },
  {
    path: '/add',
    name: 'Описать часы',
    component: HoursAddPage
  },
  {
    path: '/blabla',
    name: 'Редактировать часы',
    component: HoursEditPage
  },
  {
    path: '/my-profile',
    name: 'Мой Профиль',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProfilePage.vue')
  },
  {
    // will match everything
    path: '*',
    component: MyProfilePage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
