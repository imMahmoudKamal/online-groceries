<template>
  <div class="container">
    <!-- About Banner  Section -->
    <div class="about-banner">
      <AboutImageComp />
    </div>

    <main>
      <!-- Features Section -->
      <section class="why-us" aria-label="Why Us">
        <FeaturesComp />
      </section>

      <!-- Team Members Section -->
      <section class="team-members" aria-labelledby="#team-members">
        <h2 class="section-title" id="team-members">Our Team</h2>
        <TeamMemberSection />
      </section>

      <!-- Locations Section -->
      <section class="location" aria-labelledby="#location">
        <h2 class="section-title" id="location">Location</h2>
        <LocationComp />
      </section>
    </main>
  </div>
</template>

<script setup>
import LocationComp from '../components/LocationComp.vue';
import AboutImageComp from '../components/AboutImageComp.vue';
import FeaturesComp from '../components/FeaturesComp.vue';
import TeamMemberSection from '../components/TeamMemberSection.vue';
</script>

<style lang="scss" scoped>
.about-banner,
.why-us,
.team-members,
.location {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 48rem) {
    margin-bottom: 3rem;
  }
}
</style>
