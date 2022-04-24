<template>
  <div class="quantity">
    <button class="quantity__icon" @click="decrement"><MinusIcon /></button>
    <span class="quantity__num" ref="numberElement">{{ counter }}</span>
    <button class="quantity__icon quantity__icon--plus" @click="increment">
      <PlusIcon />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  count: { type: Number },
});

const emit = defineEmits(['itemCount']);

import PlusIcon from '@imgs/svg/plus.svg';
import MinusIcon from '@imgs/svg/minus.svg';
import { useBounceAnimation } from '../composables/useBounceAnimation';

const counter = ref(props.count || 1);
const numberElement = ref(null);

function increment() {
  counter.value = counter.value + 1;

  useBounceAnimation(numberElement.value, 'quantity__num--active');
  counterValue();
}

function decrement() {
  if (counter.value > 1) counter.value = counter.value - 1;

  useBounceAnimation(numberElement.value, 'quantity__num--active');
  counterValue();
}

function counterValue() {
  return emit('itemCount', counter.value);
}
</script>

<style lang="scss" scoped>
.quantity {
  gap: 0.5rem;
  --size: 1.75rem;

  > * {
    flex-shrink: 0;
  }

  :is(&__icon, &__num) {
    display: block;
    width: var(--size);
    height: var(--size);
    display: grid;
    place-items: center;
    font-size: 1rem;
    font-weight: 500;
  }

  &__icon {
    background-color: transparent;
    border: unset;
    outline: unset;
    appearance: none;
    padding: 0.5rem;
    fill: rgb(var(--clr-neutral-600) / 80%);
    cursor: pointer;

    &--plus {
      fill: rgb(var(--clr-primary));
    }
  }

  &__num {
    box-shadow: 0 0 0 1px rgb(var(--clr-neutral-600) / 50%);
    border-radius: 0.75rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      box-shadow: 0 0 0 3px rgb(var(--clr-neutral-600) / 100%);
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    }

    &--active::before {
      opacity: 1;
    }
  }

  @media (min-width: 23rem) {
    --size: 2rem;
  }
}
</style>
