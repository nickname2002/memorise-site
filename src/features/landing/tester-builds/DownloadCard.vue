<script setup lang="ts">
import OsGlyph from '@/libs/ui/icons/OsGlyph.vue'
import IconDownload from '@/libs/ui/icons/IconDownload.vue'
import type { DownloadTarget } from '@/features/landing/data'
import { useTestPhaseGate } from '@/libs/useTestPhaseGate'

defineProps<{ download: DownloadTarget }>()
defineEmits<{ toast: [message: string] }>()

const { unlocked } = useTestPhaseGate()
</script>

<template>
  <div class="dlcard">
    <div class="dlcard__os">
      <OsGlyph :os="download.icon" />
      <div>
        <div class="dlcard__osname">{{ download.os }}</div>
        <div class="dlcard__size">{{ download.note }}</div>
      </div>
    </div>
    <div class="dlcard__file">{{ download.file }}</div>

    <a
      v-if="download.url && download.os === 'macOS'"
      class="dlcard__btn"
      href="./macos-install.html"
    >
      <IconDownload />
      Download <span style="opacity:.6">· {{ download.size }}</span>
    </a>

    <a
      v-else-if="download.url && unlocked"
      class="dlcard__btn"
      :href="download.url"
      :download="download.file"
      @click="$emit('toast', 'Starting download · ' + download.file)"
    >
      <IconDownload />
      Download <span style="opacity:.6">· {{ download.size }}</span>
    </a>

    <button v-else-if="download.url" class="dlcard__btn dlcard__btn--locked" disabled>
      <svg width="14" height="14"><use href="#i-lock"></use></svg>
      Locked
    </button>

    <button v-else class="dlcard__btn dlcard__btn--soon" disabled>
      Coming soon
    </button>
  </div>
</template>

<style scoped>
.dlcard {
  background: var(--night-900);
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}

.dlcard__os {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dlcard__os :deep(svg) {
  width: 22px;
  height: 22px;
  color: var(--star-pale);
}

.dlcard__osname {
  font-size: var(--text-base);
  font-weight: var(--fw-semibold);
  color: var(--ink-on-night);
}

.dlcard__file {
  font-size: var(--text-xs);
  color: var(--ink-on-night-faint);
  font-family: var(--font-mono);
}

.dlcard__btn {
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .07);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  transition: background-color .15s ease;
}

.dlcard__btn:hover {
  background: rgb(30 144 255 / .2);
  border-color: rgb(126 200 255 / .4);
}

.dlcard__btn:disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.dlcard__btn :deep(svg) {
  width: 15px;
  height: 15px;
}

.dlcard__btn--soon,
.dlcard__btn--locked {
  opacity: 1;
  background: rgb(255 255 255 / .04);
  border: 1px dashed rgb(255 255 255 / .18);
  color: var(--ink-on-night-faint);
}

.dlcard__size {
  font-size: var(--text-2xs);
  color: var(--ink-on-night-faint);
}
</style>
