<template>
  <div class="container">
    <!-- Categories Section -->
    <section class="category-Info" aria-labelledby="#category-Info">
      <h2 class="section-title" id="category-Info">Categories</h2>
      <categoryList :categoriesInfo="categories" />
    </section>
  </div>
</template>

<script setup>
import categoryList from '../components/CategoryList.vue';
import { ref } from 'vue';
import DB from '@/db.json';

const categories = ref(DB.categoriesInfo);
</script>

<style lang="scss">
.category-Info {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
