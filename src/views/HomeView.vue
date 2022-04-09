<template>
  <!-- Navigation -->
  <NavbarComp />

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

      <!-- Best Selling Section -->
      <section class="best-selling" aria-labelledby="#best-selling">
        <h2 class="section-title" id="best-selling">Best Selling</h2>

        <ItemsListComp items="itemsArray" />
      </section>
    </main>
  </div>

  <!-- Footer -->
  <FooterComp />
</template>

<script setup>
import FeaturesComp from '../components/FeaturesComp.vue';
import SliderComp from '../components/SliderComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
import NavbarComp from '../components/layout/NavbarComp.vue';
import FooterComp from '../components/layout/FooterComp.vue';
</script>

<style lang="scss" scoped>
.hero,
.why-us,
.best-selling {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 48rem) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}

.why-us {
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem; /* 1200px */
}
</style>
