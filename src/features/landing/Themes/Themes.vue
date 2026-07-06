<script setup>
import ThemeSlideshow from './ThemeSlideshow.vue'
import { LANDING_DATA } from '@/features/landing/data.js'
</script>

<template>
  <section class="section themes" id="themes">
    <div class="wrap">
      <div class="themes__head reveal">
        <p class="eyebrow">{{ LANDING_DATA.themes.eyebrow }}</p>
        <h2 class="section-title">{{ LANDING_DATA.themes.title }}</h2>
        <p class="section-lead themes__lead">{{ LANDING_DATA.themes.lead }}</p>
      </div>
      <div class="themes__shot reveal">
        <ThemeSlideshow :images="LANDING_DATA.themes.images" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.themes {
  background: var(--color-white);
}

.themes__head {
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
}

.themes__lead {
  margin-left: auto;
  margin-right: auto;
}

.themes__shot {
  max-width: 880px;
  margin: 48px auto 0;
}
</style>
