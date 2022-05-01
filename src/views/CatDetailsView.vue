<template>
  <div class="container">
    <!--========== category Navbar  ==========-->
    <section>
      <CategoryNavbar />
    </section>
    <!--========== category all items ==========-->
    <section class="cat-filter">
      <CategoryItemsFilter />
    </section>
  </div>
</template>

<script setup>
import CategoryNavbar from '../components/CategoryNavbar.vue';
import CategoryItemsFilter from '../components/CategoryItemsFilter.vue';
</script>

<style lang="scss" scoped>
.cat-filter {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
