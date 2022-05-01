import { createRouter, createWebHistory } from 'vue-router';
import Shop from '../views/ShopView.vue';
import About from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/vuexexample',
      name: 'vuex',
      component: () => import('../views/VuexExample.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SIgnUpView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue'),
    },
  ],
});

export default router;
