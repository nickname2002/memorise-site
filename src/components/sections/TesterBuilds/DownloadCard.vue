<script setup>
import OsGlyph from '../../icons/OsGlyph.vue'
import IconDownload from '../../icons/IconDownload.vue'

defineProps({
  download: { type: Object, required: true },
})
defineEmits(['toast'])
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
      v-if="download.url"
      class="dlcard__btn"
      :href="download.url"
      :download="download.file"
      @click="$emit('toast', 'Starting download · ' + download.file)"
    >
      <IconDownload />
      Download <span style="opacity:.6">· {{ download.size }}</span>
    </a>
    <button v-else class="dlcard__btn dlcard__btn--soon" disabled>
      Coming soon
    </button>
  </div>
</template>
