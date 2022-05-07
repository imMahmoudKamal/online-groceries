<template>
  <ul class="groceries">
    <li>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/fruits%20&%20vegetable/apple-13"
      >
        <div class="groceries__item">
          <span>
            <img
              class="groceries__item__img"
              src="../assets/images/apple.png"
            />
          </span>
          <p class="groceries__item__text">Apple</p>
        </div>
      </router-link>
    </li>
    <li>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/beverages/sprite_can-2"
      >
        <div class="groceries__item">
          <span>
            <img
              class="groceries__item__img"
              src="../assets/images/sprite.png"
            />
          </span>
          <p class="groceries__item__text">Sprite</p>
        </div>
      </router-link>
    </li>
    <li>
      <router-link
        style="text-decoration: none; color: inherit"
        to="/dairy%20&%20eggs/eggs-49"
      >
        <div class="groceries__item">
          <span>
            <img class="groceries__item__img" src="../assets/images/eggs.png" />
          </span>
          <p class="groceries__item__text">Eggs</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script setup>
// export default {};
</script>
<style lang="scss" scoped>
img {
  height: 80px;
  object-fit: contain;
}
ul {
  --size: 0.75rem;
  margin: 0 calc(var(--size) * -1);
  padding: 0;
  scroll-snap-type: x mandatory;
  scroll-padding-right: var(--size);

  & li:first-child {
    margin-left: var(--size);
  }

  & li:last-child {
    margin-right: var(--size);
  }

  & li {
    scroll-snap-align: end;
  }

  @media (min-width: 36rem) {
    --size: 1.25rem;
  }
}
.groceries {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 48rem) {
    width: 100%;
    overflow: visible;
    white-space: normal;
    justify-content: space-evenly;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    padding: 0;
  }

  &__item {
    padding: 0px 15px;
    width: 267px;
    height: 100px;
    border-radius: 18px;
    background-color: rgb(248, 164, 76, 0.2);
    display: flex;
    align-items: center;

    @media (min-width: 48rem) {
      width: 100%;
      height: auto;
      padding: 20px 30px;
      margin: 0;
    }

    @media (min-width: 60rem) {
      padding: 40px 30px;
    }

    &__img {
      margin-right: 1rem;
      width: 70px;

      @media (min-width: 62rem) {
        margin-right: 1.5rem;
        background-size: 180px;
        width: 90px;

        & svg {
          width: inherit;
        }
      }
    }

    &__text {
      font-size: 1rem;
      font-weight: 600;
      color: #3e423f;
      text-decoration: none;

      @media (min-width: 62rem) {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
