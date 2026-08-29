<script setup lang="ts">
import { ref } from 'vue'
import SiteNav from '@/libs/ui/SiteNav/SiteNav.vue'
import SiteFooter from '@/libs/ui/SiteFooter/SiteFooter.vue'
import IconSprite from '@/libs/ui/icons/IconSprite.vue'
import DownloadCard from '@/features/landing/tester-builds/DownloadCard.vue'
import { useReleaseDownloads } from '@/libs/useLatestRelease'
import { TEST_PHASE_DATA, TEST_PHASE_PASSWORD } from '@/features/test-phase/data'

const downloads = useReleaseDownloads()

const STORAGE_KEY = 'memorise-test-phase-unlocked'

const passwordInput = ref('')
const error = ref('')
const unlocked = ref(localStorage.getItem(STORAGE_KEY) === '1')

function submit() {
  if (passwordInput.value.trim() === TEST_PHASE_PASSWORD) {
    unlocked.value = true
    error.value = ''
    localStorage.setItem(STORAGE_KEY, '1')
  } else {
    error.value = 'Incorrect password. Please try again.'
  }
}
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

      <section v-if="!unlocked" class="test-phase__gate">
        <h2 class="test-phase__heading">Get the build</h2>
        <p class="test-phase__lede">Enter the tester password to unlock the download links.</p>
        <form class="test-phase__form" @submit.prevent="submit">
          <input
            v-model="passwordInput"
            type="password"
            placeholder="Tester password"
            class="test-phase__input"
          />
          <button type="submit" class="test-phase__download">Unlock</button>
        </form>
        <p v-if="error" class="test-phase__error">{{ error }}</p>
      </section>

      <section v-else class="test-phase__downloads">
        <h2 class="test-phase__heading">Get the build</h2>
        <div class="test-phase__grid">
          <DownloadCard v-for="d in downloads" :key="d.os" :download="d" />
        </div>
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

.test-phase__form {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}

.test-phase__input {
  flex: 1;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .05);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
}

.test-phase__error {
  font-size: var(--text-sm);
  color: #ff8a8a;
  margin: 0;
}

.test-phase__download,
.test-phase__form button {
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
  transition: background-color .15s ease;
}

.test-phase__download:hover,
.test-phase__form button:hover {
  background: rgb(30 144 255 / .2);
  border-color: rgb(126 200 255 / .4);
}

.test-phase__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: rgb(126 200 255 / .14);
  border: 1px solid rgb(126 200 255 / .18);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

@media (max-width: 900px) {
  .test-phase__grid {
    grid-template-columns: 1fr;
  }
}
</style>
