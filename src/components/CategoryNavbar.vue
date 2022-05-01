<template>
  <nav class="nav">
    <ul class="nav__list" ref="lisItems">
      <li
        class="nav__item nav__active"
        ref="itemActive"
        @click="setActive('itemActive')"
      >
        {{ this.$store.getters.getCategoryName }}
      </li>

      <li
        class="nav__item"
        v-for="item in this.$store.getters.getShowList"
        :key="item"
        :ref="`item${this.$store.state.availableCategories.indexOf(item)}`"
        @click="setActive(this.$store.state.availableCategories.indexOf(item))"
      >
        {{ item }}
      </li>

      <li class="nav__item" @click="toggleArrowIcon">
        more
        <span class="nav__icon">
          <component :is="componentName" :style="{ width: '100%' }" />
        </span>
      </li>

      <li
        class="nav__item"
        v-for="item in this.$store.getters.getHideList"
        :class="[showHiddenList ? 'listShow' : 'listHide']"
        :key="item"
        :ref="`item${this.$store.state.availableCategories.indexOf(item)}`"
        @click="setActive(this.$store.state.availableCategories.indexOf(item))"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script>
import upArrow from '../assets/images/svg/up-arrow.svg';
import downArrow from '../assets/images/svg/down-arrow.svg';

export default {
  data() {
    return {
      listIndex: '',
      isDownArrow: true,
      componentName: downArrow,
      showHiddenList: false,
      isActive: true,
      activeCat: '',
    };
  },
  components: {
    upArrow,
    downArrow,
  },

  methods: {
    toggleArrowIcon() {
      this.isDownArrow = !this.isDownArrow;
      this.showHiddenList = !this.showHiddenList;
      if (this.isDownArrow == true) {
        this.componentName = downArrow;
      } else {
        this.componentName = upArrow;
      }
    },
    myEventHandler(e) {
      this.$store.commit('setWindowSize', e.currentTarget.innerWidth);
      this.$store.commit('setListIndex');
    },
    setActive(item) {
      for (let i = 0; i <= this.$store.state.availableCategories.length; i++) {
        this.$refs['lisItems'].children[i].classList.remove('nav__active');
      }
      if (item == 'itemActive') {
        this.$refs[`itemActive`].classList.add('nav__active');
        let catName = this.$refs[`itemActive`].innerText.toLowerCase();
        this.$router.push(`/shop/${catName}`);
        this.$store.commit('setFilteredCat', catName);
      } else {
        this.$refs[`item${item}`][0].classList.add('nav__active');
        let catName2 = this.$refs[`item${item}`][0].innerText.toLowerCase();
        this.$router.push(`/shop/${catName2}`);
        this.$store.commit('setFilteredCat', catName2);
      }
    },
  },
  created() {
    this.$store.commit('setWindowSize', window.innerWidth);
    this.$store.commit('setListIndex');
    window.addEventListener('resize', this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener('resize', this.myEventHandler);
  },
};
</script>

<style lang="scss">
.nav {
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--clr-white);
  box-shadow: 0px 3px 6px 0px rgba(var(--clr-primary) / 20%);
  margin: 1.5rem 0;
  font-size: 0.8rem;
  text-transform: capitalize;
  text-align: center;
  border-radius: 0.75rem;
  width: 100%;
  padding: 0;
  &__list {
    list-style: none;
    padding: 0.5rem;
    margin: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;

    z-index: 1;
    width: 100%;
  }

  &__item {
    position: relative;
    flex: 1;
    height: auto;
    display: flex;
    justify-content: center;
    align-item: center;
    z-index: 1;

    cursor: pointer;
  }

  .listShow {
    display: inline-block;
  }
  .listHide {
    display: none;
  }
  &__icon {
    width: 1rem;
    padding-left: 0.4rem;
    color: rgb(var(--clr-primary));
  }

  &__active {
    color: rgb(var(--clr-white));
    background-color: rgb(var(--clr-primary));
    padding: 0.3rem 0.75rem;
    border-radius: 0.75rem;
  }

  @media (min-width: 36rem) {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 48rem) {
    &__list {
      grid-template-columns: repeat(4, 1fr);
      font-size: 0.9rem;
    }
  }

  @media (min-width: 62rem) {
    &__list {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 75rem) {
    &__list {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
