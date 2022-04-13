<template>
  <ul class="team">
    <li v-for="member in members" :key="member">
      <TeamMemberComp />
    </li>
  </ul>
</template>

<script setup>
const members = [1, 2, 3, 4];
import TeamMemberComp from '../components/TeamMemberComp.vue';
</script>

<style lang="scss" scoped>
.team {
  --gap: 0.75rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
  text-align: center;
  list-style: none;

  @media (min-width: 23rem) {
    --gap: 1.5rem;
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 62rem) {
  }
}
</style>
