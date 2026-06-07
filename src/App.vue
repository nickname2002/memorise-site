<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import SiteNav from './components/SiteNav.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Preview from './components/Preview.vue'
import Updates from './components/Updates.vue'
import TesterBuilds from './components/TesterBuilds.vue'
import SiteFooter from './components/SiteFooter.vue'

const solid = ref(false)
const toast = ref('')
let toastTimer = null
let io = null

function showToast(msg) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = '' }, 2600)
}

function onScroll() {
  solid.value = window.scrollY > window.innerHeight * 0.7
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  nextTick(() => {
    const els = document.querySelectorAll('.reveal')
    if (window.location.hash || !('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('is-in'))
    } else {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) } })
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
      els.forEach(e => io.observe(e))
    }
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) requestAnimationFrame(() => el.scrollIntoView())
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (io) io.disconnect()
})
</script>

<template>
  <!-- SVG icon sprite -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
    <symbol id="i-brush" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1 -9 -9"></path></symbol>
    <symbol id="i-folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"></path></symbol>
    <symbol id="i-keyboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 10h.01"></path><path d="M10 10h.01"></path><path d="M14 10h.01"></path><path d="M18 10h.01"></path><path d="M6 14h.01"></path><path d="M18 14h.01"></path><path d="M10 14h4"></path></symbol>
    <symbol id="i-note" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="12" y2="17"></line></symbol>
    <symbol id="i-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path></symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path></symbol>
    <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path></symbol>
    <symbol id="i-tag" viewBox="0 -960 960 960" fill="currentColor"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"></path></symbol>
  </svg>

  <SiteNav :solid="solid" />
  <Hero />
  <Features />
  <Preview />
  <Updates />
  <TesterBuilds @toast="showToast" />
  <SiteFooter />

  <div class="toast" :class="{ show: !!toast }">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>{{ toast }}</span>
  </div>
</template>
