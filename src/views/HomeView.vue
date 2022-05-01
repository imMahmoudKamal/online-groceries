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

      <!-- Best Selling Section -->
      <section class="best-selling" aria-labelledby="#best-selling">
        <h2 class="section-title" id="best-selling">Best Selling</h2>

        <ItemsListComp items="itemsArray" />
      </section>
    </main>
  </div>
</template>

<script setup>
import SliderComp from '../components/SliderComp.vue';
import FeaturesComp from '../components/FeaturesComp.vue';
import GroceriesComp from '../components/GroceriesComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
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
</style>
