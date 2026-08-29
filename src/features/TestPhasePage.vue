<script setup lang="ts">
import SiteNav from '@/libs/ui/SiteNav/SiteNav.vue'
import SiteFooter from '@/libs/ui/SiteFooter/SiteFooter.vue'
import IconSprite from '@/libs/ui/icons/IconSprite.vue'
import { TEST_PHASE_DATA } from '@/features/test-phase/data'
</script>

<template>
  <IconSprite />

  <SiteNav :solid="true" />

  <main class="test-phase">
    <div class="wrap test-phase__wrap">
      <a class="test-phase__back" href="./#testers">&larr; Back to downloads</a>

      <h1 class="test-phase__title">Beta test phase</h1>
      <p class="test-phase__lede">{{ TEST_PHASE_DATA.intro }}</p>

      <section>
        <h2 class="test-phase__heading">Test instructions</h2>
        <ol class="test-phase__list">
          <li v-for="step in TEST_PHASE_DATA.instructions" :key="step.title">
            <strong>{{ step.title }}</strong> — {{ step.body }}
          </li>
        </ol>
      </section>

      <section>
        <h2 class="test-phase__heading">Known issues</h2>
        <ul class="test-phase__list">
          <li v-for="issue in TEST_PHASE_DATA.knownIssues" :key="issue.title">
            <strong>{{ issue.title }}</strong>
            <span
              v-if="issue.severity"
              class="test-phase__severity"
              :class="`test-phase__severity--${issue.severity}`"
            >{{ issue.severity }}</span>
            — {{ issue.body }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="test-phase__heading">Privacy</h2>
        <p class="test-phase__lede">{{ TEST_PHASE_DATA.privacyIntro }}</p>
        <ul class="test-phase__list">
          <li v-for="point in TEST_PHASE_DATA.privacyPoints" :key="point.title">
            <strong>{{ point.title }}</strong> — {{ point.body }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="test-phase__heading">Get the build</h2>
        <p class="test-phase__lede">
          Downloads live on the main site — you'll need the tester password there too.
        </p>
        <a class="test-phase__download" href="./#testers">Go to downloads &rarr;</a>
      </section>
    </div>
  </main>

  <SiteFooter />
</template>

<style scoped>
.test-phase {
  background: var(--night-950);
  color: var(--ink-on-night);
  padding: 140px 0 80px;
  min-height: 100vh;
}

.test-phase__wrap {
  max-width: 760px;
}

.test-phase__back {
  display: inline-block;
  margin-bottom: 24px;
  font-size: var(--text-sm);
  color: var(--ink-on-night-faint);
  text-decoration: none;
}

.test-phase__back:hover {
  color: var(--ink-on-night);
}

.test-phase__title {
  font-size: var(--text-3xl, 2rem);
  font-weight: var(--fw-semibold);
  margin: 0 0 14px;
}

.test-phase__lede {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
  margin: 0 0 24px;
}

.test-phase__heading {
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--fw-semibold);
  margin: 32px 0 14px;
}

.test-phase__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-left: 22px;
  margin: 0 0 24px;
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
}

.test-phase__list strong {
  color: var(--ink-on-night);
}

.test-phase__severity {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--text-2xs);
  font-weight: var(--fw-semibold);
  letter-spacing: .04em;
  text-transform: uppercase;
}

.test-phase__severity--minor {
  background: rgb(126 200 255 / .16);
  color: #7ec8ff;
  border: 1px solid rgb(126 200 255 / .25);
}

.test-phase__severity--major {
  background: rgb(255 120 120 / .16);
  color: #ff8a8a;
  border: 1px solid rgb(255 120 120 / .25);
}

.test-phase__download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .07);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  cursor: pointer;
  text-decoration: none;
  transition: background-color .15s ease;
}

.test-phase__download:hover {
  background: rgb(30 144 255 / .2);
  border-color: rgb(126 200 255 / .4);
}
</style>
