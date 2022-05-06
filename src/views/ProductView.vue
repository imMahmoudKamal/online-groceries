<template>
  <div class="container">
    <main>
      <!-- Slider -->
      <ItemDetailsComp :itemDetails="itemDetails" />

      <!-- Best Selling Section -->
      <section class="also-you-may-like" aria-labelledby="#also-you-may-like">
        <h2 class="section-title" id="also-you-may-like">Also you May Like</h2>

        <ItemsListComp :itemsList="itemsList" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import ItemDetailsComp from '../components/ItemDetailsComp.vue';
import ItemsListComp from '../components/ItemListComp.vue';
import DB from '@/db.json';

const props = defineProps({ itemID: String });
const itemsList = ref(DB.featureItems);
const itemDetails = ref(
  DB.data.find((item) => item.id === /(?<=-)[0-9]+$/.exec(props.itemID)[0])
);

watch(
  () => props.itemID,
  (currentValue, newValue) => {
    if (currentValue !== newValue) {
      itemDetails.value = DB.data.find(
        (item) => item.id === /(?<=-)[0-9]+$/.exec(props.itemID)[0]
      );
    }
  }
);
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
