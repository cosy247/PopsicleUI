import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/Article.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
