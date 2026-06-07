<script setup>
import { computed } from 'vue'
import Starfield from './Starfield.vue'
import OsGlyph from './OsGlyph.vue'
import { LANDING_DATA } from '../data.js'

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
              <div class="dlcard" v-for="d in rel.downloads" :key="d.os">
                <div class="dlcard__os">
                  <OsGlyph :os="d.icon" />
                  <div>
                    <div class="dlcard__osname">{{ d.os }}</div>
                    <div class="dlcard__size">{{ d.note }}</div>
                  </div>
                </div>
                <div class="dlcard__file">{{ d.file }}</div>
                <button class="dlcard__btn" :disabled="d.os !== 'macOS'" @click="emit('toast', 'Starting download · ' + d.file)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download <span style="opacity:.6">· {{ d.size }}</span>
                </button>
              </div>
            </div>
<!--            <div class="release__notes">-->
<!--              <h4>What's new in {{ rel.version }}</h4>-->
<!--              <ul>-->
<!--                <li v-for="(n, i) in rel.notes" :key="i">-->
<!--                  <span class="entry__tag" :class="'tag-' + n.tag">{{ n.tag }}</span>-->
<!--                  <span>{{ n.text }}</span>-->
<!--                </li>-->
<!--              </ul>-->
<!--              <div class="release__foot">-->
<!--                <span class="release__hashes">All builds notarised · {{ rel.sha }}</span>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
