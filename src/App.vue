<template>
  <NavbarComp />
  <RouterView />
  <FooterComp />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavbarComp from './components/layout/NavbarComp.vue';
import FooterComp from './components/layout/FooterComp.vue';
</script>

<style>
@import '@/scss/main.scss';
</style>
