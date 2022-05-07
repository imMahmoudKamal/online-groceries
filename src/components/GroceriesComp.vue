<template>
  <ul class="groceries">
    <li>
      <div class="groceries__item">
        <span>
          <img class="groceries__item__img" src="../assets/images/pulses.png" />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
    <li>
      <div class="groceries__item">
        <span>
          <img class="groceries__item__img" src="../assets/images/pulses.png" />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
    <li>
      <div class="groceries__item">
        <span>
          <img class="groceries__item__img" src="../assets/images/pulses.png" />
        </span>
        <p class="groceries__item__text">Pulses</p>
      </div>
    </li>
  </ul>
</template>
<script setup>
// export default {};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
.groceries {
  list-style: none;
  display: flex;
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
    margin-right: 25px;
    border-radius: 18px;
    background-color: rgb(248, 164, 76, 0.2);
    display: flex;
    align-items: center;

    @media (min-width: 48rem) {
      height: 250px;
      width: 100%;
      padding: 0 30px;
      margin: 0;
    }

    &__img {
      margin-right: 1rem;
      width: 70px;

      @media (min-width: 62rem) {
        margin-right: 1.5rem;
        background-size: 180px;
        width: 180px;

        & svg {
          width: inherit;
        }
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
