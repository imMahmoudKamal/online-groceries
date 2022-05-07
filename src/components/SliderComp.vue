<template>
  <swiper
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="slider"
  >
    <!-- <div class="slider__bg" data-swiper-parallax="-10%" /> -->

    <swiper-slide
      class="slider__slide"
      v-for="(
        { title, titleLight, subTitle, text, link, imgURL }, index
      ) of slides"
      :key="index"
    >
      <img class="slider__slide__img" :src="imgURL" :alt="title" />

      <h1 class="slider__slide__title" data-swiper-parallax="-300">
        {{ title }}
        <span class="slider__slide__title__light" v-if="titleLight">
          {{ titleLight }}
        </span>
      </h1>

      <h2 class="slider__slide__subtitle" data-swiper-parallax="-200">
        {{ subTitle }}
      </h2>

      <p class="slider__slide__text" data-swiper-parallax="-100">
        {{ text }}
      </p>

      <router-link
        class="slider__slide__cta"
        :to="{ path: link }"
        data-swiper-parallax="-200"
      >
        Shop Now
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Parallax, Pagination, Navigation]);

const slides = [
  {
    title: 'Fruits & Vegetables',
    titleLight: 'Organic Market',
    subTitle: 'ALL NATURAL PRODUCTS',
    text: 'Orgainc food is food produced by methods that comply the standard of farming.',
    link: `/shop/fruits_vegetable`,
    imgURL: 'https://i.postimg.cc/MT3nfggM/slider.jpg',
  },
  {
    title: 'Meat and Fish',
    titleLight: 'Organic Market',
    subTitle: 'ALL NATURAL PRODUCTS',
    text: 'Orgainc food is food produced by methods that comply the standard of farming.',
    link: '/shop/meat',
    imgURL:
      'https://www.safefood.net/getmedia/c5e264c1-dfce-4cac-ae58-244831336cc8/protein.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force',
  },
  {
    title: 'Beverages',
    titleLight: 'Organic Market',
    subTitle: 'ALL NATURAL PRODUCTS',
    text: 'Orgainc food is food produced by methods that comply the standard of farming.',
    link: '/shop/beverages',
    imgURL: 'http://openmart.online/uploads/category/164947912178.jpeg',
  },
];
</script>

<style lang="scss">
.slider {
  height: calc(100vh - 9rem);
  min-height: 20rem;
  background: rgb(var(--clr-white));
  border-radius: 0.75rem;
  box-shadow: 0 3px 6px rgb(var(--clr-primary) / 10%),
    0 0 0 1px rgb(var(--clr-primary) / 10%);
  position: relative;

  &__slide {
    padding: 0 1.5rem 3.25rem;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        0,
        rgb(var(--clr-white) / 100%) -50%,
        transparent
      );
      z-index: 1;
    }

    & > *:not(&__img) {
      z-index: 2;
      position: relative;
    }

    &__img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__subtitle,
    &__title {
      font-weight: 600;
    }

    &__title,
    &__text {
      margin-top: 0.5rem;
      line-height: 1.2;
    }

    &__subtitle {
      font-size: 0.7rem;
      order: -1;
    }

    &__title {
      font-size: 0.9rem;
      max-width: 10rem;

      &__light {
        font-weight: 400;
        color: rgb(var(--clr-neutral-900) / 80%);
      }
    }

    &__text {
      font-weight: 500;
      font-size: 0.6rem;
      color: rgb(var(--clr-neutral-900) / 90%);
    }

    &__cta {
      background-color: rgb(var(--clr-primary));
      margin-top: 1.25rem;
      height: 3rem;
      border-radius: 0.75rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      color: rgb(var(--clr-white));
    }
  }

  @media (min-width: 23rem) {
    height: calc(100vh - 12rem);
  }

  @media (min-width: 48rem) {
    &__slide::before {
      background: linear-gradient(
        90deg,
        rgb(var(--clr-white) / 100%) -50%,
        transparent
      );
    }

    &__slide {
      padding: 6rem 3rem;
      display: grid;
      grid-auto-columns: 1fr;

      &__subtitle,
      &__title,
      &__text {
        max-width: 20rem;
      }

      &__title,
      &__text {
        margin-top: 1.5rem;
      }

      &__subtitle {
        font-size: 1.2rem;
        letter-spacing: -0.1px;
      }

      &__title {
        font-size: 2.4rem;
        line-height: 1.1;
      }

      &__text {
        font-size: 0.9rem;
      }

      &__cta {
        margin-top: auto;
        max-width: 14rem;
      }
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 1.25rem;
  }

  .swiper-pagination-bullet {
    width: 0.6rem;
    height: 0.6rem;
    background-color: rgb(var(--clr-neutral-900) / 60%);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 0.75rem;
    height: 0.75rem;
    background-color: rgb(var(--clr-neutral-900));
  }

  .swiper-button-next,
  .swiper-button-prev {
    right: 10px;
    padding: 30px;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      width: 1.5rem;
      height: 1.5rem;
      border-bottom: 0.25rem solid rgb(var(--clr-primary));
      border-right: 0.25rem solid rgb(var(--clr-primary));
      border-radius: 0.15rem;
      transform: translateX(calc(-50% - 0.25rem)) rotate(-45deg);
    }
  }

  .swiper-button-prev {
    &::before {
      transform: translateX(calc(-50% + 0.25rem)) rotate(135deg);
    }
  }
}
</style>
