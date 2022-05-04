import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
=======
import Shop from '../views/ShopView.vue';
import About from '../views/AboutView.vue';
import firebase from 'firebase/compat/app'; //v9
>>>>>>> 94f31f0e10fb80301d6d600d3f7825d77d41e189

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
<<<<<<< HEAD
=======
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
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/:category/:item',
      name: 'Product',
      component: () => import('../views/ProductView.vue'),
    },
>>>>>>> 5ad4407787e85de256cf6a57c26310506e81dca6
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

const getCurrentUser = () => {
  return new Promise((reslove, reject) => {
    const removeListener = firebase.auth().onAuthStateChanged((user) => {
      removeListener();
      reslove(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
