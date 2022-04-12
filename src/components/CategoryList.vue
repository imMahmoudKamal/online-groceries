<template>
  <ul class="categories">
    <li v-for="category in categories" :key="category">
      <CategoryComp />
    </li>
  </ul>
</template>

<script setup>
const categories = [1, 2, 3, 4, 5, 6];
import CategoryComp from './CategoryComp.vue';
</script>

<style lang="scss" scoped>
.categories {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  text-align: center;
  list-style: none;

  @media (min-width: 36rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 62rem) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 75rem) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
