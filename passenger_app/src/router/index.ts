import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerDetailsView from '../views/PassengerDetailsView.vue'
import AirlineDetailsView from '../views/AirlineDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ResourceNotFoundView from '../views/ResourceNotFoundView.vue'

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
        path: 'airline/:airlineId',
        name: 'airline-details',
        component: AirlineDetailsView,
        props: true
      },
      {
        path: 'resource-not-found',
        name: 'resource-not-found',
        component: ResourceNotFoundView
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
