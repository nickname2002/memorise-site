<script setup>
import FeatureCard from './FeatureCard.vue'
import { LANDING_DATA } from '../../../data.js'
</script>

<template>
  <section class="section features" id="features">
    <div class="wrap">
      <div class="reveal">
        <p class="eyebrow">Why Memorise</p>
        <h2 class="section-title">Simple by design.</h2>
        <p class="section-lead">Most note-taking apps pile on features nobody asked for. Memorise does the opposite: a fast, focused place to write and organise your thoughts, with nothing bolted on.</p>
      </div>
      <div class="features__grid reveal">
        <FeatureCard
          v-for="(f, i) in LANDING_DATA.features"
          :key="i"
          :icon="f.icon"
          :title="f.title"
          :desc="f.desc"
          :kbd="f.kbd"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding-top: 184px;
  background: var(--color-white);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 56px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

@media (max-width: 720px) {
  .features {
    padding-top: 150px;
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
