import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/stocktaking',
    name: 'stocktaking',
    component: () => import('../views/Stocktaking.vue')
  },
  {
    path: '/listCart',
    name: 'listCart',
    component: () => import('../views/ListCart.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/stores',
    name: 'stores',
    component: () => import('../views/Stores.vue')
  },
  {
    path: '/historical',
    name: 'historical',
    component: () => import('../views/Historical.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router