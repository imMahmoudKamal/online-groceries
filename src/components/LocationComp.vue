<template>
  <div class="locations">
    <div class="locations__img">
      <img src="@imgs/Location.jpg" alt="location" />
    </div>

    <ul class="locations__list">
      <li v-for="{ id, address } of locations" :key="id">
        <address class="locations__list__address">{{ address }}</address>
      </li>
    </ul>
  </div>
</template>

<script setup>
const locations = [
  {
    id: 0,
    address: 'Nectar Headquarters 1145 17th Street NW Washington, DC 20036',
  },
  {
    id: 1,
    address: 'Nectar Headquarters 1145 17th Street NW Washington, DC 20036',
  },
  {
    id: 2,
    address: 'Nectar Headquarters 1145 17th Street NW Washington, DC 20036',
  },
];
</script>

<style lang="scss" scoped>
.locations,
.locations__list {
  --gap: 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  @media (min-width: 23rem) {
    --gap: 1.5rem;
  }
}

.locations {
  position: relative;

  &__img {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-top: 100%;
    position: relative;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.75rem;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    grid-column: 1/3;
    grid-row: 1/3;

    li {
      position: relative;

      &:nth-child(1) {
        padding-top: 100%;

        address {
          position: absolute;
          inset: 0;
        }
      }

      &:nth-child(2),
      &:nth-child(3) {
        grid-row: 2/3;
      }
    }

    &__address {
      font-size: 0.7rem;
      font-style: normal;
      color: rgb(var(--clr-neutral-600));
      line-height: 1.2rem;
    }
  }

  @media (min-width: 23rem) {
    &__list__address {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 36rem) {
    &__list {
      grid-column: 1/2;
      grid-row: 1/2;
      grid-template-columns: 1fr;
      align-items: center;

      & li:nth-child(1) {
        padding-top: unset;

        address {
          position: static;
        }
      }

      & li:nth-child(2),
      & li:nth-child(3) {
        grid-row: unset;
      }
    }
  }

  @media (min-width: 62rem) {
    &__img {
      padding-top: 56.25%;
    }

    &__list__address {
      max-width: 10rem;
      margin-left: calc((100% / 12) + 1.5rem);
    }
  }

  @media (min-width: 1441px) {
    &__list__address {
      margin-left: calc((1165px / 12) + 1.25rem);
    }
  }
}
</style>
