import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/button.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../views/icon.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
