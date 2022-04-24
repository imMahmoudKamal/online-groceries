<template>
  <div class="container">
    <main>
      <section class="cart" aria-labelledby="#order-summary">
        <h1 class="section-title" id="order-summary">Order Summary</h1>

        <table class="cart-items">
          <thead class="cart-items__header">
            <tr class="cart-items__header__row">
              <th>Item(s)</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody class="cart-items__body">
            <tr
              class="cart-items__body__item"
              v-for="{
                id,
                title,
                imgs: [firstImg],
                price,
                qtyPerPrice,
                qty,
              } in cartItems"
              :key="id"
            >
              <td><img :src="firstImg" :alt="title" /></td>
              <td>
                <h2>{{ title }}</h2>
                <span>{{ qtyPerPrice }}</span>
                <ItemCountComp
                  :count="qty"
                  @itemCount="(count) => itemCount(count, id)"
                />
              </td>
              <td class="price">
                <span>${{ price.toFixed(2).split('.')[0] }}.</span>
                <span class="price__decimal">
                  {{ price.toFixed(2).split('.')[1] }}
                </span>
              </td>
              <td>
                <button @click="store.commit('removeItem', id)">
                  <PlusIcon />
                </button>

                <h3 class="price">
                  <span>${{ (price * qty).toFixed(2).split('.')[0] }}.</span>
                  <span class="price__decimal">
                    {{ (price * qty).toFixed(2).split('.')[1] }}
                  </span>
                </h3>
              </td>
            </tr>
          </tbody>

          <tfoot class="cart-items__footer">
            <tr>
              <th colspan="2">Subtotal</th>
              <td class="price" colspan="2">
                <span>${{ calcTotal().split('.')[0] }}.</span>
                <span class="price__decimal">
                  {{ calcTotal().split('.')[1] }}
                </span>
              </td>
            </tr>
            <tr>
              <th colspan="2">Shipping</th>
              <td class="price" colspan="2">
                <span>${{ calcShipping().split('.')[0] }}.</span>
                <span class="price__decimal">
                  {{ calcShipping().split('.')[1] }}
                </span>
              </td>
            </tr>
            <tr>
              <th colspan="2">Total Amount</th>
              <td class="price" colspan="2">
                <span>${{ calcTotalAmount().split('.')[0] }}.</span>
                <span class="price__decimal">
                  {{ calcTotalAmount().split('.')[1] }}
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="4" class="cart-items__footer__cta">
                <button>Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  </div>
</template>

<script setup>
import ItemCountComp from '../components/ItemCountComp.vue';
import PlusIcon from '@imgs/svg/plus.svg';

import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const cartItems = computed(() => {
  return store.state.cart;
});

function calcTotal() {
  return cartItems.value
    .reduce((prevPrice, { price, qty }) => prevPrice + price * qty, 0)
    .toFixed(2);
}

function calcShipping() {
  const shippingFees = Math.max(calcTotal() * 0.15, 3);

  return shippingFees.toFixed(2);
}

function calcTotalAmount() {
  const totalAmount = +calcTotal() + +calcShipping();

  return totalAmount.toFixed(2);
}

function itemCount(count, id) {
  store.commit('changeQty', { id, count });
}
</script>

<style lang="scss" scoped>
$spacing: 1.5rem;
$gap: 0.75rem;

.cart {
  margin-top: $spacing;
  margin-bottom: $spacing;

  @media (min-width: 48rem) {
    margin-bottom: 3rem;
  }
}

.cart-items {
  border-collapse: collapse;
  display: block;

  &__header {
    display: none;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__item {
      display: grid;
      gap: $gap;
      grid-template-columns: repeat(4, 1fr);

      > * {
        display: block;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
      }

      > :nth-child(1) {
        padding-top: min(100%, 4rem);
        position: relative;

        img {
          position: absolute;
          inset: 50%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 2px 2px rgb(var(--clr-neutral-600) / 50%));
        }
      }

      > :nth-child(2) {
        grid-column: 2 span;
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          margin-top: 0.25rem;
          font-size: 0.7rem;
          font-weight: 500;
          line-height: 1;
          color: rgb(var(--clr-neutral-600) / 80%);
        }

        div {
          margin-top: 0.75rem;
          display: flex;
          width: fit-content;
        }
      }

      > :nth-child(3) {
        display: none;
      }

      > :nth-child(4) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        button {
          background-color: transparent;
          border: unset;
          outline: unset;
          appearance: none;
          padding: 0;

          svg {
            width: 0.75rem;
            transform: rotate(45deg);
            fill: rgb(var(--clr-neutral-600) / 80%);
          }
        }
      }
    }

    &__item + &__item {
      padding-top: $gap;
      border-top: 1px solid rgb(var(--clr-neutral-600) / 20%);
    }
  }

  &__footer {
    display: block;
    margin-top: 1.5rem;
    border-top: 1px solid rgb(var(--clr-neutral-600) / 20%);
    padding-top: $gap;

    tr {
      display: flex;
      justify-content: space-between;

      + tr {
        margin-top: 0.25rem;
      }

      th,
      td {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    &__cta {
      width: 100%;

      button {
        border: unset;
        outline: unset;
        appearance: none;
        background-color: rgb(var(--clr-primary));
        color: rgb(var(--clr-white));
        margin-top: $gap;
        height: 3rem;
        width: 100%;
        border-radius: 0.75rem;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 48rem) {
    &__header {
      display: block;
      margin-bottom: 1.5rem;
      background-color: rgb(var(--clr-neutral-600) / 10%);
      margin-right: -1.25rem;
      margin-left: -1.25rem;
      padding-right: 1.25rem;
      padding-left: 1.25rem;

      &__row {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: repeat(6, 1fr);
        padding: 0.25rem 0;

        th {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgb(var(--clr-neutral-600));
        }

        th:nth-child(1) {
          grid-column: 3 span;
          text-align: start;
        }

        th:nth-child(4) {
          text-align: end;
        }
      }
    }

    &__body__item {
      grid-template-columns: repeat(6, 1fr);
      align-items: center;
      position: relative;
    }

    &__body__item td:nth-child(2) {
      grid-column: 3 span;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: $gap;

      :is(h2, span) {
        grid-row: 1/3;
        grid-column: 1/3;
      }

      span {
        margin-top: 1.25rem;
      }

      div {
        grid-column: 2/3;
        grid-row: 1/3;
        margin-top: 0;
        margin-left: auto;
      }
    }

    &__body__item td:nth-child(3) {
      display: block;
      margin: 0;
      text-align: center;
    }

    &__body__item td:nth-child(4) button {
      line-height: 0;
      position: absolute;
      right: 0;
      transform: translateY(-1.5rem);
    }

    &__footer {
      display: grid;
      grid-template-columns: repeat(6, 1fr);

      > * {
        grid-column: 5/7;
      }
    }
  }

  @media (min-width: 62rem) {
    &__header {
      padding-right: calc((100% / 12));
      padding-left: calc((100% / 12));
    }

    &__body,
    &__footer {
      margin: 0 calc((100% / 12) - 1rem);
    }

    &__body__item td:nth-child(2) h2 {
      font-size: 1rem;
    }

    &__body__item td:nth-child(2) span {
      font-size: 0.8rem;
    }

    &__footer tr :is(th, td) {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1441px) {
    &__header {
      margin-right: 0;
      margin-left: 0;
    }
  }
}

.price {
  margin-top: auto;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.8px;

  &__decimal {
    font-size: 0.8em;
    color: rgb(var(--clr-neutral-900) / 70%);
  }

  @media (min-width: 62rem) {
    font-size: 1.1rem;
  }
}
</style>
