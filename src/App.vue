<template>
  <NavbarComp />
  <RouterView />
  <FooterComp />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavbarComp from './components/layout/NavbarComp.vue';
import FooterComp from './components/layout/FooterComp.vue';

import { onBeforeMount, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase/compat/app'; //v9

const router = useRouter();
const route = useRoute();

// init cart
const store = useStore();

onMounted(() => {
  if (localStorage.myCart) {
    store.state.cart = JSON.parse(localStorage.myCart);
  }
});

// onBeforeMount(() => {
//   // firebase.auth().onAuthStateChanged((user) => {
//   //   if (!user) {
//   //     router.push('signin');
//   //   }

//   //   if (user && (route.path == '/signin' || route.path == '/signup')) {
//   //     router.push('/');
//   //   }
//   // });
// });

// onBeforeMount(() => {

//   firebase.auth().onAuthStateChanged((user) => {
//     if (!user && route.path == '/cart') {
//       router.push('/signin');
//     }
//   });
// });
// onBeforeMount(() => {
//   let user = firebase.auth().currentUser;
//   if (route.path === '/cart') {
//     console.log('aa');
//     if (!user) {
//       router.push('/signin');
//       console.log('aa');
//     }
//   }
// });
</script>

<style>
@import '@/scss/main.scss';
</style>
