<script setup>
import PreviewCard from './PreviewCard.vue'
import { LANDING_DATA } from '../../../data.js'
</script>

<template>
  <section class="section preview">
    <div class="wrap">
      <div class="preview__head reveal">
        <p class="eyebrow">The whole app, one window</p>
        <h2 class="section-title">Three columns. Nothing more.</h2>
        <p class="section-lead preview__lead">Folders and tags on the left, your notes in the middle, the editor on the right. Collapse what you're not using and the page is all that's left.</p>
      </div>
      <div class="preview__strip reveal">
        <PreviewCard v-for="(c, i) in LANDING_DATA.previewCards" :key="i" :k="c.k" :t="c.t" />
      </div>
    </div>
  </section>
</template>
