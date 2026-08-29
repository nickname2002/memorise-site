<script setup lang="ts">
import { ref } from 'vue'
import Starfield from '@/libs/ui/Starfield/Starfield.vue'
import DownloadCard from './DownloadCard.vue'
import { LANDING_DATA } from '@/features/landing/data'
import { useReleaseDownloads } from '@/libs/useLatestRelease'
import { useTestPhaseGate } from '@/libs/useTestPhaseGate'

const emit = defineEmits<{ toast: [message: string] }>()

const downloads = useReleaseDownloads()
const rel = LANDING_DATA.release

const { unlocked, unlock } = useTestPhaseGate()
const passwordInput = ref('')
const error = ref('')

function submit() {
  if (unlock(passwordInput.value)) {
    error.value = ''
  } else {
    error.value = 'Incorrect password. Please try again.'
  }
}
</script>

<template>
  <section class="section builds" id="testers">
    <Starfield :density="0.6" />
    <div class="builds__inner">
      <div class="wrap">
        <div class="builds__head reveal">
          <p class="eyebrow eyebrow--night">For testers</p>
          <h2 class="section-title">Get the latest build</h2>
          <p class="section-lead">Memorise is in private <span style="color:var(--star-soft)">beta</span>. Grab the latest build below.</p>
          <p class="section-lead">Testers: read the <a href="./test-phase.html" class="builds__link">test guide &amp; known issues</a>.</p>
        </div>

        <div class="release reveal">
          <div class="release__card">
            <div class="release__top">
              <div>
                <div class="release__verline">
                  <span class="release__ver">Memorise</span>
                  <span class="release__chip">{{ rel.channel }}</span>
                </div>
              </div>
            </div>
            <div class="release__dl">
              <DownloadCard
                v-for="d in downloads"
                :key="d.os"
                :download="d"
                @toast="emit('toast', $event)"
              />
            </div>

            <template v-if="!unlocked">
              <div class="release__divider"></div>
              <div class="release__gate">
                <h3 class="release__gate-title">Unlock downloads</h3>
                <p class="release__gate-text">
                  Memorise is currently in a closed beta. Enter the tester password you were
                  given to unlock the download links above.
                </p>
                <form class="release__gate-form" @submit.prevent="submit">
                  <input
                    v-model="passwordInput"
                    type="password"
                    placeholder="Tester password"
                    class="release__gate-input"
                  />
                  <button type="submit" class="release__gate-btn">Unlock</button>
                </form>
                <p v-if="error" class="release__gate-error">{{ error }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.builds {
  background: var(--night-900);
  color: var(--ink-on-night);
  position: relative;
  overflow: hidden;
}

.builds__inner {
  position: relative;
  z-index: 2;
}

.builds__head {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

.builds__head .section-title {
  color: var(--ink-on-night);
}

.builds__head .section-lead {
  color: var(--ink-on-night-dim);
  margin-left: auto;
  margin-right: auto;
}

.builds__link {
  color: var(--star-soft);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.builds__link:hover {
  color: var(--star-pale);
}

.release {
  max-width: 760px;
  margin: 0 auto;
}

.release__card {
  background: rgb(255 255 255 / .04);
  border: 1px solid rgb(126 200 255 / .18);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.release__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 26px 30px;
  border-bottom: 1px solid rgb(126 200 255 / .14);
  flex-wrap: wrap;
}

.release__verline {
  display: flex;
  align-items: center;
  gap: 12px;
}

.release__ver {
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  color: var(--ink-on-night);
  letter-spacing: -0.02em;
}

.release__chip {
  font-size: var(--text-2xs);
  font-weight: var(--fw-semibold);
  letter-spacing: .04em;
  text-transform: uppercase;
  background: rgb(52 210 123 / .16);
  color: #5fe6a0;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  border: 1px solid rgb(52 210 123 / .25);
}

.release__dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgb(126 200 255 / .14);
}

@media (max-width: 900px) {
  .release__dl {
    grid-template-columns: 1fr;
  }
}

.release__divider {
  height: 1px;
  background: rgb(126 200 255 / .14);
}

.release__gate {
  padding: 26px 30px;
}

.release__gate-title {
  font-size: var(--text-base);
  font-weight: var(--fw-semibold);
  color: var(--ink-on-night);
  margin: 0 0 8px;
}

.release__gate-text {
  font-size: var(--text-sm);
  line-height: 1.55;
  color: var(--ink-on-night-faint);
  margin: 0 0 16px;
  max-width: 480px;
}

.release__gate-form {
  display: flex;
  gap: 10px;
  max-width: 380px;
}

.release__gate-input {
  flex: 1;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .05);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
}

.release__gate-btn {
  padding: 10px 18px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .07);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: background-color .15s ease;
}

.release__gate-btn:hover {
  background: rgb(30 144 255 / .2);
  border-color: rgb(126 200 255 / .4);
}

.release__gate-error {
  margin: 10px 0 0;
  font-size: var(--text-sm);
  color: #ff8a8a;
}
</style>
