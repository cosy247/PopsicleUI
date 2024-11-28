import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/Component.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
