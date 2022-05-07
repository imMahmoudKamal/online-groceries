<template>
  <nav class="nav">
    <ul class="nav__list" ref="lisItems">
      <li
        class="nav__item nav__active"
        @click="
          (event) =>
            setActive(
              event,
              this.navbarCategories.find(
                (category) => category.id === this.activeCat
              ).id
            )
        "
      >
        {{
          this.navbarCategories.find(
            (category) => category.id === this.activeCat
          ).Name
        }}
      </li>

      <li
        class="nav__item"
        v-for="category in this.getShowList()"
        :key="category.id"
        @click="(event) => setActive(event, category.id)"
      >
        {{ category.Name }}
      </li>

      <!-- more button  -->
      <li class="nav__item" @click="toggleArrowIcon">
        more
        <span class="nav__icon">
          <component :is="componentName" :style="{ width: '100%' }" />
        </span>
      </li>

      <li
        class="nav__item"
        v-for="category in this.getHideList()"
        :class="[showHiddenList ? 'listShow' : 'listHide']"
        :key="category.id"
        @click="(event) => setActive(event, category.id)"
      >
        {{ category.Name }}
      </li>
    </ul>
  </nav>
</template>

<script>
import upArrow from '../assets/images/svg/up-arrow.svg';
import downArrow from '../assets/images/svg/down-arrow.svg';
import DB from '@/db.json';

export default {
  props: ['activeCategory'],
  data() {
    return {
      listIndex: '',
      isDownArrow: true,
      componentName: downArrow,
      showHiddenList: false,
      isActive: true,
      activeCat: this.activeCategory,
      navbarCategories: DB.categoriesInfo,
      index: null,
      activeItem: null,
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

    setActive(event, id) {
      this.$refs['lisItems'].querySelectorAll('li').forEach((listItem) => {
        listItem.classList.remove('nav__active');
      });

      event.target.classList.add('nav__active');
      this.activeItem = event.target.innerText;
      this.$router.push({ path: id });
    },

    setListIndex(event) {
      let width = event ? event.currentTarget.innerWidth : window.innerWidth;
      let resultIndex;
      if (width >= 368 && width < 768) {
        resultIndex = 1;
      } else if (width >= 768 && width < 992) {
        resultIndex = 2;
      } else if (width >= 992 && width < 1200) {
        resultIndex = 3;
      } else {
        resultIndex = 4;
      }
      this.index = resultIndex;

      this.$refs['lisItems']?.querySelectorAll('li').forEach((listItem) => {
        if (listItem.innerText === this.activeItem) {
          listItem.classList.add('nav__active');
        }
      });
    },

    getShowList() {
      // return all not active category
      const allCategories = this.navbarCategories.filter(
        (category) => category.id !== this.activeCat
      );

      // return before more btn
      return allCategories.filter((c, index) => index < this.index);
    },

    getHideList() {
      // return all not active category
      const allCategories = this.navbarCategories.filter(
        (category) => category.id !== this.activeCat
      );

      // return before more btn
      return allCategories.filter((c, index) => index >= this.index);
    },
  },

  created() {
    this.setListIndex();
    window.addEventListener('resize', this.setListIndex);
  },

  unmounted() {
    window.removeEventListener('resize', this.setListIndex);
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
