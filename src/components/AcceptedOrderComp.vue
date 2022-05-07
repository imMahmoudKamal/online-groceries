<template>
  <div class="order" ref="orderElementRef">
    <div class="order__content">
      <img class="order__content__img" src="@imgs/order.png" alt="order" />

      <h2 class="order__content__title">Your Order has been accepted</h2>
      <p class="order__content__text">
        Your items has been placcd and is on it’s way to being processed
      </p>

      <router-link class="order__content__cta" to="/" @click="checkoutHandler">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const orderElementRef = ref(null);
onMounted(() => {
  document.body.querySelector('#app').style.cssText = `
    overflow: hidden;
    height: ${orderElementRef.value.clientHeight}px;
  `;
});

const store = useStore();

function checkoutHandler() {
  store.state.cart = [];
  localStorage.removeItem('myCart');
  document.body.querySelector('#app').removeAttribute('style');
}
</script>

<style lang="scss" scoped>
.order {
  position: fixed;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(var(--clr-blue-900) / 25%);
    backdrop-filter: blur(2px);
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - 3rem);
    max-width: 20rem;
    padding: 2rem;
    border-radius: 0.75rem;
    background-color: rgb(var(--clr-white));
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1rem;

    &__title {
      font-size: 1.4rem;
      line-height: 1;
    }

    &__text {
      color: rgb(var(--clr-neutral-600));
      line-height: 1.2;
      font-size: 0.8rem;
    }

    &__cta {
      background-color: rgb(var(--clr-primary));
      color: rgb(var(--clr-white));
      height: 3rem;
      border-radius: 0.75rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
}
</style>
