import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerDetailsView from ../views/PassengerDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
    }
  ]
})

export default router
