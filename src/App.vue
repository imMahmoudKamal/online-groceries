<template>
  <NavbarComp />
  <RouterView />
  <FooterComp />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavbarComp from './components/layout/NavbarComp.vue';
import FooterComp from './components/layout/FooterComp.vue';

import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase/compat/app'; //v9

const router = useRouter();
const route = useRoute();

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

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged((user) => {

    if (!user && (route.path == '/')) {
      router.push('/signin');
    }
  });
});
</script>

<style>
@import '@/scss/main.scss';
</style>
