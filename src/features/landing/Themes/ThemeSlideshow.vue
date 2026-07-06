<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  interval: { type: Number, default: 2200 },
})

const active = ref(0)
let timer = null

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || props.images.length < 2) return
  timer = setInterval(() => {
    active.value = (active.value + 1) % props.images.length
  }, props.interval)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="theme-slideshow">
    <img
      v-for="(src, i) in images"
      :key="src"
      :src="src"
      alt="A Memorise theme variation"
      class="theme-slideshow__img"
      :class="{ 'is-active': i === active }"
    />
  </div>
</template>

<style scoped>
.theme-slideshow {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 30px 60px -20px rgb(0 0 0 / .25);
  aspect-ratio: 16 / 10;
  background: var(--color-gray-100);
}

.theme-slideshow__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  opacity: 0;
  transition: opacity 1s ease;
}

.theme-slideshow__img.is-active {
  opacity: 1;
}
</style>
