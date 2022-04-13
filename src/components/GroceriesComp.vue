<template lang="">
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
  </ul>
</template>
<script setup>
import PulsesIcon from '@imgs/svg/pulses.svg';
// export default {};
</script>
<style lang="scss" scoped>
.groceries {
  list-style: none;
  padding: 0 0 0 25px;
  display: flex;
  overflow: auto;
  white-space: nowrap;

  &__item {
    padding: 15px 15px;
    width: calc(75vw - 25px);
    // width: 267.29px;
    height: 100px;
    margin-right: 25px;
    border-radius: 18px;
    background-color: rgb(248, 164, 76, 0.2);
    display: flex;
    align-items: center;

    &__img {
      margin-right: 1rem;
    }

    &__text {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
