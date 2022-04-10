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

      <!-- Best Selling Section -->
      <section class="best-selling" aria-labelledby="#best-selling">
        <h2 class="section-title" id="best-selling">Best Selling</h2>

        <ItemsListComp items="itemsArray" />
      </section>
    </main>
  </div>
</template>

<script setup>
import FeaturesComp from '../components/FeaturesComp.vue';
<<<<<<< HEAD
// import CategoryComp from '../components/CategoryComp.vue';
// import TeamMemberComp from '../components/TeamMemberComp.vue';
import TeamMemberSection from '../components/TeamMemberSection.vue';
=======
import SliderComp from '../components/SliderComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
>>>>>>> 708499fbc8bc70b84935ba95269aa3bcc4665b13
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
