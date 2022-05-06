<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero">
      <SliderComp />
    </div>

    <main>
      <!-- Features Section -->
      <section class="why-us" aria-label="Why Us">
        <FeaturesComp />
      </section>

      <!-- Groceries Section -->
      <section class="groceries">
        <h2 class="section-title">Groceries</h2>
        <GroceriesComp />
      </section>
      <!-- Categories Section -->
      <section class="category-Info" aria-labelledby="#category-Info">
        <div class="cat__title">
          <h2 class="section-title" id="category-Info">Browse by Categories</h2>
          <router-link to="/shop" class="category-more" id="category-more"
            >view all
          </router-link>
        </div>

        <categoryList :categoriesInfo="categories" />
      </section>

      <!-- Best Selling Section -->
      <section class="best-selling" aria-labelledby="#best-selling">
        <h2 class="section-title" id="best-selling">Best Selling</h2>

        <ItemsListComp :itemsList="itemsList" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FeaturesComp from '../components/FeaturesComp.vue';
import SliderComp from '../components/SliderComp.vue';
import GroceriesComp from '../components/GroceriesComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
import categoryList from '../components/CategoryList.vue';
import DB from '@/db.json';

const categories = ref(DB.categoriesInfo.filter((item, index) => index < 6));
const itemsList = ref(DB.featureItems);
</script>

<style lang="scss" scoped>
.hero,
.why-us,
.best-selling,
.groceries {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 48rem) {
    margin-bottom: 3rem;
  }
}

.cat__title {
  display: flex;
  justify-content: space-between;
}
.category-more {
  color: rgb(var(--clr-neutral-900));
}
</style>
