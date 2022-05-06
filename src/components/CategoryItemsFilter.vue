<template>
  <div>
    <ItemsListComp :itemsList="allCatItems" />
  </div>
</template>

<script>
import ItemsListComp from '../components/ItemListComp.vue';
import DB from '@/db.json';

export default {
  data() {
    return {
      allCatItems: [],
    };
  },
  components: { ItemsListComp },
  created() {
    if (
      this.$store.getters.getFilteredCat == '' ||
      this.$store.getters.getCategoryName == ''
    ) {
      this.$store.commit('setFilteredCat', 'beverages');
      this.$store.commit('setCategoryName', 'beverages');
    }
    this.getAllCatItems();
  },
  watch: {
    $route() {
      this.getAllCatItems();
    },
  },
  methods: {
    getAllCatItems() {
      this.allCatItems = DB.data.filter(
        (item) => item.category == this.$store.getters.getFilteredCat
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
