<template>
  <div>
    <ItemsListComp :itemsList="allCatItems" />
  </div>
</template>

<script>
import ItemsListComp from '../components/ItemListComp.vue';
import DB from '@/db.json';

export default {
  props: ['filteredCategory'],
  data() {
    return {
      allCatItems: [],
      filterCat: this.filteredCategory,
    };
  },
  components: { ItemsListComp },
  created() {
    this.getAllCatItems();
  },

  watch: {
    $route() {
      this.filterCat = this.$route.params.category;
      this.getAllCatItems();
    },
  },
  methods: {
    getAllCatItems() {
      this.allCatItems = DB.data.filter(
        (item) => item.category == this.filterCat
      );
    },
  },
};
</script>

<style lang="scss">
.items-list {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 1.5rem 0;

  @media (min-width: 36rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 62rem) {
    gap: 1.25rem;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 75rem) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
