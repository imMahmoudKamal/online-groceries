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
const categories = ref(null);
fetch('../../db.json')
  .then((res) => res.json())
  .then(({ categoriesInfo }) => {
    categories.value = categoriesInfo;
  });
</script>

<style lang="scss">
.category-Info {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
