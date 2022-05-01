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
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/shop/:cartName',
      name: 'CartDetails',
      component: () => import('../views/CatDetailsView.vue'),
    },
    {
      path: '/:category/:item',
      name: 'Product',
      component: () => import('../views/ProductView.vue'),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
