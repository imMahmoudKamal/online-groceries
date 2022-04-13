<template>
  <ul class="groceries">
    <li>
      <div class="groceries__item">
        <span class="groceries__item__img">
          <PulsesIcon />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
    <li>
      <div class="groceries__item">
        <span class="groceries__item__img">
          <PulsesIcon />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
    <li>
      <div class="groceries__item">
        <span class="groceries__item__img">
          <PulsesIcon />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
    <li>
      <div class="groceries__item">
        <span class="groceries__item__img">
          <PulsesIcon />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
  </ul>
</template>
<script setup>
import PulsesIcon from '@imgs/svg/pulses.svg';
// export default {};
</script>
<style lang="scss" scoped>
.groceries {
  all: unset;
}
.groceries {
  list-style: none;
  display: flex;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    padding: 0px 15px;
    width: 267px;
    height: 100px;
    margin-right: 25px;
    border-radius: 18px;
    background-color: rgb(248, 164, 76, 0.2);
    display: flex;
    align-items: center;

    @media (min-width: 62rem) {
      height: 250px;
      width: 460px;
      padding: 0 30px;
    }

    &__img {
      margin-right: 1rem;

      @media (min-width: 62rem) {
        margin-right: 1.5rem;
        height: 180px;
        width: 180px;
        background-size: 180px;
      }
    }

    &__text {
      font-size: 1rem;
      font-weight: 600;
      color: #3e423f;

      @media (min-width: 62rem) {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
