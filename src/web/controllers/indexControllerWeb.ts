import { type RouteRecordRaw } from 'vue-router';
import HomeView from '../layouts/HomeLayout.vue';

export const home: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: HomeView,
};

export const about: RouteRecordRaw = {
  path: '/about',
  name: 'about',

  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../layouts/AboutLayout.vue'),
};

export const contact: RouteRecordRaw = {
  path: '/contact',
  name: 'contact',

  component: () => import('../layouts/ContactLayout.vue'),
};

