<template>
  <div class="container">
    <!--========== category all items ==========-->
    <section class="cat-filter">
      <CategoryNavbar :activeCategory="props.category" />

      <CategoryItemsFilter :filteredCategory="props.category" />
    </section>
  </div>
</template>

<script setup>
import CategoryNavbar from '../components/CategoryNavbar.vue';
import CategoryItemsFilter from '../components/CategoryItemsFilter.vue';

const props = defineProps({ category: String });
</script>

<style lang="scss" scoped>
.cat-filter {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
