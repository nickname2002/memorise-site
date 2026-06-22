<script setup>
import { computed } from 'vue'
import Starfield from '../shared/Starfield.vue'
import DownloadCard from './DownloadCard.vue'
import { LANDING_DATA } from '../../../data.js'

const emit = defineEmits(['toast'])

const rel = computed(() => LANDING_DATA.release)
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
