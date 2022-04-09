<template>
  <ul class="features">
    <li v-for="{ id, title, text, icon } in features" :key="id">
      <div class="features__item">
        <span class="features__item__icon">
          <component :is="icon"></component>
        </span>
        <strong class="features__item__heading">{{ title }}</strong>
        <p class="features__item__text">{{ text }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import VrifiedIcon from '@imgs/svg/vrified.svg';
import AssuranceIcon from '@imgs/svg/assurance.svg';
import ServicesIcon from '@imgs/svg/services.svg';
import DeliveryIcon from '@imgs/svg/delivery.svg';

const features = [
  {
    id: 0,
    title: 'Fastest Delivery',
    text: 'Delivery at your door step',
    icon: DeliveryIcon,
  },
  {
    id: 1,
    title: '24x7 Services',
    text: 'Reach us when needed',
    icon: ServicesIcon,
  },
  {
    id: 2,
    title: 'Vrified Brands',
    text: 'Guaranteed Products',
    icon: VrifiedIcon,
  },
  {
    id: 3,
    title: '100% Assurance',
    text: 'We provide 100% assurance',
    icon: AssuranceIcon,
  },
];
</script>

<style lang="scss" scoped>
.features {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  text-align: center;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
      display: grid;
      place-content: center;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      background-color: rgb(var(--clr-primary) / 10%);

      svg {
        height: 2rem;
        fill: rgb(var(--clr-primary));
      }
    }

    &__heading,
    &__text {
      font-weight: 500;
      line-height: 1;
    }

    &__heading {
      color: rgb(var(--clr-neutral-900));
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    &__text {
      margin-top: 0.25rem;
      font-size: 0.6rem;
      color: rgb(var(--clr-neutral-600));
    }
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 62rem) {
    &__item {
      &__icon {
        width: 5rem;
        height: 5rem;

        svg {
          height: 2.5rem;
        }
      }

      &__heading {
        font-size: 1.2rem;
        margin-top: 1rem;
      }

      &__text {
        font-size: 0.9rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
