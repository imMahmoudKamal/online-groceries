<template>
  <div class="cat__item">
    <router-link to="/cat-page" class="wrapper">
      <div class="cat__img">
        <img src="../assets/images/fruits_vegetables.png" />
      </div>
      <div class="cat__info">
        <p class="cat__text">Frash Fruits</p>
        <p class="cat__text">& Vegetable</p>
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
    border: 1px solid rgb(var(--clr-primary) / 70%);
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
      color: rgb(var(--clr-black-900));
      font-weight: 900;
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
  }
  &__text {
    line-height: 1.4;
  }
}
</style>
