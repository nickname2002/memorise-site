<script setup lang="ts">
import { computed } from 'vue'
import Starfield from '@/libs/ui/Starfield/Starfield.vue'
import DownloadCard from './DownloadCard.vue'
import { LANDING_DATA } from '@/features/landing/data'
import { useLatestMacos } from '@/libs/useLatestRelease'

const emit = defineEmits<{ toast: [message: string] }>()

const macos = useLatestMacos()

const rel = computed(() => {
  const release = LANDING_DATA.release
  if (!macos.value) return release
  return {
    ...release,
    downloads: release.downloads.map(d =>
      d.os === 'macOS' ? { ...d, ...macos.value } : d
    ),
  }
})
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
                v-for="d in rel.downloads"
                :key="d.os"
                :download="d"
                @toast="emit('toast', $event)"
              />
            </div>
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
</style>
