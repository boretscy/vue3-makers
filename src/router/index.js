import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Colors from '../views/Colors.vue'
import Boxes from '../views/Boxes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors
  },
  {
    path: '/boxes',
    name: 'Boxes',
    component: Boxes
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
