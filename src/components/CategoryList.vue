<template>
  <ul class="categories">
    <li
      v-for="{ Name, ImagURL, BackgroundColor, Border } in categoriesInfo"
      :key="Name"
    >
      <div
        class="cat__item"
        :style="{
          backgroundColor: BackgroundColor,
        }"
      >
        <router-link
          to="/cat-page"
          class="wrapper"
          :style="{
            border: Border,
          }"
        >
          <div class="cat__img">
            <img :src="ImagURL" />
          </div>
          <div class="cat__info">
            <strong class="cat__text">{{ Name }}</strong>
          </div>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'categoryList ',

  props: ['categoryList'],
  data() {
    return {
      categoriesInfo: this.categoryList,
    };
  },
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  text-align: center;
  list-style: none;

  .cat {
    &__item {
      padding-top: 100%;
      position: relative;
      border-radius: 0.75rem;
      background-color: rgb(var(--clr-primary) / 10%);
      .wrapper {
        position: absolute;
        inset: 0;
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        border-radius: 0.75rem;
        color: rgb(var(--clr-blue-900));
        border: 1px solid rgb(var(--clr-primary) / 70%);
      }
    }

    &__img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40%;
      width: 100%;
      position: relative;
      img {
        position: relative;
        height: 100%;
        width: 60%;
      }
    }

    &__info {
      margin-top: 0.8rem;
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;
      line-height: 1.4;
    }

    &__text {
      font-weight: 600;
    }
  }

  @media (min-width: 23rem) {
    .cat {
      &__info {
        margin-top: 1.2rem;
        font-size: 0.7rem;
      }
    }
  }
  @media (min-width: 36rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
    .cat {
      &__info {
        font-size: 0.8rem;
      }
    }
  }
  @media (min-width: 62rem) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
