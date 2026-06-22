<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import SiteNav from './components/sections/SiteNav/SiteNav.vue'
import Hero from './components/sections/Hero/Hero.vue'
import Features from './components/sections/Features/Features.vue'
import Themes from './components/sections/Themes/Themes.vue'
import Preview from './components/sections/Preview/Preview.vue'
import Updates from './components/sections/Updates/Updates.vue'
import TesterBuilds from './components/sections/TesterBuilds/TesterBuilds.vue'
import SiteFooter from './components/sections/SiteFooter/SiteFooter.vue'
import IconSprite from './components/icons/IconSprite.vue'
import IconCheck from './components/icons/IconCheck.vue'

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
  <IconSprite />

  <SiteNav :solid="solid" />
  <Hero />
  <Features />
  <Themes />
  <Preview />
<!--  <Updates />-->
  <TesterBuilds @toast="showToast" />
  <SiteFooter />

  <div class="toast" :class="{ show: !!toast }">
    <IconCheck />
    <span>{{ toast }}</span>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--color-gray-900);
  color: #fff;
  padding: 11px 18px;
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  box-shadow: 0 10px 30px rgb(0 0 0 / .3);
  display: flex;
  align-items: center;
  gap: 9px;
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease, transform .25s ease;
  z-index: 200;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast :deep(svg) {
  width: 16px;
  height: 16px;
  color: #5fe6a0;
}
</style>
