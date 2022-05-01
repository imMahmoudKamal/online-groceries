<template>
  <div class="item">
    <router-link to="/category/item" class="wrapper">
      <div class="item__img">
        <span class="item__img__blur">
          <img :src="props.itemDetails.imgs[0]" alt="item-image" />
        </span>

        <img :src="props.itemDetails.imgs[0]" alt="item-image" />
      </div>

      <strong class="item__title">{{ props.itemDetails.title }}</strong>
      <span class="item__qty">{{ props.itemDetails.qtyPerPrice }}</span>

      <span class="item__price">${{ props.itemDetails.price }}</span>
    </router-link>

    <button
      class="item__cart"
      @click="store.commit('addToCart', props.itemDetails)"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script setup>
import PlusIcon from '@imgs/svg/plus.svg';
import { useStore } from 'vuex';
const store = useStore();
const props = defineProps({ itemDetails: Object });
</script>

<style lang="scss" scoped>
.item {
  padding-top: 100%;
  position: relative;
  border-radius: 0.75rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    box-shadow: 0 0 0 1px rgb(var(--clr-primary) / 50%),
      0 3px 6px rgb(var(--clr-primary) / 25%);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

  .wrapper {
    position: absolute;
    inset: 0;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    line-height: 1;
    text-decoration: none;
    color: rgb(var(--clr-neutral-900));
    border: 1px solid rgb(var(--clr-neutral-600) / 25%);
    border-radius: 0.75rem;
  }

  &__img,
  &__img__blur {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    height: 35%;
    width: 100%;
    position: relative;

    &__blur {
      filter: blur(0.5rem);
      position: absolute;
      inset: 0;
      opacity: 50%;
    }

    img {
      position: relative;
      height: 100%;
    }
  }

  &__title {
    margin-top: 0.25rem;
    font-weight: 600;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__qty {
    font-size: 0.7rem;
    font-weight: 500;
    color: rgb(var(--clr-neutral-600) / 80%);
  }

  &__price {
    font-size: 1rem;
    font-weight: 600;
    margin-top: auto;
  }

  &__cart {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    background-color: rgb(var(--clr-primary));
    fill: rgb(var(--clr-white));
    border-radius: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      box-shadow: 0 0 0 0.2rem rgb(var(--clr-primary) / 60%);
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    }

    &:active::before {
      opacity: 1;
    }
  }

  @media (min-width: 23rem) {
    .wrapper {
      padding: 0.75rem;
    }

    &__img {
      height: 40%;
    }

    &__title {
      margin-top: 0.75rem;
    }

    &__qty {
      margin-top: 0.25rem;
    }

    &__cart {
      bottom: 0.75rem;
      right: 0.75rem;
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
