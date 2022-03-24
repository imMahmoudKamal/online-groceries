<template>
  <h1>HELLO WORLD</h1>
  <h2>counter: {{ count }}</h2>

  <div>
    <button @click="store.commit('increment')">increment</button>
    <button @click="store.commit('decrement')">decrement</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const count = computed(() => {
  return store.state.counter;
});
</script>
