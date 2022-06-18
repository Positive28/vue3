import { createRouter, createWebHistory } from 'vue-router'
import IndexCitizen from '../views/citizens/Index'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'IndexCitizen',
    component: () => IndexCitizen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
