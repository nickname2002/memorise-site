<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type Star = {
  x: number
  y: number
  r: number
  base: number
  amp: number
  sp: number
  ph: number
  blue: boolean
}

const props = withDefaults(defineProps<{ density?: number; constellation?: boolean }>(), {
  density: 1,
  constellation: false,
})

const cv = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cleanup: (() => void) | null = null

onMounted(() => {
  const canvasEl = cv.value
  if (!canvasEl) return
  const canvas: HTMLCanvasElement = canvasEl
  const context = canvas.getContext('2d')
  if (!context) return
  const ctx: CanvasRenderingContext2D = context
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let w = 0
  let h = 0
  let dpr = 1
  let stars: Star[] = []
  let t = 0

  const nodes: Array<[number, number]> = [
    [0.30, 0.30], [0.385, 0.66], [0.50, 0.46], [0.615, 0.66], [0.70, 0.30],
  ]

  function seed() {
    const count = Math.round((w * h) / 9000 * props.density)
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      base: Math.random() * 0.5 + 0.15,
      amp: Math.random() * 0.4 + 0.1,
      sp: Math.random() * 0.02 + 0.004,
      ph: Math.random() * Math.PI * 2,
      blue: Math.random() < 0.22,
    }))
  }

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = canvas.clientWidth; h = canvas.clientHeight
    canvas.width = w * dpr; canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    for (const s of stars) {
      const tw = reduce ? s.base : s.base + s.amp * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = s.blue ? `rgba(126,200,255,${tw})` : `rgba(255,255,255,${tw})`
      ctx.fill()
    }
    if (props.constellation) {
      const pts = nodes.map(([nx, ny]) => [nx * w, ny * h])
      const pulse = reduce ? 0.5 : 0.42 + 0.18 * Math.sin(t * 0.02)
      ctx.lineWidth = 1.4; ctx.lineCap = 'round'
      ctx.strokeStyle = `rgba(30,144,255,${pulse * 0.6})`
      ctx.shadowColor = 'rgba(30,144,255,0.7)'; ctx.shadowBlur = 14
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.stroke()
      ctx.shadowBlur = 0
      for (let i = 0; i < pts.length; i++) {
        const [px, py] = pts[i]
        const np = reduce ? 1 : 0.7 + 0.3 * Math.sin(t * 0.04 + i)
        const R = 2.6 + np * 1.6
        const g = ctx.createRadialGradient(px, py, 0, px, py, R * 6)
        g.addColorStop(0, `rgba(255,255,255,${0.95 * np})`)
        g.addColorStop(0.25, `rgba(190,225,255,${0.55 * np})`)
        g.addColorStop(1, 'rgba(30,144,255,0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(px, py, R * 6, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(255,255,255,${np})`
        ctx.beginPath(); ctx.arc(px, py, R * 0.7, 0, Math.PI * 2); ctx.fill()
      }
    }
    t += 1
    if (!reduce) raf = requestAnimationFrame(draw)
  }

  size(); draw()
  window.addEventListener('resize', size)
  cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size) }
})

onBeforeUnmount(() => { if (cleanup) cleanup() })
</script>

<template>
  <canvas ref="cv" class="starfield"></canvas>
</template>

<style scoped>
.starfield {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
}
</style>
