<template>
  <div class="container">
    <!-- Categories Section -->
    <section class="category-Info" aria-labelledby="#category-Info">
      <h2 class="section-title" id="category-Info">Categories</h2>
      <categoryList :categoryList="categoriesInfo" />
    </section>
  </div>
</template>

<script setup>
import categoryList from '../components/CategoryList.vue';
const categoriesInfo = [
  {
    Name: 'Frash Fruits & Vegetable',
    ImagURL: 'https://i.postimg.cc/FR8bBDjF/fruits-vegetables.png',
    BackgroundColor: 'rgb(var(--clr-primary) / 10%)',
    Border: '1px solid rgb(var(--clr-primary) / 70%)',
  },
  {
    Name: 'Cooking Oil & Ghee',
    ImagURL: 'https://i.postimg.cc/NFtFFXt7/Oil.png',
    BackgroundColor: 'rgb(var(--clr-orange) / 10%)',
    Border: '1px solid rgb(var(--clr-orange) / 70%)',
  },
  {
    Name: 'meat & fish',
    ImagURL: 'https://i.postimg.cc/sDV1R5w3/Meat.png',
    BackgroundColor: 'rgb(var( --clr-pink) / 10%)',
    Border: '1px solid rgb(var( --clr-pink) / 70%)',
  },
  {
    Name: 'Bakery & Snacks',
    ImagURL: 'https://i.postimg.cc/13dz62Pz/Bakery.png',
    BackgroundColor: 'rgb(var( --clr-purple) / 10%)',
    Border: '1px solid rgb(var( --clr-purple) / 70%)',
  },
  {
    Name: 'Dairy & Eggs',
    ImagURL: 'https://i.postimg.cc/gJFkthxF/Dairy-Eggs.png',
    BackgroundColor: 'rgb(var( --clr-yellow) / 10%)',
    Border: '1px solid rgb(var( --clr-yellow) / 70%)',
  },
  {
    Name: 'beverages',
    ImagURL: 'https://i.postimg.cc/prkWd1qR/Beverages.png',
    BackgroundColor: 'rgb(var( --clr-babyBlue) / 10%)',
    Border: '1px solid rgb(var( --clr-babyBlue) / 70%)',
  },
  {
    Name: 'Crockery &Cultery',
    ImagURL: 'https://i.postimg.cc/5N79dTXm/Crockery.png',
    BackgroundColor: 'rgb(var(--clr-primary) / 10%)',
    Border: '1px solid rgb(var(--clr-primary) / 70%)',
  },
  {
    Name: 'Snakes & Branded Foods',
    ImagURL: 'https://i.postimg.cc/FHYr9pcX/snakes.png',
    BackgroundColor: 'rgb(var(--clr-orange) / 10%)',
    Border: '1px solid rgb(var(--clr-orange) / 70%)',
  },
  {
    Name: 'meat & fish',
    ImagURL: 'https://i.postimg.cc/sDV1R5w3/Meat.png',
    BackgroundColor: 'rgb(var( --clr-pink) / 10%)',
    Border: '1px solid rgb(var( --clr-pink) / 70%)',
  },
  {
    Name: 'Bakery & Snacks',
    ImagURL: 'https://i.postimg.cc/13dz62Pz/Bakery.png',
    BackgroundColor: 'rgb(var( --clr-purple) / 10%)',
    Border: '1px solid rgb(var( --clr-purple) / 70%)',
  },
  {
    Name: 'Dairy & Eggs',
    ImagURL: 'https://i.postimg.cc/gJFkthxF/Dairy-Eggs.png',
    BackgroundColor: 'rgb(var( --clr-yellow) / 10%)',
    Border: '1px solid rgb(var( --clr-yellow) / 70%)',
  },
  {
    Name: 'beverages',
    ImagURL: 'https://i.postimg.cc/prkWd1qR/Beverages.png',
    BackgroundColor: 'rgb(var( --clr-babyBlue) / 10%)',
    Border: '1px solid rgb(var( --clr-babyBlue) / 70%)',
  },
];
</script>

<style lang="scss">
.category-Info {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
