<template>
  <div>
    <ItemsListComp :itemsList="allCatItems" />
  </div>
</template>

<script>
import ItemsListComp from '../components/ItemListComp.vue';
export default {
  data() {
    return {
      allCatItems: [],
    };
  },
  components: { ItemsListComp },
  created() {
    this.getAllCatItems();
    if (
      this.$store.getters.getFilteredCat == '' ||
      this.$store.getters.getCategoryName == ''
    ) {
      this.$store.commit('setFilteredCat', 'beverages');
      this.$store.commit('setCategoryName', 'beverages');
    }
  },
  watch: {
    $route() {
      this.getAllCatItems();
    },
  },
  methods: {
    getAllCatItems() {
      fetch('../../db.json')
        .then((res) => res.json())
        .then(({ data }) => {
          this.allCatItems = data.filter(
            (elem) => elem.category == this.$store.getters.getFilteredCat
          );
        })
        .catch((err) => {
          console.log(err);
        });
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
