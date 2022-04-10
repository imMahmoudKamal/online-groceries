<template>
  <h1 class="team__title">our team</h1>
  <div class="team">
    <TeamMemberComp></TeamMemberComp>
    <TeamMemberComp></TeamMemberComp>
    <TeamMemberComp></TeamMemberComp>
    <TeamMemberComp></TeamMemberComp>
  </div>
</template>

<script setup>
import TeamMemberComp from '../components/TeamMemberComp.vue';
</script>
<style lang="scss" scoped>
.team {
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  text-align: center;
  &__title {
    font-size: 1.2rem;
    font-size: 700;
    text-transform: capitalize;
    padding-bottom: 1.2rem;
    &:after {
      content: ' ';
      width: 3rem;
      height: 0.125rem;
      display: block;
      background-color: rgb(var(--clr-neutral-600));
    }
  }
  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, 1fr);
    &__title {
      font-size: 1.4rem;
      padding-bottom: 1.5rem;
      &:after {
        width: 5rem;
        height: 0.125rem;
      }
    }
  }
  @media (min-width: 62rem) {
    &__title {
      font-size: 1.6rem;
    }
  }
}
</style>
