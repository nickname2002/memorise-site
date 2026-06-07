<script setup>
import { ref, computed } from 'vue'
import Starfield from './Starfield.vue'
import SvgIcon from './SvgIcon.vue'
import OsGlyph from './OsGlyph.vue'
import { LANDING_DATA } from '../data.js'

const emit = defineEmits(['toast'])

// const mode = ref('code') // REQUEST ACCESS: temporarily removed (used by tab switcher)
const code = ref('')
// const email = ref('')        // REQUEST ACCESS: temporarily removed
const err = ref('')
const unlocked = ref(false)
// const requested = ref(false) // REQUEST ACCESS: temporarily removed

const rel = computed(() => LANDING_DATA.release)

function submitCode() {
  const ok = LANDING_DATA.codes.includes(code.value.trim().toUpperCase())
  if (ok) { unlocked.value = true; err.value = ''; emit('toast', 'Access granted — welcome, tester') }
  else { err.value = 'That code isn\'t valid. Check your invite email.' }
}

// REQUEST ACCESS: temporarily removed
// function submitRequest() {
//   if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) { err.value = 'Enter a valid email address.'; return }
//   requested.value = true; err.value = ''; emit('toast', 'Request received — we\'ll be in touch')
// }

// function setMode(m) { mode.value = m; err.value = '' } // REQUEST ACCESS: temporarily removed (used by tab switcher)
function relock() { unlocked.value = false; code.value = '' }
// function backToCode() { requested.value = false; mode.value = 'code'; email.value = '' } // REQUEST ACCESS: temporarily removed
</script>

<template>
  <section class="section builds" id="testers">
    <Starfield :density="0.6" />
    <div class="builds__inner">
      <div class="wrap">
        <div class="builds__head reveal">
          <p class="eyebrow eyebrow--night">For testers</p>
          <h2 class="section-title">Get the latest build</h2>
          <p class="section-lead">Memorise is in private <span style="color:var(--star-soft)">beta</span>. Builds are shared with invited testers — drop in your access code to get started.</p><!-- REQUEST ACCESS: "or request an invite" temporarily removed -->
        </div>

        <!-- Unlocked release card -->
        <div v-if="unlocked" class="release reveal is-in">
          <div class="release__card">
            <div class="release__top">
              <div>
                <div class="release__verline">
                  <span class="release__ver">Memorise {{ rel.version }}</span>
                  <span class="release__chip">{{ rel.channel }}</span>
                </div>
                <p class="release__meta">Released {{ rel.date }} · {{ rel.sha }}</p>
              </div>
              <div class="release__welcome">Signed in as <b>tester</b></div>
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
                <button class="dlcard__btn" @click="emit('toast', 'Starting download · ' + d.file)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download <span style="opacity:.6">· {{ d.size }}</span>
                </button>
              </div>
            </div>
            <div class="release__notes">
              <h4>What's new in {{ rel.version }}</h4>
              <ul>
                <li v-for="(n, i) in rel.notes" :key="i">
                  <span class="entry__tag" :class="'tag-' + n.tag">{{ n.tag }}</span>
                  <span>{{ n.text }}</span>
                </li>
              </ul>
              <div class="release__foot">
                <span class="release__lock" @click="relock">
                  <SvgIcon name="i-refresh" style="width:14px;height:14px" /> Lock builds
                </span>
                <span class="release__hashes">All builds notarised · {{ rel.sha }}</span>
              </div>
            </div>
          </div>
          <div class="release__archive">
            <a @click="emit('toast', 'Older builds are listed in the changelog')">Looking for an older build? See the archive →</a>
          </div>
        </div>

        <!-- Locked gate -->
        <div v-else class="gate reveal">
          <div class="gate__lock"><SvgIcon name="i-shield" /></div>

          <!-- REQUEST ACCESS: success state temporarily removed
          <div v-if="requested" class="gate__success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 class="gate__title">You're on the list</h3>
            <p class="gate__sub">We'll email <b style="color:var(--star-pale)">{{ email }}</b> an access code as testing spots open up.</p>
            <button class="gate__btn" style="max-width:200px;margin:var(--space-2) auto 0" @click="backToCode">Enter a code instead</button>
          </div>
          -->

          <h3 class="gate__title">Tester access</h3>
          <p class="gate__sub">Builds are gated while Memorise is in beta.</p>

          <!-- REQUEST ACCESS: tab switcher temporarily removed
          <div class="gate__seg">
            <button :class="{ on: mode === 'code' }" @click="setMode('code')">Have a code</button>
            <button :class="{ on: mode === 'request' }" @click="setMode('request')">Request access</button>
          </div>
          -->

          <form @submit.prevent="submitCode">
            <div class="gate__field">
              <label class="gate__label" for="code">Access code</label>
              <input id="code" class="gate__input gate__input--code" v-model="code" maxlength="20"
                     placeholder="· · · · · · · ·" autocomplete="off" />
            </div>
            <p class="gate__err">{{ err }}</p>
            <button class="gate__btn" type="submit" :disabled="!code.trim()">Unlock builds</button>
            <p class="gate__hint">Demo code: <code>MEM-2026-BETA-7X4K</code></p>
          </form>

          <!-- REQUEST ACCESS: request form temporarily removed
          <form v-else @submit.prevent="submitRequest">
            <div class="gate__field">
              <label class="gate__label" for="email">Email address</label>
              <input id="email" class="gate__input" type="email" v-model="email"
                     placeholder="you@example.com" autocomplete="email" />
            </div>
            <p class="gate__err">{{ err }}</p>
            <button class="gate__btn" type="submit" :disabled="!email.trim()">Request an invite</button>
            <p class="gate__hint">No spam — just a code when a spot opens up.</p>
          </form>
          -->
        </div>
      </div>
    </div>
  </section>
</template>
