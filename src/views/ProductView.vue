<template>
  <div class="container">
    <main>
      <!-- Slider -->
      <ItemDetailsComp />

      <!-- Best Selling Section -->
      <section class="also-you-may-like" aria-labelledby="#also-you-may-like">
        <h2 class="section-title" id="also-you-may-like">Also you May Like</h2>

        <ItemsListComp items="itemsArray" />
      </section>
    </main>
  </div>
</template>

<script setup>
import ItemDetailsComp from '../components/ItemDetailsComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
</script>

<style lang="scss" scoped>
$spacing: 1.5rem;

.also-you-may-like {
  margin-top: $spacing;
  margin-bottom: $spacing;

  @media (min-width: 48rem) {
    margin-bottom: 3rem;
  }
}
</style>
