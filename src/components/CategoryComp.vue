<template>
  <div class="cat__item">
    <router-link to="/cat-page" class="wrapper">
      <div class="cat__img">
        <img src="@imgs/fruits_vegetables.png" />
      </div>
      <div class="cat__info">
        <strong class="cat__text">Frash Fruits & Vegetable</strong>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryComp',
};
</script>

<style lang="scss" scoped>
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
    margin-top: 1.2rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.9rem;
    text-transform: capitalize;
    line-height: 1.4;
  }

  &__text {
    font-weight: 600;
  }
}
</style>
