<template>
  <section class="product" aria-labelledby="#product-title">
    <div class="product__img">
      <swiper
        :speed="600"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        class="product__img__slider"
      >
        <swiper-slide v-for="img of itemDetails.imgs" :key="img">
          <img
            class="product__img__slider__slide product__img__slider__slide--blur"
            :src="img"
            :alt="itemDetails.title"
          />
          <img
            class="product__img__slider__slide"
            :src="img"
            :alt="itemDetails.title"
          />
        </swiper-slide>
      </swiper>
    </div>

    <h1 class="product__title" id="product-title">{{ itemDetails.title }}</h1>
    <span class="product__weight">{{ itemDetails.qtyPerPrice }}</span>

    <ItemCountComp
      class="product__qty"
      :count="itemDetails.qty"
      @itemCount="itemCount"
    />

    <h2 class="product__price">${{ itemDetails.price }}</h2>

    <hr class="separator" />

    <div class="product__details">
      <h3 class="product__details__title">Product Details</h3>

      <p class="product__details__text">
        Apples are nutritious. Apples may be good for weight loss. apples may be
        good for your heart. As part of a healtful and varied diet.
      </p>
    </div>

    <hr class="separator" />

    <div class="product__nutritions">
      <h3 class="product__nutritions__title">Nutritions</h3>

      <span class="product__nutritions__text">100gr</span>
    </div>

    <hr class="separator" />

    <div class="product__review">
      <h3 class="product__review__title">Review</h3>

      <div class="product__review__rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>

    <button
      class="product__cta"
      @click="store.commit('addToCart', itemDetails)"
    >
      Add To Basket
    </button>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import StarIcon from '@imgs/svg/star.svg';
import ItemCountComp from '../components/ItemCountComp.vue';

import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const itemDetails = ref({
  id: 0,
  title: 'Natural Red Apple',
  imgs: [
    '/src/assets/images/apple.png',
    '/src/assets/images/apple.png',
    '/src/assets/images/apple.png',
  ],
  price: 4.99,
  qty: 1,
  qtyPerPrice: '1kg, Price',
});

function itemCount(count) {
  itemDetails.value.qty = count;
}
</script>

<style lang="scss" scoped>
$spacing: 1.5rem;

.product {
  margin-top: $spacing;

  &__img {
    padding-top: min(100%, 18rem);
    background-color: rgb(var(--clr-neutral-600) / 5%);
    border-radius: 0.75rem;
    position: relative;
    box-shadow: 0 0 0 1px rgb(var(--clr-primary) / 5%),
      0 3px 6px rgb(var(--clr-primary) / 10%);

    &__slider {
      position: absolute;
      inset: 0;

      &__slide {
        position: absolute;
        inset: 50%;
        transform: translate(-50%, calc(-50% - 1rem));
        width: 90%;
        height: 90%;
        object-fit: contain;

        &--blur {
          filter: blur(0.5rem);
          opacity: 25%;
        }
      }
    }
  }

  &__title {
    margin-top: $spacing;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
  }

  &__weight {
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(var(--clr-neutral-600) / 80%);
    line-height: 1;
    display: block;
    margin-top: 0.5rem;
    margin-bottom: $spacing;
  }

  &__qty {
    display: inline-flex;
    width: 50%;
  }

  &__price {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
    display: inline-block;
    width: 50%;
    text-align: end;
  }

  &__details__title,
  &__nutritions__title,
  &__review__title {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1;
  }

  &__details__text {
    margin-top: 0.5rem;
    font-weight: 500;
    line-height: 1.25;
    font-size: 0.7rem;
    color: rgb(var(--clr-neutral-600) / 80%);
  }

  &__nutritions,
  &__review {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nutritions__text {
    padding: 0.3rem;
    border-radius: 0.25rem;
    font-size: 0.6rem;
    font-weight: 600;
    line-height: 1;
    background-color: rgb(var(--clr-neutral-600) / 20%);
    color: rgb(var(--clr-neutral-600));
  }

  &__review__rating {
    display: flex;
    gap: 0.1rem;

    svg {
      display: block;
      height: 0.75rem;
      fill: rgb(var(--clr-primary));
    }
  }

  &__cta {
    border: unset;
    outline: unset;
    appearance: none;
    background-color: rgb(var(--clr-primary));
    color: rgb(var(--clr-white));
    margin-top: $spacing;
    height: 3rem;
    width: 100%;
    border-radius: 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;

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

  @media (min-width: 48rem) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    column-gap: $spacing;

    > * {
      grid-row: 1/2;
      margin: 0;
      width: 100%;
    }

    :is(&__title, &__price) {
      grid-column: 2/4;
    }

    &__title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 5rem;
    }

    :is(&__weight, &__qty, &__cta) {
      grid-column: 2/3;
    }

    :is(&__nutritions, &__review, &__details) {
      grid-column: 3/4;
    }

    :is(&__weight, &__review) {
      margin-top: 2.5rem;
    }

    :is(&__nutritions, &__qty) {
      margin-top: 4rem;
    }

    :is(&__details, &__cta) {
      margin-top: auto;
    }
  }

  @media (min-width: 62rem) {
    :is(&__title, &__price) {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    &__price {
      font-size: 1.4rem;
    }

    &__weight {
      font-size: 1rem;
    }

    :is(&__review__title, &__nutritions__title, &__details__title) {
      font-size: 1.2rem;
    }

    &__details__text {
      font-size: 0.75rem;
    }

    :is(&__weight, &__review) {
      margin-top: 3.5rem;
    }

    :is(&__nutritions, &__qty) {
      margin-top: 5.5rem;
    }
  }
}

.separator {
  display: block;
  height: 1px;
  margin: calc($spacing / 2) 0;
  border: none;
  background-color: rgb(var(--clr-neutral-600) / 20%);

  @media (min-width: 48rem) {
    display: none;
  }
}
</style>

<style lang="scss">
.product__img__slider {
  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1.25rem;
  }

  .swiper-pagination-bullet {
    width: 0.3rem;
    height: 0.3rem;
    background-color: rgb(var(--clr-neutral-900) / 60%);
    opacity: 1;
    transition: width 100ms linear;
  }

  .swiper-pagination-bullet-active {
    width: 1.25rem;
    border-radius: 1rem;
    background-color: rgb(var(--clr-primary));
  }

  @media (min-width: 48rem) {
    :is(.swiper-button-next, .swiper-button-prev) {
      padding: 1rem;
      right: 0;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 1rem;
        height: 1rem;
        border-bottom: 0.2rem solid rgb(var(--clr-primary));
        border-right: 0.2rem solid rgb(var(--clr-primary));
        border-radius: 0.15rem;
        transform: translateX(calc(-50% - 0.25rem)) rotate(-45deg);
      }
    }

    .swiper-button-prev {
      left: 0;

      &::before {
        transform: translateX(calc(-50% + 0.25rem)) rotate(135deg);
      }
    }
  }
}
</style>
