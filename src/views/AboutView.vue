<template>
  <h1>About</h1>
  <div class="container">
    <!-- About Banner  Section -->
    <div class="about-banner">
      <AboutImageComp />
    </div>

    <!-- Features Section -->
    <section class="why-us" aria-label="Why Us">
      <FeaturesComp />
    </section>

    <!-- Team Members Section -->
    <section class="team-members" aria-labelledby="#team-members">
      <h2 class="section-title" id="team-members">Our Team</h2>
      <TeamMemberSection />
    </section>
  </div>
  <LocationComp />
  <FooterComp />
</template>

<script setup>
import LocationComp from '../components/LocationComp.vue';
import FooterComp from '../components/layout/FooterComp.vue';
import AboutImageComp from '../components/AboutImageComp.vue';
import FeaturesComp from '../components/FeaturesComp.vue';
import TeamMemberSection from '../components/TeamMemberSection.vue';
</script>

<style lang="scss" scoped>
.about-banner {
  margin-top: 1.5rem;
}
.why-us,
.team-members {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
