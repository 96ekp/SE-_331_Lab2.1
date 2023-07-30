import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerDetailsView from '../views/PassengerDetailsView.vue'
import AirlineDetailsView from '../views/AirlineDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/passenger/:id',
    name: 'passenger-details',
    component: PassengerDetailsView,
    props: true,
    children: [
      {
        path: 'airline',
        name: 'airline-details',
        component: AirlineDetailsView,
        props: true
      }
    ]
  },
  {
    path: '/network-error',
    name: 'network-error',
    component: NetworkErrorView
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
