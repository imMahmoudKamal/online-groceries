<template>
  <ul class="items-list">
    <li v-for="item in items" :key="item">
      <ItemComp />
    </li>
  </ul>
</template>

<script setup>
import ItemComp from './ItemComp.vue';

const items = [1, 2, 3, 4, 5, 6];
</script>

<style lang="scss" scoped>
.items-list {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (min-width: 36rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 62rem) {
    gap: 1.25rem;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 75rem) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
